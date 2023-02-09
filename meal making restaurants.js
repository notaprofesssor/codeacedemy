const menu = {
  _meal: "steak",

  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToChehk === "string") {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
  get todaysSpecial(){
    if (this._meal&& this._price){
      return `Today's Meal is ${this._meal} for ${this._price}!`
    }else{
      return `Meal or price was not set correctly!`
    }
  }
};
menu.meal ="steak";
menu.price = 20;
console.log(menu.todaysSpecial);

