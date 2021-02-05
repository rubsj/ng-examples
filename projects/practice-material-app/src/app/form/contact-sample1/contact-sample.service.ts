import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from './contact.model';


@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private firstContact: Contact = {
        firstName: 'Albert',
        lastName: 'Einstein',
        dateOfBirth: new Date(1879, 3, 14)
    }
    private contactStore$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([this.firstContact]);
    contact$ = this.contactStore$.asObservable();

    constructor() {
        this.contactStore$.subscribe(val => {
            console.log('value ', val);
        })
    }

    getContacts() {
        return this.contact$;
    }

    addContact(contact) {
        console.log('add contact called with ', contact);
        this.contactStore$.value.push(contact);
    }


}