// types/RegistrationTypes.ts

export type Attendee = {
  fullName: string;
  email: string;
  attendeePhone: string;
  attendeeOrganization: string;
};

export type PaymentInfo = {
  method: string;
  phone: string;
  amount: number;
  status: string;
  reference: string;
};

export type FormDataType = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  presentationReady: 'Yes' | 'No';
  presentationFile?: {
    filename: string;
    base64: string;
  };
  exhibitionBoothNeeded: 'Yes' | 'No';
  exhibitionBoothCount: number;
  hasAttendees: 'Yes' | 'No';
  attendees: Attendee[];
  payment?: PaymentInfo;
};