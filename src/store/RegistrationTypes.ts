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
    presentationReady: true | false;
    presentationFile?: {
        filename: string;
        base64: string;
    };
    exhibitionBoothNeeded: true | false;
    exhibitionBoothCount: number;
    hasAttendees: true | false;
    attendees: Attendee[];
    payment?: PaymentInfo;
};