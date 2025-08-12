// src/context/RegistrationContext.tsx
import { createContext, useState, type ReactNode } from 'react';
import type { FormDataType } from '../pages/FormDataTypes/RegistrationTypes';

type RegistrationContextType = {
  formData: FormDataType;
  setFormData: (data: Partial<FormDataType>) => void;
};

const defaultData: FormDataType = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  designation: '',
  presentationReady: false,
  presentationFile: undefined,
  exhibitionBoothNeeded: false,
  exhibitionBoothCount: 0,
  hasAttendees: false,
  attendees: [],
};

export const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [formData, updateFormData] = useState<FormDataType>(defaultData);

  const setFormData = (newData: Partial<FormDataType>) => {
    updateFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <RegistrationContext.Provider value={{ formData, setFormData }}>
      {children}
    </RegistrationContext.Provider>
  );
};