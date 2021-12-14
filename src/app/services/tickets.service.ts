import {Injectable} from '@angular/core';
import {Tickets} from "../tickets";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor() {
  }


  tickets: Array<Tickets> = [
    new Tickets("Peruslippu 16€"),
    new Tickets("Opiskelija 10€"),
    new Tickets("Eläkeläinen 8€")
  ];

  getTickets(): any {
    return this.tickets;
  }

}
