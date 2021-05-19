import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: '2000'
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value
  }

  onAmountChange(value:string){
    this.amount = parseFloat(value)
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value)
  }
}
