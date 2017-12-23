import { Injectable } from '@angular/core';
import { Contact } from './../classes/contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];
  private nextId: number;

  constructor() {
    let contacts = this.getContacts();

    if (contacts.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = contacts[contacts.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addContact(nome: string, email: string): void {
    let contact = new Contact(this.nextId, nome, email);
    let contacts = this.getContacts();
    contacts.push(contact);

    this.setLocalStorageContacts(contacts);

    this.nextId++;
  }

  public removeContact(id: number): void {
    let contacts = this.getContacts();
    contacts = contacts.filter((contact) => contact.id !== id);
    this.setLocalStorageContacts(contacts);
  }

  public editContact(contact: Contact): void {
    console.log("contact on service => ", contact)
  }

  public getContacts(): Contact[] {
    let localStorageItem = JSON.parse(localStorage.getItem('contacts'));
    return localStorageItem == null ? [] : localStorageItem.contacts;
  }

  private setLocalStorageContacts(contacts: Contact[]): void {
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  }

}
