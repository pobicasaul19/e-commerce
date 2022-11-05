<template>
    <section class="section">
      <ul>
        <li>About</li>
        <li>Company</li>
        <li>Locations</li>
        <li>Contact</li>
        <li>Hours</li>
      </ul>
      <ul>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
      </ul>
      <ul>
        <h4>Subcribe to our Newsletter:</h4>
        <p>Get 10% off on your first order by Subcribing to our newsletter. You'll receive emails on updates, limited offers and new release!</p>
        <input type="text" />

      </ul>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  .section {
    margin-left: 10%;
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  input {
    width: 100%;
  }
  
  @media screen and (min-width: 850px) {
    .section {
      padding: 40px !important;
    }
  }
  </style>
  