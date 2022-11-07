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
    padding: 40px;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }

  ul p {
      margin: 10px 0;
    }
  
  input {
    width: 100%;
  }

  @media screen and (max-width: 699px) {
    .section {
      grid-template-columns: repeat(1, 1fr);
      margin: 0 8% !important;
    }

    ul {
      margin-bottom: 20px;
    }

    input {
      width: 100%;
    }
    
  }
  
  @media screen and (max-width: 850px) {
    .section {
      grid-template-columns: repeat(2, 1fr);
    }

    .section ul:last-child {
      grid-column: 1 / 3;
      text-align: justify;
      margin-right: 10%;
    }
  }
  </style>
  