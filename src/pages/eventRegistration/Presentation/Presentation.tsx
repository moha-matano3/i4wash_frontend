import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import * as React from "react";
import './Presentation.css';
import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
import backBtn from "../../../assets/icons/backBtn.svg";
import nextBtn from "../../../assets/icons/nextBtn.svg";
import flowSVG from "../../../assets/icons/FormFlow/flow3.svg";
import uploadSVG from "../../../assets/icons/upload.svg";
import radioBtnSVG from "../../../assets/icons/radioBtns/radioBtn.svg";
import radioBtnSVGChecked from "../../../assets/icons/radioBtns/radioBtnChecked.svg";

export default function Presentation() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [presentationReady, setPresentationReady] = useState<boolean>(formData.presentationReady || false);
    const [presentationFile, setPresentationFile] = useState<{
        filename: string;
        base64: string;
    } | undefined>(formData.presentationFile);

    const [showModal, setShowModal] = useState(true);
    const [agreeChecked, setAgreeChecked] = useState(false);

    // Convert file to pure base64 (no data: prefix)
    const convertFileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result as string;
                const pureBase64 = result.split(',')[1]; // strip "data:...;base64,"
                resolve(pureBase64);
            };
            reader.onerror = error => reject(error);
        });
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const base64 = await convertFileToBase64(file);
                setPresentationFile({
                    filename: file.name,
                    base64,
                });
            } catch (error) {
                console.error("File upload failed:", error);
            }
        }
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
            presentationReady,
            presentationFile: presentationReady ? presentationFile : undefined,
        });
        navigate('/register/step4');
    };

    const handleBack = () => {
        navigate('/register/step2');
    };

    const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreeChecked(e.target.checked);
    };

    const closeModal = () => {
        if (agreeChecked) {
            setShowModal(false);
        }
    };

    return (
        <div className="form-container">
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Presentation Guidelines</h2>
                        {/* ... (unchanged modal text) */}
                        <label className="agree-checkbox">
                            <input
                                type="checkbox"
                                checked={agreeChecked}
                                onChange={handleAgreeChange}
                            />
                            I have read and agree to the presentation guidelines.
                        </label>

                        <button
                            onClick={closeModal}
                            disabled={!agreeChecked}
                            className={`agree-btn ${agreeChecked ? '' : 'disabled'}`}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {!showModal && (
                <>
                    <h3 className="title">Presentation</h3>
                    <div className="flow">
                        <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <form onSubmit={handleNext} className="form-body">
                        <div className="form">
                            <div className="form-section-left">
                                <label className="presentation-question">
                                    <div className="prompt">
                                        <span>Do you have a presentation ready?</span>
                                        <p>
                                            If yes, please upload your presentation document so we can review it in advance and
                                            include it in the program.
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
                                                checked={presentationReady}
                                                onChange={() => setPresentationReady(true)}
                                            />
                                            <img
                                                className="icon"
                                                src={presentationReady ? radioBtnSVGChecked : radioBtnSVG}
                                                alt="radio"
                                            />
                                            Yes
                                        </label>

                                        <label className="custom-radio">
                                            <input
                                                type="radio"
                                                name="presentation"
                                                value="no"
                                                checked={!presentationReady}
                                                onChange={() => setPresentationReady(false)}
                                            />
                                            <img
                                                className="icon"
                                                src={!presentationReady ? radioBtnSVGChecked : radioBtnSVG}
                                                alt="radio"
                                            />
                                            No
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="form-section-right">
                                {presentationReady && (
                                    <div className="upload-box">
                                        <div className="upload-labels">
                                            <span className="upload-label">Upload your presentation</span>
                                            <span className="upload-label">(.ppt/.pdf)</span>
                                        </div>
                                        <img src={uploadSVG} alt="" className="upload-icon"
                                             style={{ width: '100%', height: '20%' }} />
                                        <input
                                            type="file"
                                            accept=".pdf,.ppt,.pptx"
                                            onChange={handleFileChange}
                                            className="file-input"
                                        />
                                        {presentationFile && (
                                            <p className="file-preview">
                                                Selected file: <strong>{presentationFile.filename}</strong>
                                            </p>
                                        )}
                                    </div>
                                )}
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
                </>
            )}
        </div>
    );
}