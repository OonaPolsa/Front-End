export class Question {

  ask: string;
  answer: string;

  constructor(message:string) {
    this.ask=message;
    this.answer="Ei vastattu";

  }
  setAnswer(value:any){
    if (value == 1)
      this.answer = "Huono"
    else if (value == 2)
      this.answer = "OK"
    else if (value == 3)
      this.answer = "Hyvä"
    else if (value == 4)
    this.answer = "Täydellinen"

  }



}
