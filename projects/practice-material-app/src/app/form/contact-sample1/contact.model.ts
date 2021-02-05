export class Contact {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  addresses?: Address[];
  company?: string;
  incorportationDate?: Date;
}

export class Address {
    street1?: string;
    street2?: string; 
    city?: string; 
    state?: string;
    zip?: string;
}