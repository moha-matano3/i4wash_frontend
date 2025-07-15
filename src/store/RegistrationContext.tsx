import { createContext, useContext, useState, type ReactNode } from 'react';

type Attendee = {
    fullName: string;
    email: string;
    phone: string;
};

type RegistrationData = {
    fullName: string;
    email: string;
    phone: string;
    organization: string;
    designation: string;
    presentationReady: boolean;
    presentationFileUrl: string;
    exhibitionBoothNeeded: boolean;
    exhibitionBoothCount: number;
    attendees: Attendee[];
    payment?: {
        method: string;
        phone: string;
        amount: number;
        status: string;
        mpesaReference: string;
    };
};

type RegistrationContextType = {
    formData: RegistrationData;
    setFormData: (data: Partial<RegistrationData>) => void;
};

const defaultData: RegistrationData = {
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    presentationReady: false,
    presentationFileUrl: '',
    exhibitionBoothNeeded: false,
    exhibitionBoothCount: 0,
    attendees: [],
};

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
    const [formData, updateFormData] = useState<RegistrationData>(defaultData);

    const setFormData = (newData: Partial<RegistrationData>) => {
        updateFormData((prev) => ({ ...prev, ...newData }));
    };

    return (
        <RegistrationContext.Provider value={{ formData, setFormData }}>
            {children}
        </RegistrationContext.Provider>
    );
};

export const useRegistration = (): RegistrationContextType => {
    const context = useContext(RegistrationContext);
    if (!context) {
        throw new Error('useRegistration must be used within a RegistrationProvider');
    }
    return context;
};
