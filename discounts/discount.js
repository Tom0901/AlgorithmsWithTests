let testCase1 = [
  { name: "chocolate", price: "£50", quantity: 2, discount: "2 for 45" },
  { name: "marmalade", price: "£50", quantity: 3, discount: "3 for 100" },
  { name: "rice", price: "£10", quantity: 1, discount: null },
];

class Discount {
  main(input) {
    if (Array.isArray(input) !== true) {
      return "You must call #main with an array of objects";
    }
    if (input[0] === undefined)
      return "You must call #main with an array of objects";

    let finalPrice = 0;
    input.forEach((item) => {
      let priceFl = this.getPrice(item.price);
      console.log(priceFl, item.quantity, item.discount);
      finalPrice += this.applyDiscount(priceFl, item.quantity, item.discount);
    });

    return finalPrice;
  }

  getPrice(price) {
    if (typeof price !== "string") return null;
    let regex = /\d/g;
    if (regex.test(price) !== true) return null;
    price = price.replace(/[^0-9.]/g, "");
    return parseFloat(price);
  }

  applyDiscount(price, quantity, discount) {
    if (quantity === 1) return price;
    if (discount === "2 for 45") {
      if (quantity % 2 !== quantity) {
        let remain = quantity % 2;
        price = Math.floor(quantity / 2) * 45 + remain * price;
        return price;
      } else {
        price = price * quantity;
        return price;
      }
    }

    if (discount === "3 for 100") {
      if (quantity % 3 !== quantity) {
        let remain = quantity % 3;
        price = Math.floor(quantity / 3) * 100 + remain * 50;
        return price;
      } else {
        price = price * quantity;
        return price;
      }
    }
    price = price * quantity;
    return price;
  }
}

module.exports = {
  C: Discount,
  i: testCase1,
};
