import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import type { Attendee } from '../../../pages/FormDataTypes/RegistrationTypes';

export default function Attendees() {
  const navigate = useNavigate();
  const { formData, setFormData } = useRegistration();

  const [hasAttendees, setHasAttendees] = useState(formData.attendees.length > 0);
  const [attendees, setAttendees] = useState<Attendee[]>(
    formData.attendees.length > 0
      ? formData.attendees
      : [{ fullName: '', email: '', attendeePhone: '', organization: '' }]
  );

  const handleChange = (index: number, field: keyof Attendee, value: string) => {
    const updated = [...attendees];
    updated[index][field] = value;
    setAttendees(updated);
  };

  const addAttendee = () => {
    setAttendees([...attendees, { fullName: '', email: '', attendeePhone: '', organization: '' }]);
  };

  const removeAttendee = (index: number) => {
    if (attendees.length === 1) return;
    const updated = attendees.filter((_, i) => i !== index);
    setAttendees(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({
      attendees: hasAttendees ? attendees : [],
    });

    navigate('/register/step5');
  };

  return (
    <div className="form-container h-full flex flex-col">
      <h3>Attendees</h3>

      <form onSubmit={handleSubmit} className="form-body flex-1 flex flex-col space-y-4">
        {/* Do you have attendees? */}
        <div className="form-input">
          <label className="form-label">Do you have any attendees?</label>
          <select
            className="form-field"
            value={hasAttendees ? 'yes' : 'no'}
            onChange={(e) => setHasAttendees(e.target.value === 'yes')}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Conditionally show attendee form */}
        {hasAttendees && (
          <div className="overflow-y-auto max-h-[60vh] pr-2 flex-1">
            {attendees.map((attendee, index) => (
              <div key={index} className="form-attendee-group mb-4 border-b pb-4">
                <div className="form-input">
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-field"
                    type="text"
                    value={attendee.fullName}
                    onChange={(e) => handleChange(index, 'fullName', e.target.value)}
                    required
                  />
                </div>

                <div className="form-input">
                  <label className="form-label">Email</label>
                  <input
                    className="form-field"
                    type="email"
                    value={attendee.email}
                    onChange={(e) => handleChange(index, 'email', e.target.value)}
                    required
                  />
                </div>

                <div className="form-input">
                  <label className="form-label">Phone</label>
                  <input
                    className="form-field"
                    type="tel"
                    value={attendee.attendeePhone}
                    onChange={(e) => handleChange(index, 'attendeePhone', e.target.value)}
                    required
                  />
                </div>

                <div className="form-input">
                  <label className="form-label">Organization</label>
                  <input
                    className="form-field"
                    type="text"
                    value={attendee.organization}
                    onChange={(e) => handleChange(index, 'organization', e.target.value)}
                    required
                  />
                </div>

                <button
                  type="button"
                  className="form-button small danger mt-2"
                  onClick={() => removeAttendee(index)}
                  disabled={attendees.length === 1}
                >
                  Remove
                </button>
              </div>
            ))}

            <button type="button" className="form-button mt-2" onClick={addAttendee}>
              + Add Attendee
            </button>
          </div>
        )}

        <button type="submit" className="form-button mt-4">Next →</button>
      </form>
    </div>
  );
}


// import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { useRegistration } from '../../../store/useRegistration';
// import type { Attendee } from '../../Types/RegistrationTypes';

// export default function Attendees() {
//     // const navigate = useNavigate();
//     const { formData, setFormData } = useRegistration();

//     const [attendees, setAttendees] = useState<Attendee[]>(
//         formData.attendees.length > 0
//             ? formData.attendees
//             : [{ fullName: '', email: '', phone: '', organization: '' }]
//     );

//     const [loading, setLoading] = useState(false);

//     const handleChange = (index: number, field: keyof Attendee, value: string) => {
//         const updated = [...attendees];
//         updated[index][field] = value;
//         setAttendees(updated);
//     };

//     const addAttendee = () => {
//         setAttendees([...attendees, { fullName: '', email: '', phone: '', organization: '' }]);
//     };

//     const removeAttendee = (index: number) => {
//         if (attendees.length === 1) return;
//         const updated = attendees.filter((_, i) => i !== index);
//         setAttendees(updated);
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setLoading(true);

//         setFormData({ ...formData, attendees });

//         try {
//             const formDataToSend = {
//                 fullName: formData.fullName,
//                 email: formData.email,
//                 phone: formData.phone,
//                 organization: formData.organization,
//                 designation: formData.designation,
//                 presentationReady: formData.presentationReady,
//                 // presentationFile: formData.presentationFile, // this is fine if your backend expects an object
//                 exhibitionBoothNeeded: formData.exhibitionBoothNeeded,
//                 exhibitionBoothCount: formData.exhibitionBoothCount,
//                 attendees: attendees,
//             };

//             const response = await fetch(
//                 'http://www.i4wash.com:8000/api/method/i4wash_app.i4wash.api.registration.create_event_registration',
//                 {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ data: JSON.stringify(formDataToSend) }),
//                 }
//             );

//             const result = await response.json();
//             // handle result here...
//             } catch (error) {
//             console.error('Error submitting form:', error);
//             }
//     };

//     return (
//         <div className="form-container h-full flex flex-col">
//             <h3>Attendees</h3>

//             <form onSubmit={handleSubmit} className="form-body flex-1 flex flex-col">
//                 <div className="overflow-y-auto max-h-[60vh] pr-2 flex-1">
//                     {attendees.map((attendee, index) => (
//                         <div key={index} className="form-attendee-group mb-4 border-b pb-4">
//                             <div className="form-input">
//                                 <label className="form-label">Full Name</label>
//                                 <input
//                                     className="form-field"
//                                     type="text"
//                                     value={attendee.fullName}
//                                     onChange={(e) => handleChange(index, 'fullName', e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-input">
//                                 <label className="form-label">Email</label>
//                                 <input
//                                     className="form-field"
//                                     type="email"
//                                     value={attendee.email}
//                                     onChange={(e) => handleChange(index, 'email', e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-input">
//                                 <label className="form-label">Phone Number</label>
//                                 <input
//                                     className="form-field"
//                                     type="tel"
//                                     value={attendee.phone}
//                                     onChange={(e) => handleChange(index, 'phone', e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-input">
//                                 <label className="form-label">Organization</label>
//                                 <input
//                                     className="form-field"
//                                     type="text"
//                                     value={attendee.organization}
//                                     onChange={(e) => handleChange(index, 'organization', e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <button
//                                 type="button"
//                                 className="form-button small danger mt-2"
//                                 onClick={() => removeAttendee(index)}
//                                 disabled={attendees.length === 1}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Controls */}
//                 <div className="mt-4 space-y-2">
//                     <button type="button" className="form-button" onClick={addAttendee}>
//                         + Add Attendee
//                     </button>

//                     <button type="submit" className="form-button" disabled={loading}>
//                         {loading ? (
//                             <span className="flex items-center justify-center">
//                                 <svg
//                                     className="animate-spin h-5 w-5 mr-2 text-white"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <circle
//                                         className="opacity-25"
//                                         cx="12"
//                                         cy="12"
//                                         r="10"
//                                         stroke="currentColor"
//                                         strokeWidth="4"
//                                     />
//                                     <path
//                                         className="opacity-75"
//                                         fill="currentColor"
//                                         d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
//                                     />
//                                 </svg>
//                                 Processing...
//                             </span>
//                         ) : (
//                             'Next →'
//                         )}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
