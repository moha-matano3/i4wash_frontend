import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';
import { useState } from 'react';


export default function Summary() {
  const { formData } = useRegistration();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleContinue = async () => {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('http://www.i4wash.com:8000/api/method/i4wash_app.i4wash.api.registration.create_event_registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.message?.status === 'success') {
        setMessage('✅ Registration Successful! Your ID is: ' + data.message.registration_id);

        // Optionally store registration ID if needed later (e.g. in store/localStorage)

        // Navigate to payment screen
        navigate('/register/review');
      } else {
        setMessage('❌ Something went wrong.');
      }
    } catch (err) {
      if (err instanceof Error) {
        setMessage('❌ Submission failed: ' + err.message);
      } else {
        setMessage('❌ Submission failed due to an unknown error.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h3>Summary</h3>
      <div className="form-body">
        {/* Applicant Info */}
        <section className="summary-section">
          <h4>Applicant Information</h4>
          <p><strong>Full Name:</strong> {formData.fullName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Organization:</strong> {formData.organization}</p>
          <p><strong>Designation:</strong> {formData.designation}</p>
        </section>

        {/* Presentation */}
        <section className="summary-section">
          <h4>Presentation</h4>
          <p><strong>Ready:</strong> {formData.presentationReady ? 'Yes' : 'No'}</p>
          {formData.presentationReady && (
            <p>
              <strong>File:</strong> {formData.presentationFile
                ? formData.presentationFile.filename
                : 'Not uploaded'}
            </p>
          )}
        </section>

        {/* Booth Info */}
        <section className="summary-section">
          <h4>Exhibition Booth</h4>
          <p><strong>Needed:</strong> {formData.exhibitionBoothNeeded ? 'Yes' : 'No'}</p>
          {formData.exhibitionBoothNeeded && (
            <p><strong>Count:</strong> {formData.exhibitionBoothCount}</p>
          )}
        </section>

        {/* Attendees */}
        <section className="summary-section">
          <h4>Attendees</h4>
          {formData.attendees.length > 0 ? (
            formData.attendees.map((a, i) => (
              <div key={i}>
                <p><strong>{a.fullName}</strong> — {a.email}, {a.attendeePhone}</p>
              </div>
            ))
          ) : (
            <p>No attendees added</p>
          )}
        </section>

        <button className="form-button" onClick={handleContinue} disabled={loading}>
          {loading ? 'Submitting...' : 'Confirm & Continue →'}
        </button>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}