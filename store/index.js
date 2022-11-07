import axios from '@nuxtjs/axios';
import data from "../static/storedata.json";

export const state = () => ({
  cartUIStatus: "idle",
  storedata: data,
  cart: [],
  clientSecret: "" 
});

export const getters = {
  featuredProducts: state => state.storedata.slice(0, 3),
  women: state => state.storedata.filter(el => el.gender === "Female"),
  men: state => state.storedata.filter(el => el.gender === "Male"),
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((acc, next) => acc + next.quantity, 0);
  },
  cartTotal: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
  },
  cartItems: state => {
    if (!state.cart.length) return [];
    return state.cart.map(item => {
      return {
        id: item.id,
        quantity: item.quantity
      };
    });
  },
  clientSecret: state => state.clientSecret
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
    state.clientSecret = payload;
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
        "http://localhost:3000/api/create-payment-intent",
        {
          items: gatters.cartItems
        },
        {
          headers: {
            "Content-Type": "application/json"
        }
      }
      );
      if (result.data.clientSecret) {
        commit("setClientSecret", result.data.clientSecret);
      }
    } catch (error) {
      console.log("error", e);
    }
  }
};