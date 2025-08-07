import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../../store/useRegistration';

export default function Booth() {
    const navigate = useNavigate();
    const { formData, setFormData } = useRegistration();

    const [needsBooth, setNeedsBooth] = useState<'Yes' | 'No'>(formData.exhibitionBoothNeeded || 'No');
    const [boothCount, setBoothCount] = useState(formData.exhibitionBoothCount || 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
            exhibitionBoothNeeded: needsBooth,
            exhibitionBoothCount: needsBooth === 'Yes' ? boothCount : 0,
        });
        navigate('/register/step4');
    };

    return (
        <div className="form-container">
            <h3>Exhibition Booth</h3>

            <form onSubmit={handleSubmit} className="form-body">
                <div className="form-input">
                    <label className="form-label">Do you require a booth?</label>
                    <select
                        className="form-field"
                        value={needsBooth}
                        onChange={(e) => setNeedsBooth(e.target.value as 'Yes' | 'No')}
                    >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>

                {needsBooth === 'Yes' && (
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

                <button type="submit" className="form-button">Next →</button>
            </form>
        </div>
    );
}