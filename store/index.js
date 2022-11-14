import axios from "@nuxtjs/axios";
import data from "../static/storedata.json";

export const state = () => ({
  cartUIStatus: "idle",
  storedata: data,
  cart: [],
  client_secret: "" 
});

export const getters = {
  featuredProducts: state => state.storedata.slice(22, 25),
  featuredProducts1: state => state.storedata.slice(25, 28),
  women: state => state.storedata.filter(el => el.gender === "Female"),
  men: state => state.storedata.filter(el => el.gender === "Male"),
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((acc, next) => acc + next.quantity, 0);
  },
  cartTotal: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((acc, next) => acc + next.quantity * next.price, 0);
  },
  cartItems: state => {
    if (!state.cart.length) return [];
    return state.cart.map(item => {
      return {
        id: item.id,
        quantity: item.quantity,
        price: item.price,
      };
    });
  },
  // clientSecret: state => state.clientSecret,
  client_secret: state => state.client_secret,
};

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload;
  },
  clearCart: state => {
    //this clears the cart
    (state.cart = []), (state.cartUIStatus = "idle");
  },
  addToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id);
    itemfound
      ? (itemfound.quantity += payload.quantity)
      : state.cart.push(payload)
  },
   setClientSecret: (state, payload) => {
    state.client_secret = payload;
   },
  addOneToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id)
    itemfound ? itemfound.quantity++ : state.cart.push(payload)
  },
  removeOneFromCart: (state, payload) => {
    let index = state.cart.findIndex(el => el.id === payload.id)
    state.cart[index].quantity
      ? state.cart[index].quantity--
      : state.cart.splice(index, 1)
  },
  removeAllFromCart: (state, payload) => {
    state.cart = state.cart.filter(el => el.id !== payload.id)
  }
};

export const action = {
  async createPaymentIntent({ gatters, commit}) {
    try {
      const result = await axios.post(
        "https://thestore-ph.netlify.app/.netlify/functions/create-payment-intent",
        {
          items: gatters.cartItems
        },
        {
          headers: {
            "Content-Type": "application/json"
        }
      }
      );
      if (result.data.client_secret) {
        commit("setClientSecret", result.data.client_secret);
      }
    } catch (error) {
      console.log("error", e);
    }
  }
};