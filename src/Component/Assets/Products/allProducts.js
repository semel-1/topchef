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
    category: "main",
    ingredients: ["Grilled chicken", "Croutons",  "Caesar dressing"],
    image: m1_img,
    price: 12.99,
    rate: 4.5,
  },
  {
    id: 2,
    name: "Fried Salmon",
    category: "main",
    ingredients: ["Salmon fillet", "Lemon", "Pepper"],
    image: m2_img,
    price: 19.99,
    rate: 4.7,
  },
  {
    id: 3,
    name: "Penne Carbonara Pasta",
    category: "main",
    ingredients: ["Penne pasta", "Bacon", "Parmesan cheese", "Cream"],
    image: m3_img,
    price: 13.99,
    rate: 4.3,
  },
  {
    id: 4,
    name: "Pizza",
    category: "main",
    ingredients: ["Pizza dough",  "Mozzarella cheese", "Basil"],
    image: m4_img,
    price: 14.99,
    rate: 4.8,
  },
  {
    id: 5,
    name: "Spaghetti",
    category: "main",
    ingredients: ["Spaghetti",  "Garlic", "Basil", "Parmesan cheese"],
    image: m5_img,
    price: 11.99,
    rate: 4.2,
  },
  {
    id: 6,
    name: "Tacos",
    category: "main",
    ingredients: ["Corn tortillas", "Ground beef", "Lettuce",  "Sour cream"],
    image: m6_img,
    price: 11.99,
    rate: 4.4,
  },
  {
    id: 7,
    name: "Mango Smoothie",
    price: 4.99,
    ingredients: ["Mango", "Yogurt", "Honey"],
    image: d1_img,
    category: "drink",
    rate: 4.6,
  },
  {
    id: 8,
    name: "Iced Latte",
    price: 3.49,
    ingredients: ["Espresso", "Milk"],
    image: d2_img,
    category: "drink",
    rate: 4.5,
  },
  {
    id: 9,
    name: "Lemonade",
    price: 2.99,
    ingredients: ["Lemon", "Sugar", "Water"],
    image: d6_img,
    category: "drink",
    rate: 4.8,
  },
  {
    id: 10,
    name: "Green Tea",
    price: 1.99,
    ingredients: ["Green Tea Leaves", "Hot Water", "Honey"],
    image: d4_img,
    category: "drink",
    rate: 4.3,
  },
  {
    id: 11,
    name: "Berry Blast",
    price: 5.49,
    ingredients: ["Strawberries", "Blueberries", "Raspberries"],
    image: d3_img,
    category: "drink",
    rate: 4.7,
  },
  {
    id: 12,
    name: "Hot Chocolate",
    price: 3.99,
    ingredients: ["Cocoa Powder", "Milk",  "Whipped Cream"],
    image: d5_img,
    category: "drink",
    rate: 4.6,
  },
  {
    id: 13,
    name: "Chocolate Lava Cake",
    price: 6.99,
    ingredients: ["Chocolate", "Flour", "Eggs", "Butter"],
    image: ds2_img,
    category: "dessert",
    rate: 4.9,
  },
  {
    id: 14,
    name: "Classic Cheesecake",
    price: 8.49,
    ingredients: ["Cream cheese",  "Eggs", "Graham crackers", "Butter"],
    image: ds3_img,
    category: "dessert",
    rate: 4.8,
  },
  {
    id: 15,
    name: "Tiramisu",
    price: 7.99,
    ingredients: ["Mascarpone", "Coffee", "Ladyfingers"],
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
    ingredients: ["Almond flour", "Granulated sugar", "Buttercream"],
    image: ds5_img,
    category: "dessert",
    rate: 4.9,
  },
  {
    id: 19,
    name: "Pork Tenderloin Marinated In Yogurt",
    category: "appetizer",
    ingredients: ["Pork", "Tenderloin", "Yogurt"],
    price: 25.0,
    image: null,
    rate: null,
  },
  {
    id: 20,
    name: "Grilled Pork With Preserved Lemons",
    category: "appetizer",
    ingredients: ["Pork", "Lemon", "Onions"],
    price: 27.0,
    image: null,
    rate: null,
  },
  {
    id: 21,
    name: "Roasted Prawns with Coriander",
    category: "appetizer",
    ingredients: ["Prawn", "Coriander", "Spices"],
    price: 18.0,
    image: null,
    rate: null,
  },
  {
    id: 22,
    name: "Prawn Sausage Cassoulet",
    category: "appetizer",
    ingredients: ["Prawn", "Sausage", "Tomato"],
    price: 19.0,
    image: null,
    rate: null,
  },
  {
    id: 23,
    name: "Citrus Cured Salmon With Honey",
    category: "appetizer",
    ingredients: ["Salmon", "Citrus", "Honey", "Spice"],
    price: 20.0,
    image: null,
    rate: null,
  },

  // New main Dishes
  {
    id: 24,
    name: "Pork Tenderloin Marinated In Yogurt",
    category: "main",
    ingredients: ["Pork", "Tenderloin", "Yogurt"],
    price: 25.0,
    image: null,
    rate: null,
  },
  {
    id: 25,
    name: "Grilled Pork With Preserved Lemons",
    category: "main",
    ingredients: ["Pork", "Lemon", "Onions"],
    price: 27.0,
    image: null,
    rate: null,
  },
  {
    id: 26,
    name: "Roasted Prawns with Coriander",
    category: "main",
    ingredients: ["Prawn", "Coriander", "Spices"],
    price: 18.0,
    image: null,
    rate: null,
  },
  {
    id: 27,
    name: "Prawn Sausage Cassoulet",
    category: "main",
    ingredients: ["Prawn", "Sausage", "Tomato"],
    price: 19.0,
    image: null,
    rate: null,
  },
  {
    id: 28,
    name: "Citrus Cured Salmon With Honey",
    category: "main",
    ingredients: ["Salmon", "Citrus", "Honey", "Spice"],
    price: 20.0,
    image: null,
    rate: null,
  },

  
];

export default allProducts;
