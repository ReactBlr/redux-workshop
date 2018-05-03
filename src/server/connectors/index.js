let products = [
  {
    id: 1,
    name: "Macbook",
    description: "Latest Macbook with 16GB ram and Quad core processor",
    price: 65000,
    url: "/img/macbook.jpeg"
  },
  {
    id: 2,
    name: "Keyboard",
    description: "Ergonomic keyboard",
    price: 3000,
    url: "/img/keyboard.jpeg"
  }
];

let cartItems = [];

export function getUser() {
  return {
    id: 1,
    firstName: "John",
    lastName: "Doe"
  };
}

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return [products.find(product => product.id === id)];
}

export function getCartItem(id) {
  return cartItems.find(c => c.id === id);
}

export function getCartItems() {
  return cartItems;
}

export function addToCart({ productId }) {
  if (cartItems.find(c => c.productId === parseInt(productId, 10))) {
    throw new Error("Product already in cart");
  }
  const newCartItem = {
    id: cartItems.length + 1,
    product: products.find(p => p.id === productId)
  };
  cartItems.push(newCartItem);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newCartItem);
    }, 5000);
  });
}

export function deleteCartItem(args) {
  cartItems = cartItems.filter(c => c.id !== args.id);
  return args;
}
