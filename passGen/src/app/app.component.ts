import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lenght = 0;
  password = "";
  ch = false;
  num = false;
  letter = false;

  getLength(val: string){
    let len = parseInt(val);
    if(!isNaN(len)){
      this.lenght = len;
    }

  }

  includeChar(){
    this.ch = !this.ch;

  }
  
  includeNo(){
    this.num= !this.num;

  }
  includeLet(){
    this.letter=!this.letter;
  }

  genPass(){
    let validchar = ""
    let genPassword = ""
    let numbers = "123456789";
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let characters = "!@#$%&";

    if(this.ch){
      validchar += characters;
    }
    if(this.num){
      validchar += numbers;
    }
    if(this.letter){
      validchar += letters;
    }

    for (let i = 0 ; i < this.lenght;i++){
      let randomNo = Math.floor(Math.random() * validchar.length);
      genPassword  += validchar[randomNo];
    }

    this.password = genPassword;
   
  }
}
