import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-add',
  templateHtml: '<div>
    <app-user-profile-search [data]="exampleObject" [itemValue]="foods"></app-user-profile-search>
</div>',
  styleUrls: ['./user-profile-add.component.css']
})

export class UserProfileAddComponent implements OnInit {

 public exampleObject:{name:string, email?:string}
 
  constructor() { 
    this.exampleObject ={
      name:"sai teja", email:"saitejau12@gmail.com"
    }
  }
  changeName(){
    this.exampleObject.name = "Teja Nethas";
  }
  changeObject(){
    this.exampleObject ={
      name:"Teja Nethas", email:"tejanethas.u@gmail.com"
    }
  }
  
    // new change detect strategy

  foods = ['Bacon', 'Letuce', 'Tomatoes'];

  addFood(food){
    //this.foods.push(food);
    this.foods = [...this.foods, food]
    console.log(food);
  }
}
