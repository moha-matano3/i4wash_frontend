import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import * as React from "react";
import './Presentation.css';
import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
import backBtn from "../../../assets/icons/backBtn.svg";
import nextBtn from "../../../assets/icons/nextBtn.svg";
import flowSVG from "../../../assets/icons/FormFlow/flow2.svg";
import uploadSVG from "../../../assets/icons/upload.svg";
import radioBtnSVG from "../../../assets/icons/radioBtns/radioBtn.svg"
import radioBtnSVGChecked from "../../../assets/icons/radioBtns/radioBtnChecked.svg"

export default function Presentation() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [presentationReady, setPresentationReady] = useState(formData.presentationReady);
    const [presentationFileUrl, setPresentationFileUrl] = useState(formData.presentationFileUrl || '');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fakeUrl = `/uploads/${file.name}`;
            setPresentationFileUrl(fakeUrl);
        }
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
            presentationReady,
            presentationFileUrl: presentationReady ? presentationFileUrl : '',
        });
        navigate('/register/step3');
    };
    const handleBack = () => {
        navigate('/register/step1');
    };

    return (
        <div className="form-container">
            <h3 className="title">Presentation</h3>
            <div className="flow">
                <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
        <form onSubmit={handleNext} className="form-body">
            <div className="form">
                {/* Prompt Section */}
                <div className="form-section-left">
                    <label className="presentation-question">
                        <div className="prompt">
                            <span>Do you have a presentation ready?</span>
                            <p>
                                If yes, please upload your presentation document so we can review it in advance and include it in the program.
                                <br />
                                If no, that’s okay — you can always submit it later when it’s ready.
                            </p>
                        </div>
                        <div className="radio-group">
                            <label className="custom-radio">
                                <input
                                    type="radio"
                                    name="presentation"
                                    value="yes"
                                    checked={presentationReady === true}
                                    onChange={() => setPresentationReady(true)}
                                />
                                <img
                                    className="icon"
                                    src={presentationReady === true ? radioBtnSVGChecked : radioBtnSVG}
                                    alt="radio"
                                />
                                Yes
                            </label>

                            <label className="custom-radio">
                                <input
                                    type="radio"
                                    name="presentation"
                                    value="no"
                                    checked={presentationReady === false}
                                    onChange={() => setPresentationReady(false)}
                                />
                                <img
                                    className="icon"
                                    src={presentationReady === false ? radioBtnSVGChecked : radioBtnSVG}
                                    alt="radio"
                                />
                                No
                            </label>
                        </div>
                    </label>
                </div>

                {/* Upload Section (conditionally rendered) */}
                    <div className="form-section-right">
                        {presentationReady && (
                            <>
                                <div className="upload-box">
                                    <div className="upload-labels">
                                        <span className="upload-label">Upload your presentation</span>
                                        <span className="upload-label">(.ppt/.pdf)</span>
                                    </div>
                                    <img src={uploadSVG} alt="" className="upload-icon" style={{ width: '100%', height: '20%' }} />
                                    <input
                                        type="file"
                                        accept=".pdf,.ppt,.pptx"
                                        onChange={handleFileChange}
                                        className="file-input"/>
                                </div>
                            </>
                           )}
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