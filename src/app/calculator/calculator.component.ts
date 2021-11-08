import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttons: string[] =
    ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  addValue(value: any) {
  }

  addValue1(value: string) {
    if (value == '=') {

      console.log('lausekkeen arvo on: ' + eval('2+2'));
    console.log('addValue value: ' + value);
  }

  }}
