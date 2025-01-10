import m1_img from "./chicken-caesar-salad.webp";
import m2_img from "./fried-salmon-isolated.webp";
import m3_img from "./penne-carbonara-pasta.webp";
import m4_img from "./pizza.webp";
import m5_img from "./spaghetti.webp";
import m6_img from "./tacos.webp";
import d1_img from "./mango-smoothie.webp";
import d2_img from "./cold-coffee.webp";
import d3_img from "./fresh-berry-drink.webp";
import d4_img from "./green-tee.webp";
import d5_img from "./hot-chocolate.webp";
import d6_img from "./lemonade.webp";
import ds1_img from "./Brownie Sundae.webp";
import ds2_img from "./Chocolate-Lava-Cake.webp";
import ds3_img from "./Classic-Cheesecake.webp";
import ds4_img from "./Fruit Tart.webp";
import ds5_img from "./Macarons.webp";
import ds6_img from "./Tiramisu.webp";

const allProducts = [
  {
    id: 1,
    name: "Chicken Caesar Salad",
    category: "Main",
    ingredients: ["Romaine lettuce", "Grilled chicken", "Croutons", "Parmesan cheese", "Caesar dressing", "Anchovies"],
    image: m1_img,
    price: 12.99,
    rate: 4.5,
  },
  {
    id: 2,
    name: "Fried Salmon",
    category: "Main",
    ingredients: ["Salmon fillet", "Flour", "Butter", "Lemon", "Salt", "Pepper"],
    image: m2_img,
    price: 19.99,
    rate: 4.7,
  },
  {
    id: 3,
    name: "Penne Carbonara Pasta",
    category: "Main",
    ingredients: ["Penne pasta", "Bacon", "Egg yolks", "Parmesan cheese", "Cream", "Black pepper"],
    image: m3_img,
    price: 13.99,
    rate: 4.3,
  },
  {
    id: 4,
    name: "Pizza",
    category: "Main",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Basil", "Olive oil"],
    image: m4_img,
    price: 14.99,
    rate: 4.8,
  },
  {
    id: 5,
    name: "Spaghetti",
    category: "Main",
    ingredients: ["Spaghetti", "Tomato sauce", "Garlic", "Olive oil", "Basil", "Parmesan cheese"],
    image: m5_img,
    price: 11.99,
    rate: 4.2,
  },
  {
    id: 6,
    name: "Tacos",
    category: "Main",
    ingredients: ["Corn tortillas", "Ground beef", "Lettuce", "Tomato", "Cheese", "Sour cream"],
    image: m6_img,
    price: 11.99,
    rate: 4.4,
  },
  {
    id: 7,
    name: "Mango Smoothie",
    price: 4.99,
    ingredients: ["Mango", "Yogurt", "Honey", "Ice"],
    image: d1_img,
    category: "drinks",
    rate: 4.6,
  },
  {
    id: 8,
    name: "Iced Latte",
    price: 3.49,
    ingredients: ["Espresso", "Milk", "Ice"],
    image: d2_img,
    category: "drinks",
    rate: 4.5,
  },
  {
    id: 9,
    name: "Lemonade",
    price: 2.99,
    ingredients: ["Lemon", "Sugar", "Water", "Ice"],
    image: d6_img,
    category: "drinks",
    rate: 4.8,
  },
  {
    id: 10,
    name: "Green Tea",
    price: 1.99,
    ingredients: ["Green Tea Leaves", "Hot Water", "Honey"],
    image: d4_img,
    category: "drinks",
    rate: 4.3,
  },
  {
    id: 11,
    name: "Berry Blast",
    price: 5.49,
    ingredients: ["Strawberries", "Blueberries", "Raspberries", "Yogurt", "Ice"],
    image: d3_img,
    category: "drinks",
    rate: 4.7,
  },
  {
    id: 12,
    name: "Hot Chocolate",
    price: 3.99,
    ingredients: ["Cocoa Powder", "Milk", "Sugar", "Whipped Cream"],
    image: d5_img,
    category: "drinks",
    rate: 4.6,
  },
  {
    id: 13,
    name: "Chocolate Lava Cake",
    price: 6.99,
    ingredients: ["Chocolate", "Flour", "Eggs", "Butter", "Sugar"],
    image: ds2_img,
    category: "dessert",
    rate: 4.9,
  },
  {
    id: 14,
    name: "Classic Cheesecake",
    price: 8.49,
    ingredients: ["Cream cheese", "Sugar", "Eggs", "Graham crackers", "Butter"],
    image: ds3_img,
    category: "dessert",
    rate: 4.8,
  },
  {
    id: 15,
    name: "Tiramisu",
    price: 7.99,
    ingredients: ["Mascarpone", "Coffee", "Ladyfingers", "Cocoa powder", "Sugar"],
    image: ds6_img,
    category: "dessert",
    rate: 4.7,
  },
  {
    id: 16,
    name: "Fruit Tart",
    price: 5.99,
    ingredients: ["Pastry crust", "Custard", "Assorted fruits", "Jelly"],
    image: ds4_img,
    category: "dessert",
    rate: 4.5,
  },
  {
    id: 17,
    name: "Brownie Sundae",
    price: 6.49,
    ingredients: ["Brownie", "Vanilla ice cream", "Chocolate syrup", "Whipped cream"],
    image: ds1_img,
    category: "dessert",
    rate: 4.6,
  },
  {
    id: 18,
    name: "Macarons",
    price: 9.99,
    ingredients: ["Almond flour", "Powdered sugar", "Egg whites", "Granulated sugar", "Buttercream"],
    image: ds5_img,
    category: "dessert",
    rate: 4.9,
  },
];

export default allProducts;
