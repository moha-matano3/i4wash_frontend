import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import PhoneInput from "react-phone-input-2";
import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
import './Attendees.css';
import backBtn from "../../../assets/icons/backBtn.svg";
import nextBtn from "../../../assets/icons/nextBtn.svg";
import addBtn from "../../../assets/icons/add.svg"
import removeBtn from "../../../assets/icons/removeBtn.svg";
import flowSVG from "../../../assets/icons/FormFlow/flow3.svg";


type Attendee = {
    fullName: string;
    email: string;
    phone: string;
    organization: string;
};

export default function Attendees() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [attendees, setAttendees] = useState<Attendee[]>(
        formData.attendees.length > 0
            ? formData.attendees
            : [{ fullName: '', email: '', phone: '', organization: ''}]
    );

    const handleChange = (index: number, field: keyof Attendee, value: string) => {
        const updated = [...attendees];
        updated[index][field] = value;
        setAttendees(updated);
    };
    const handlePhoneChange = (value: string, index: number) => {
        setAttendees((prev) =>
            prev.map((attendee, i) =>
                i === index ? { ...attendee, phone: value } : attendee
            )
        );
    };

    const addAttendee = () => {
        setAttendees([...attendees, { fullName: '', email: '', phone: '' , organization: '' }]);
    };

    const removeAttendee = (index: number) => {
        if (attendees.length === 1) return; // prevent removing all
        const updated = attendees.filter((_, i) => i !== index);
        setAttendees(updated);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isEmptyAttendee =
            attendees.length === 1 &&
            !attendees[0].fullName &&
            !attendees[0].email &&
            !attendees[0].phone &&
            !attendees[0].organization;

        if (isEmptyAttendee) {
            // Submit as undefined to skip attendee validation
            setFormData({ ...formData, attendees: undefined });
            navigate('/register/step5');
            return;
        }

        const isValid = attendees.every(a =>
            a.fullName && a.email && a.phone && a.organization
        );

        if (attendees.length > 0 && !isValid) {
            alert("Please fill out all fields for each attendee.");
            return;
        }

        setFormData({ ...formData, attendees: attendees.length > 0 ? attendees : undefined });
        navigate('/register/step5');
    };
    const handleBack = () => {
        navigate('/register/step2');
    };

    return (
        <div className="form-container">
            <h3 className="title">Attendees</h3>
            <div className="flow">
                <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <form onSubmit={handleSubmit} className="form-body">
                <div className="form">
                {/* Controls */}
                <div className="form-attsection-left">
                <div className="addBtnSection">
                    <button type="button" onClick={addAttendee}>
                        <img src={addBtn} alt="" style={{ width: '100%', height: '100%' }} />
                    </button>
                    <span>Add Attendees</span>
                </div>
                </div>
                <div className="form-attsection-right">
                    {attendees.map((attendee, index) => (
                        <div key={index} className="form-attendee-group">
                            <div className="form-input">
                                <input
                                    className="form-field"
                                    type="text"
                                    placeholder="Full Name"
                                    value={attendee.fullName}
                                    onChange={(e) => handleChange(index, 'fullName', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-input">
                                <input
                                    className="form-field"
                                    type="email"
                                    placeholder="Email"
                                    value={attendee.email}
                                    onChange={(e) => handleChange(index, 'email', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-input">
                                <PhoneInput
                                    country={'ke'}
                                    value={attendee.phone}
                                    onChange={(phone) => handlePhoneChange(phone, index)}
                                    inputClass="form-field"
                                    placeholder="Phone Number"
                                    inputStyle={{ width: '100%', height: '100%' }}
                                />
                            </div>

                            <div className="form-input">
                                    <input
                                        className="form-field"
                                        type="text"
                                        placeholder="Organization"
                                        value={attendee.organization}
                                        onChange={(e) => handleChange(index, 'organization', e.target.value)}
                                        required
                                    />
                            </div>

                            <button
                                type="button"
                                onClick={() => removeAttendee(index)}
                                disabled={attendees.length === 1}
                            >
                                <img src={removeBtn} alt="" style={{ width: '50%', height: '50%' }} />
                            </button>
                        </div>
                    ))}
                </div>
                </div>
                {/* Navigation Buttons */}
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
