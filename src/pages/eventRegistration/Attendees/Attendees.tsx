// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useRegistration } from '../../../store/useRegistration.ts';
// import type { Attendee } from "../../../store/RegistrationTypes.ts";
// import PhoneInput from "react-phone-input-2";
// import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
// import './Attendees.css';
// import backBtn from "../../../assets/icons/backBtn.svg";
// import nextBtn from "../../../assets/icons/nextBtn.svg";
// import addBtn from "../../../assets/icons/add.svg"
// import removeBtn from "../../../assets/icons/removeBtn.svg";
// import flowSVG from "../../../assets/icons/FormFlow/flow2.svg";


// export default function Attendees() {
//     const navigate = useNavigate();
//     const { formData, setFormData } = useRegistration();

//     // const [hasAttendees, setHasAttendees] = useState(formData.attendees.length > 0);
//     const [attendees, setAttendees] = useState<Attendee[]>(
//         formData.attendees.length > 0
//             ? formData.attendees
//             : [{ fullName: '', email: '', attendeePhone: '', attendeeOrganization: '' }]
//     );

//     const handleChange = (index: number, field: keyof Attendee, value: string) => {
//         const updated = [...attendees];
//         updated[index][field] = value;
//         setAttendees(updated);
//     };

//     const handlePhoneChange = (phone: string, index: number) => {
//         const updated = [...attendees];
//         updated[index].attendeePhone = phone;
//         setAttendees(updated);
//     };

//     const addAttendee = () => {
//         setAttendees([...attendees, { fullName: '', email: '', attendeePhone: '', attendeeOrganization: '' }]);
//     };

//     const removeAttendee = (index: number) => {
//         if (attendees.length === 1) return;
//         const updated = attendees.filter((_, i) => i !== index);
//         setAttendees(updated);
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         setFormData({
//             ...formData,
//             attendees: attendees,
//         });


//         navigate('/register/step3');
//     };
//     const handleBack = () => {
//         navigate('/register/step1');
//     };

//     return (
//         <div className="form-container">
//             <h3 className="title">Attendees</h3>
//             <div className="flow">
//                 <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
//             </div>
//             <form onSubmit={handleSubmit} className="form-body">
//                 <div className="form">
//                 {/* Controls */}
//                 <div className="form-attsection-left">
//                 <div className="addBtnSection">
//                     <button type="button" onClick={addAttendee}>
//                         <img src={addBtn} alt="" style={{ width: '100%', height: '100%' }} />
//                     </button>
//                     <span>Add Attendees</span>
//                 </div>
//                 </div>
//                 <div className="form-attsection-right">
//                     {attendees.map((attendee, index) => (
//                         <div key={index} className="form-attendee-group">
//                             <div className="form-input">
//                                 <input
//                                     className="form-field"
//                                     type="text"
//                                     placeholder="Full Name"
//                                     value={attendee.fullName}
//                                     onChange={(e) => handleChange(index, 'fullName', e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-input">
//                                 <input
//                                     className="form-field"
//                                     type="email"
//                                     placeholder="Email"
//                                     value={attendee.email}
//                                     onChange={(e) => handleChange(index, 'email', e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-input">
//                                 <PhoneInput
//                                     country={'ke'}
//                                     value={attendee.attendeePhone}
//                                     onChange={(phone) => handlePhoneChange(phone, index)}
//                                     inputClass="form-field"
//                                     placeholder="Phone Number"
//                                     inputStyle={{ width: '100%', height: '100%' }}
//                                 />
//                             </div>

//                             <div className="form-input">
//                                     <input
//                                         className="form-field"
//                                         type="text"
//                                         placeholder="Organization"
//                                         value={attendee.attendeeOrganization}
//                                         onChange={(e) => handleChange(index, 'attendeeOrganization', e.target.value)}
//                                         required
//                                     />
//                             </div>

//                             <button
//                                 type="button"
//                                 onClick={() => removeAttendee(index)}
//                                 disabled={attendees.length === 1}
//                             >
//                                 <img src={removeBtn} alt="" style={{ width: '50%', height: '50%' }} />
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//                 </div>
//                 {/* Navigation Buttons */}
//                 <div className="form-buttons">
//                     <FormNavBtns
//                         svgSrc={backBtn}
//                         alt="Go back"
//                         onClick={handleBack}
//                     />

//                     <FormNavBtns
//                         svgSrc={nextBtn}
//                         alt="Continue"
//                         type="submit"
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration.ts';
import type { Attendee } from "../../../store/RegistrationTypes.ts";
import PhoneInput from "react-phone-input-2";
import FormNavBtns from "../../../components/FormNavBtns/FormNavBtns.tsx";
import './Attendees.css';
import backBtn from "../../../assets/icons/backBtn.svg";
import nextBtn from "../../../assets/icons/nextBtn.svg";
import addBtn from "../../../assets/icons/add.svg"
import removeBtn from "../../../assets/icons/removeBtn.svg";
import flowSVG from "../../../assets/icons/FormFlow/flow2.svg";

export default function Attendees() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [hasAttendees, setHasAttendees] = useState<boolean>(formData.hasAttendees || false);
    const [attendees, setAttendees] = useState<Attendee[]>(
        formData.attendees.length > 0
            ? formData.attendees
            : [{ fullName: '', email: '', attendeePhone: '', attendeeOrganization: '' }]
    );

    const handleChange = (index: number, field: keyof Attendee, value: string) => {
        const updated = [...attendees];
        updated[index][field] = value;
        setAttendees(updated);
    };

    const handlePhoneChange = (phone: string, index: number) => {
        const updated = [...attendees];
        updated[index].attendeePhone = phone;
        setAttendees(updated);
    };

    const addAttendee = () => {
        setAttendees([...attendees, { fullName: '', email: '', attendeePhone: '', attendeeOrganization: '' }]);
    };

    const removeAttendee = (index: number) => {
        if (attendees.length === 1) return;
        const updated = attendees.filter((_, i) => i !== index);
        setAttendees(updated);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setFormData({
            ...formData,
            hasAttendees,
            attendees: hasAttendees ? attendees : [],
        });

        navigate('/register/step3');
    };

    const handleBack = () => {
        navigate('/register/step1');
    };

    return (
        <div className="form-container">
            <h3 className="title">Attendees</h3>
            <div className="flow">
                <img src={flowSVG} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <form onSubmit={handleSubmit} className="form-body">

                {/* Question: Are you coming with attendees? */}
                <div className="form-question">
                    <label>Are you coming with attendees?</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="hasAttendees"
                                value="yes"
                                checked={hasAttendees === true}
                                onChange={() => setHasAttendees(true)}
                            /> Yes
                        </label>
                        <label style={{ marginLeft: '1rem' }}>
                            <input
                                type="radio"
                                name="hasAttendees"
                                value="no"
                                checked={hasAttendees === false}
                                onChange={() => setHasAttendees(false)}
                            /> No
                        </label>
                    </div>
                </div>

                {hasAttendees && (
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
                                            value={attendee.attendeePhone}
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
                                            value={attendee.attendeeOrganization}
                                            onChange={(e) => handleChange(index, 'attendeeOrganization', e.target.value)}
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
                )}

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