<template>
    <div id="app">
        <div v-if="cartUIStatus === 'idle'" class="payment">
            <h3>Please enter your payment details:</h3>
            <label for="email">email</label>
            <br />
            <input type="email" id="email" placeholder="name@gmail.com" v-model="stripEmail" />
            <br />
            <label for="card">Credit Card or Debit Card</label>
            <br />
            <small>
                Test using these Stripe test credit/debit card numbers with any CVC, postal code, and future expiration date:
                <ul>
                    <li>
                        <span class="cc-number">
                            4242 4242 4242 4242
                        </span>
                    </li>
                    <li>
                        <span class="cc-number">
                            4000 0025 0000 3155
                        </span> 
                    </li>
                    <li>
                        <span class="cc-number">
                            4000 0000 0000 3220
                        </span>
                    </li>
                </ul>
            </small>
            <!-- <Card 
            stripe="pk_test_8ssZgwB2PiH0ajJksD2gVbsG00u7Y3IDPv"
            class="stripe-card"
            id="card"
            :class="{ complete }"
            :options="stripeOptions"
            @change="complete = $event.complete"
            /> -->
            <small class="card-error">{{error}}</small>
            <button class="pay-with-stripe button"
            @click="pay">
            Pay with credit or debit card
            </button>
        </div>

        <!-- <div v-else class="statussubmit">
            <div v-if="cartUIStatus">
                <h3>Oh No!</h3>
                <p>Something went wrong!</p>
                <button @click="clearCart">Please try again</button>
            </div>

            <div v-else-if="cartUIStatus === 'success'" class="loadcontain">
                <h4>Success!</h4>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';

import { Card, handleCardPayment } from 'vue-stripe-elements-plus';

export default {
    components: {
        Card,
    },
    computed: {
        ...mapState([
            'cartUIStatus',
        ])
    },
    // mounted() {
    //     this.$store.dispatch('createPaymentIntent');
    // },
    // data() {
    //     return {
    //         complete: false,
    //         stripeOptions: {

    //         },
    //         stripEmail: '',
    //         error: '',
    //     }
    // },
    methods: {
        // pay() {
        //     handleCardPayment(this,$store.gatters.clientSecret, {
        //         receipt_email: this.stripEmail,
        //     }).then(result => {
        //         if (result.error) {
        //             this.error = result.error.message;
        //         } else if (
        //             result.paymentIntent &&
        //             result.paymentIntemt.status === 'succeeded'
        //         ) {
        //             this.$store.commit("updateCartUIStatus", "success");
        //         } else {
        //             this.error = "Some unknown error occurred";
        //             setTimeout(() => {
        //                 this.error = "";
        //             }, 5000);
        //         }
        //     });
        // },
        clearCart() {
            this.complete = false;
            this.$store.commit("clearCart");
        }
    }
};

</script>

<style lang="scss" scoped>
input,
button {
  width: 100%;
}

button {
  margin-top: 20px;
}

.payment {
  margin-top: 20px;
}

.stripe-card {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
}

.stripe-card.complete {
  border-color: green;
}
</style> 