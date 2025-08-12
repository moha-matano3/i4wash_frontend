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
  presentationReady: boolean;
  presentationFile?: {
    filename: string;
    base64: string;
  };
  exhibitionBoothNeeded: boolean;
  exhibitionBoothCount: number;
  hasAttendees: boolean;
  attendees: Attendee[];
  payment?: PaymentInfo;
};