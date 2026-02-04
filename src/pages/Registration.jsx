import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css';
import loaderVideo from '../assets/loader.mp4';
import paymentInfoImg from '../assets/payment-info.jpeg';

const Registration = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        mobile: '',
        ward: '',
        playerType: '',
        photo: null,
        paymentScreenshot: null,
        upiId: ''
    });

    const [previews, setPreviews] = useState({
        photo: null,
        paymentScreenshot: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Strict numeric validation for specific fields
        if (name === 'age' || name === 'mobile' || name === 'upiId') {
            const numericValue = value.replace(/[^0-9]/g, '');
            setFormData(prev => ({ ...prev, [name]: numericValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            setFormData(prev => ({ ...prev, [name]: file }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({ ...prev, [name]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validateStep = (currentStep) => {
        if (currentStep === 1) {
            if (!formData.name) return alert("Name is required");
            if (!formData.age || parseInt(formData.age) < 13 || parseInt(formData.age) > 45) return alert("Age must be between 13 and 45");
            if (!formData.mobile || formData.mobile.length !== 10) return alert("Mobile number must be exactly 10 digits");
            if (!formData.ward) return alert("Please select a ward");
            if (!formData.playerType) return alert("Please select a player type");
        }
        if (currentStep === 2) {
            if (!formData.photo) return alert("Please upload a photo");
        }
        if (currentStep === 3) {
            if (!formData.upiId || formData.upiId.length !== 12) return alert("UPI Transaction ID must be exactly 12 digits");
            if (!formData.paymentScreenshot) return alert("Please upload payment screenshot");
        }
        return true;
    };

    const nextStep = () => {
        if (validateStep(step)) {
            setStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep(step)) return;

        setLoading(true);

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('age', formData.age);
            data.append('mobileNumber', formData.mobile);
            data.append('wardNumber', formData.ward);
            data.append('role', formData.playerType);
            data.append('upiTransactionId', formData.upiId);
            data.append('photo', formData.photo);
            data.append('paymentScreenshot', formData.paymentScreenshot);

            const response = await fetch(import.meta.env.VITE_BACKEND_URI_LOCAL, {
                method: 'POST',
                credentials: 'omit',
                body: data
            });

            const result = await response.json();

            if (result.error) {
                throw new Error(result.error);
            }

            navigate('/success');
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="loader-container">
                <video src={loaderVideo} autoPlay loop muted playsInline className="loader-video" />
                <p>Submitting Registration...</p>
            </div>
        );
    }

    return (
        <div className="registration-container section fade-in">
            <div className="form-card">
                <h2 className="form-title">Player Registration</h2>

                {/* Progress Steps */}
                <div className="steps-container">
                    <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
                        <div className="step-circle">1</div>
                        <p>Personal</p>
                    </div>
                    <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
                    <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
                        <div className="step-circle">2</div>
                        <p>Photo</p>
                    </div>
                    <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
                    <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
                        <div className="step-circle">3</div>
                        <p>Payment</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="form-step fade-in">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Age (13-45)</label>
                                <input type="text" name="age" inputMode="numeric" maxLength="2" value={formData.age} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="tel" name="mobile" inputMode="numeric" maxLength="10" value={formData.mobile} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Ward</label>
                                <div className="radio-group">
                                    <label>
                                        <input type="radio" name="ward" value="Ward 40" checked={formData.ward === 'Ward 40'} onChange={handleChange} /> Ward 40
                                    </label>
                                    <label>
                                        <input type="radio" name="ward" value="Ward 41" checked={formData.ward === 'Ward 41'} onChange={handleChange} /> Ward 41
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Player Type</label>
                                <div className="radio-group">
                                    <label><input type="radio" name="playerType" value="Batter" checked={formData.playerType === 'Batter'} onChange={handleChange} /> Batter</label>
                                    <label><input type="radio" name="playerType" value="Bowler" checked={formData.playerType === 'Bowler'} onChange={handleChange} /> Bowler</label>
                                    <label><input type="radio" name="playerType" value="All Rounder" checked={formData.playerType === 'All Rounder'} onChange={handleChange} /> All Rounder</label>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary btn-block" onClick={nextStep}>Next</button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="form-step fade-in">
                            <div className="form-group upload-group">
                                <label>Player Photo</label>
                                <div className="file-upload-box">
                                    {previews.photo ? (
                                        <img src={previews.photo} alt="Preview" className="img-preview" />
                                    ) : (
                                        <p>Click to upload or drag image</p>
                                    )}
                                    <input type="file" name="photo" accept="image/*" onChange={handleFileChange} />
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline" onClick={prevStep}>Previous</button>
                                <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="form-step fade-in">
                            <div className="form-group">
                                <label>Scan to Pay</label>
                                <div className="qr-container">
                                    <img src={paymentInfoImg} alt="Payment QR Code" className="qr-image" />
                                    <p className="upi-text">
                                        UPI Id : <span className="highlight-text">7977468454@ptyes</span>
                                    </p>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>UPI Transaction ID</label>
                                <input type="text" name="upiId" inputMode="numeric" maxLength="12" value={formData.upiId} onChange={handleChange} required placeholder="12-digit Transaction ID" />
                            </div>
                            <div className="form-group upload-group">
                                <label>Payment Screenshot</label>
                                <div className="file-upload-box">
                                    {previews.paymentScreenshot ? (
                                        <img src={previews.paymentScreenshot} alt="Preview" className="img-preview" />
                                    ) : (
                                        <p>Click to upload or drag image</p>
                                    )}
                                    <input type="file" name="paymentScreenshot" accept="image/*" onChange={handleFileChange} />
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline" onClick={prevStep}>Previous</button>
                                <button type="submit" className="btn btn-primary">Submit Registration</button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Registration;
