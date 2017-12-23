import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from './../services/contact.service';
import { Contact } from './../classes/contact';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input()
  private contact: Contact;

  private nome: string;
  private email: string;

  constructor(private contactService: ContactService) {
    this.nome = '';
    this.email = '';
    // this.contact = new Contact(0, 'null', 'null');
  }

  ngOnInit() {
  }

  private addContact(): void {
    this.contactService.addContact(this.nome, this.email);
    this.nome = '';
    this.email = '';
  }

  private removeContact(contact: Contact): void {
    console.log('contact => ', this.contact);
    this.contactService.removeContact(this.contact.id);
  }

  private editContact(): void {

  }

}
