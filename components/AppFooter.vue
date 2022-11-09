<template>
    <footer>
        <section class="callout">
            <h2>"The supprising styles and collections of The Store are advance for all seasons."</h2>
            <p>Pobi Casaul</p>
        </section>
        <app-footer-link />
        <div class="pobistuff">
            <p>
                This E-Commerce project is my sample work, and made by <span>Pobi Casaul. </span> 
            </p>
        </div>
    </footer>
</template>

<script>
import AppFooterLink from "./AppFooterLink.vue";

export default {
    components: { AppFooterLink }

};
</script>

<style lang="scss" scoped>
.callout {
  width: 100%;
  height: 280px;
  background: url("../static/callout.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  margin: 0;
  h2 {
    padding: 0 30px;
    text-align: center;
    color: #fff;
  }
  p {
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 20px;
  }
}

.pobistuff {
  background: #fff;
  width: 100%;
  padding: 10px 30px;
  color: #000;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
}

a,
a:visited,
a:active {
  color: #c4c3ec;
  font-weight: bold;
}

@media screen and (max-width: 850px) {
 span {
    display: block;
 }
}
</style>