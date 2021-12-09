import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab9';
  public num1: number=0;
  public num2: number=0;
  public num3: string="";
  public num4: string="";
  public num5: number=0;
  
  add() {
    this.num5 = 0;
    if (this.num1 == NaN && this.num2 === NaN) {
      this.num3 = `0`;
      return;
    }
    this.num3 = `${this.num1} + ${this.num2} = ${this.num1 + this.num2}`;
  }
  sub() {
    this.num5 = 0;
    if (this.num1 == NaN && this.num2 === NaN) {
      this.num3 = `0`;
      return;
    }
    this.num3 = `${this.num1} - ${this.num2} = ${this.num1 - this.num2}`;
  }
  mul() {
    this.num5 = 0;
    if (this.num1 == NaN && this.num2 === NaN) {
      this.num3 = `0`;
      return;
    }
    this.num3 = `${this.num1} * ${this.num2} = ${this.num1 * this.num2}`;
  }
  divide() {
    this.num5 = 0;
    if (this.num1 == NaN && this.num2 === NaN) {
      this.num3 = `0`;
      return;
    }
    this.num3 = `${this.num1} / ${this.num2} = ${this.num1 / this.num2}`;
  }
  Fact() {
    this.num5 = 0;
    let ans = 1;
    let n = this.num1;
    while (n > 1) {
      ans *= n;
      n--;
    }
    this.num3 = `${this.num1}! = ${ans}`;
  }
  prime() {
    let flag = true;
    this.num5 = 1;
    if (this.num1 === 1) {
      this.num4 = `0`;
      return;
    }
    for (let i = 2; i * i < this.num1; i++) {
      if (this.num1 % i == 0) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      this.num4 = `${this.num1} is a Prime Number`;
    } else {
      this.num4 = `${this.num1} is not a Prime Number`;
    }
  }
}