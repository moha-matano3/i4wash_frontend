import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useRegistration } from '../../../store/useRegistration';
import './UserInfo.css';
import FormNavBtns from '../../../components/FormNavBtns/FormNavBtns.tsx';
import backBtn from '../../../assets/icons/backBtn.svg'
import nextBtn from '../../../assets/icons/nextBtn.svg'
import flowSVG from '../../../assets/icons/FormFlow/flow.svg'

export default function UserInfo() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [localData, setLocalData] = useState({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        designation: formData.designation,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLocalData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (value: string) => {
        setLocalData((prev) => ({ ...prev, phone: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData(localData);
        navigate('/register/step2');
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="form-container">
            <h3 className="title">Applicant Details</h3>
            <div className="flow">
                <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>

            <form onSubmit={handleSubmit} className="form-body">
                <div className="input">
                <div className="form-input">
                    <input
                        className="form-field"
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={localData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-input">
                    <input
                        className="form-field"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={localData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-input">
                    <PhoneInput
                        country={'ke'}
                        value={localData.phone}
                        onChange={handlePhoneChange}
                        inputClass="form-field"
                        placeholder="Phone Number"
                        inputStyle={{ width: '100%', height: '100%'}}
                    />
                </div>

                <div className="form-input">
                    <input
                        className="form-field"
                        type="text"
                        name="organization"
                        placeholder="Organization"
                        value={localData.organization}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-input">
                    <input
                        className="form-field"
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={localData.designation}
                        onChange={handleChange}
                    />
                </div>
                </div>

                <div className="form-buttons">
                    <FormNavBtns
                        svgSrc={backBtn}
                        alt="Go back"
                        onClick={handleBack}
                    />

                    <FormNavBtns
                        svgSrc={nextBtn}
                        alt="Continue"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}
