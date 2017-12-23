import { Injectable } from '@angular/core';
import { Contact } from './../classes/contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];
  private nextId: number;

  constructor() {
    this.contacts = [
      new Contact(1, 'João', 'j@j.com'),
      new Contact(2, 'Maria', 'm@m.com')
    ];

    this.nextId = 3;
  }

  public addContact(nome: string, email: string): void {
    let contact = new Contact(this.nextId, nome, email);
    this.contacts.push(contact);
    this.nextId++;
  }

  public removeContact(id: number): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }

  public editContact(): void {

  }

  public getContacts(): Contact[] {
    return this.contacts;
  }

}
