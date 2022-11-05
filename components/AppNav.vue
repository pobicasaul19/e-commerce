<template>
    <header>
      <h1>The Store</h1>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/collections">Colletions</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/women">Women</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/men">Men</nuxt-link>
          </li>
          <li>
            <div class="carttotal" v-if="cartCount > 0">{{ cartCount }}</div>
            <nuxt-link to="/cart">Cart</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    computed: {
      ...mapState(["cartCount"]),
    },
  };
  </script>
  
  <style>
  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px 40px 0;
  }

  header h1 {
    font-size: 4em;
    margin: 0;
  }
  
  nav {
    display: flex;
    width: 80vw;
    margin-top: 35px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  
  nav ul {
    padding-left: 0;
  }
  
  nav ul li {
    display: inline;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1rem;
    margin: 0 20px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    position: relative;
  }
  
  nav ul li a {
    color: #000;
  }
  
  nav ul li a:hover {
    color: #ccc;
  }
  
  .carttotal {
    position: absolute;
    border-radius: 1000px;
    background: #000;
    color: #fff;
    font-size: 0.8rem;
    padding: 3px;
    top: -18px;
    right: -5px;
    width: 25px;
    text-align: center;
    height: 25px;
    font-weight: bold;
  }
  
  @media (max-width: 850px) {
    h1 {
      margin: 0;
    }
    nav ul li {
      padding: 0 5px !important;
      border-left: none !important;
      border-right: none !important;
    }
  }
  </style>