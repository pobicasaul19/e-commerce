<template>
    <div>
        <app-nav />
        <app-cart-steps />
        <hr />
        <h1 class="center">Your Cart</h1>

        <section v-if="cartUIStatus ===  'idle'">
            <app-cart-display />
        </section>

        <section v-else-if="cartUIStatus === 'success'">
            <h2>Succes!</h2>
            <p>Thank you for your purchase. You'll be receiving yur itmes in 4 to 5 business days.</p>
            <p>Forgot something?</p>
            <button class="pay-with-stripe">
                <Nuxt-link exact to="/">
                    Back to Store
                </Nuxt-link>
            </button>
        </section>

        <!-- <section v-else-if="cartUIStatus === 'failure'">
            <p>Oops, something went wrong. Redirecting you to your cart to try again.</p>
        </section> -->
        
        <app-sale-boxes />
        <app-footer />
    </div>
</template>

<script>
import AppCartDisplay from '../components/AppCartDisplay.vue';
import AppCartSteps from '../components/AppCartSteps.vue';
import AppSaleBoxes from '../components/AppSaleBoxes.vue';
import AppFooter from "../components/AppFooter.vue";
import AppNav from "../components/AppNav.vue";  
import { mapState } from 'vuex';
export default {
    components: {
        AppCartDisplay,
        AppCartSteps,
        AppSaleBoxes,
        AppFooter,
        AppNav
    },
    computed: {
        ...mapState(["cartUIStatus"]),
    },
};
</script>

<style lang="scss" scoped>
// .loader {
//   display: flex;
//   justify-content: center;
// }

.success {
  text-align: center;
}
</style>