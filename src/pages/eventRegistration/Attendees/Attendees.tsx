import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/RegistrationContext';

type Attendee = {
    fullName: string;
    email: string;
    phone: string;
};

export default function Attendees() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [attendees, setAttendees] = useState<Attendee[]>(
        formData.attendees.length > 0
            ? formData.attendees
            : [{ fullName: '', email: '', phone: '' }]
    );

    const handleChange = (index: number, field: keyof Attendee, value: string) => {
        const updated = [...attendees];
        updated[index][field] = value;
        setAttendees(updated);
    };

    const addAttendee = () => {
        setAttendees([...attendees, { fullName: '', email: '', phone: '' }]);
    };

    const removeAttendee = (index: number) => {
        if (attendees.length === 1) return; // prevent removing all
        const updated = attendees.filter((_, i) => i !== index);
        setAttendees(updated);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({ attendees });
        navigate('/register/step5');
    };

    return (
        <div className="form-container">
            <h3>Step 4: Attendees</h3>

            <form onSubmit={handleSubmit} className="form-body">
                {attendees.map((attendee, index) => (
                    <div key={index} className="form-attendee-group">
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
                                value={attendee.phone}
                                onChange={(e) => handleChange(index, 'phone', e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="button"
                            className="form-button small danger"
                            onClick={() => removeAttendee(index)}
                            disabled={attendees.length === 1}
                        >
                            Remove
                        </button>

                        <hr />
                    </div>
                ))}

                <button type="button" className="form-button" onClick={addAttendee}>
                    + Add Attendee
                </button>

                <button type="submit" className="form-button">Next →</button>
            </form>
        </div>
    );
}
