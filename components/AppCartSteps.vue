<template>
    <section>
        <div class="shopping">
            <h2 :class="{ active: cartUIStatus === 'idle' && cartCount == 0}">01</h2>
            <h4>Shopping Cart</h4>
        </div>
        <div class="checkout">
            <h2 :class="{ active: cartUIStatus === 'idle' && cartCount > 0}">02</h2>
            <h4>Checkout</h4>
        </div>
        <!-- <div class="order">
            <h2 :class="{ active: cartUIStatus === 'order'}">03</h2>
            <h4>Order</h4>
        </div> -->
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
    export default {
        computed: {
            ...mapGetters(["cartCount"]),
            ...mapState(["cartUIStatus"]),
        },
    }
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 0px;
  text-align: center;
  width: 80%;
  margin: 20px auto 0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

h2 {
  width: 80px;
  height: 80px;
  border-radius: 1000px;
  border: 1px solid #ccc;
  padding-top: 21px;
  color: #555;
  &.active {
    background: #1f2028;
    border: 1px solid #1f2028;
    color: white;
  }
}

h4 {
  margin-top: 20px;
  color: #555;
}

@media screen and (max-width: 600px) {
  section {
    grid-column-gap: 30px !important;
  }
}
</style>