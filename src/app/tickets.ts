export class Tickets {

  ask: any;
  answer: any;

  constructor(message: string) {
    this.ask = message;
    this.answer = "0";

  }

  setAnswer(value: any) {
    if (value == 1)
      this.answer = "1"
    else if (value == 2)
      this.answer = "2"
    else if (value == 3)
      this.answer = "3"
    else if (value == 4)
      this.answer = "4"
    else if (value == 5)
      this.answer = "5"

  }
}
