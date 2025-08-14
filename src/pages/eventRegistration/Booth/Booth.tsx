import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import * as React from "react";
import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
import backBtn from "../../../assets/icons/backBtn.svg";
import nextBtn from "../../../assets/icons/nextBtn.svg";
import flowSVG from "../../../assets/icons/FormFlow/flow4.svg";
import radioBtnSVGChecked from "../../../assets/icons/radioBtns/radioBtnChecked.svg";
import radioBtnSVG from "../../../assets/icons/radioBtns/radioBtn.svg";
import './Booth.css'

export default function Booth() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [needsBooth, setNeedsBooth] = useState<true | false>(formData.exhibitionBoothNeeded || false);
    const [boothCount, setBoothCount] = useState(formData.exhibitionBoothCount || 0);

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();

        if (needsBooth) {
            if (!boothCount || boothCount < 1 || boothCount > 5) {
                alert('Please enter a valid booth count between 1 and 5.');
                return;
            }
        }

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
            <h3 className="title">Exhibition Booth</h3>
            <div className="flow">
                <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>

            <form onSubmit={handleNext} className="form-body">
                <div className="form">
                    <div className="form-section-left">
                        <label className="presentation-question">
                            <div className="prompt">
                                <span>Do you require a booth?</span>
                                <p>We offer limited exhibition booths at a cost, an exhibition booth covers one 3x3 tent,
                                    dressed table and chairs, and décor in your corporate colors for the full 3 days.</p>
                            </div>
                            <div className="radio-group">
                                <label className="custom-radio">
                                    <input
                                        type="radio"
                                        name="booth"
                                        value="yes"
                                        checked={needsBooth === true}
                                        onChange={() => setNeedsBooth(true)}
                                    />
                                    <img
                                        className="icon"
                                        src={needsBooth === true ? radioBtnSVGChecked : radioBtnSVG}
                                        alt="radio"
                                    />
                                    Yes
                                </label>

                                <label className="custom-radio">
                                    <input
                                        type="radio"
                                        name="booth"
                                        value="no"
                                        checked={needsBooth === false}
                                        onChange={() => setNeedsBooth(false)}
                                    />
                                    <img
                                        className="icon"
                                        src={needsBooth === false ? radioBtnSVGChecked : radioBtnSVG}
                                        alt="radio"
                                    />
                                    No
                                </label>
                            </div>
                        </label>
                    </div>

                    {needsBooth && (
                        <div className="form-section-right">
                            <div className="booth-count-field">
                                <label className="form-label">
                                    How many booths? <span className="form-note">(Max 5)</span>
                                </label>
                                <select
                                    className="form-select booth-select"
                                    name="boothCount"
                                    value={boothCount}
                                    onChange={(e) => setBoothCount(Number(e.target.value))}
                                    required
                                >
                                    {[1, 2, 3, 4, 5].map((count) => (
                                        <option key={count} value={count}>
                                            {count}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    )}
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
