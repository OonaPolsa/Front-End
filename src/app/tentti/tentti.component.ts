import {Component, OnInit} from '@angular/core';
import {TicketsService} from "../services/tickets.service";
import {Tickets} from "../tickets";
import {Customer} from "../customer";

@Component({
  selector: 'app-tentti',
  templateUrl: './tentti.component.html',
  styleUrls: ['./tentti.component.css']
})


export class TenttiComponent implements OnInit {
  tickets: Array<Tickets>;
  customer: Customer;
  result: any;
  button: any;


  constructor(public tData: TicketsService) {
    this.tickets = this.tData.getTickets();
    this.customer = new Customer();
    this.result = '';

  }


  ngOnInit(): void {
  }

  onInputChange(event: any, t: Tickets) {
    console.log(event.value)
    console.log(t.ask)
    t.setAnswer(event.value);
  }


  onChange(checked: boolean) {
  }

  submit() {
    console.log("Ostajan tiedot:");
    console.log('Etunimi: ' + this.customer.firstName);
    console.log('Sukunimi: ' + this.customer.lastName);
    console.log('Sähköposti: ' + this.customer.email);
    console.log("<-------------------------------------->");
    console.log("Kuitti ostosta lähetetään sähköpostiin.")

    this.customer.firstName = '';
    this.customer.lastName = '';
    this.customer.email = '';

  }


}


