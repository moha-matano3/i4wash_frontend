import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import * as React from "react";
import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
import backBtn from "../../../assets/icons/backBtn.svg";
import nextBtn from "../../../assets/icons/nextBtn.svg";
import flowSVG from "../../../assets/icons/FormFlow/flow4.svg";

export default function Booth() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [needsBooth, setNeedsBooth] = useState(formData.exhibitionBoothNeeded);
    const [boothCount, setBoothCount] = useState(formData.exhibitionBoothCount || 0);

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
            exhibitionBoothNeeded: needsBooth,
            exhibitionBoothCount: needsBooth ? boothCount : 0,
        });
        navigate('/register/step5');
    };
    const handleBack = () => {
        navigate('/register/step3');
    };

    return (
        <div className="form-container">
            <div className="flow">
                <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <h3 className="title">Exhibition Booth</h3>

            <form onSubmit={handleNext} className="form-body">
                <div className="form">
                <div className="form-input">
                    <label className="form-label">Do you require a booth?</label>
                    <select
                        className="form-field"
                        value={needsBooth ? 'yes' : 'no'}
                        onChange={(e) => setNeedsBooth(e.target.value === 'yes')}
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>

                {needsBooth && (
                    <div className="form-input">
                        <label className="form-label">How many booths? (Max 5)</label>
                        <input
                            className="form-field"
                            type="number"
                            name="boothCount"
                            min={1}
                            max={5}
                            value={boothCount}
                            onChange={(e) => setBoothCount(Number(e.target.value))}
                            required
                        />
                    </div>
                )}

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
