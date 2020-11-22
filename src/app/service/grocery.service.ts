import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  items = [
    {
      name: "Spam",
      qty: 2,
      unit: "Cases",
      imgUrl: "assets/img/spam.png"
    },
    {
      name: "Sardines",
      qty: 12,
      unit: "Cans",
      imgUrl: "assets/img/sardines.png"

    },
    {
      name: "Fish Sauce",
      qty: 2,
      unit: "Bottles",
      imgUrl: "assets/img/patis.png"
    },
    {
      name: "Salted Eggs",
      qty: 1,
      unit: "Dozen",
      imgUrl: "assets/img/itlog.png"
    },
    {
      name: "Pork Skin",
      qty: 3,
      unit: "Bags",
      imgUrl: "assets/img/chicharon.png"
    },

  ];

  constructor() { }

  getItems(){
    return this.items;
  }

  removeItem(index){
    this.items.splice(index, 1); // remove item from array
  }

  editItem(item, index){
    console.log("EDITING ITEM: " + item.name + " INDEX: " + index);
    this.items[index] = item;
    console.log("EDITED ITEM ON: " + this.items[index].name);
    
    
  }

  addItem(item){
    this.items.push(item);
  }

}
