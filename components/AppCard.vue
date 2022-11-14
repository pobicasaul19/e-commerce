<template>
  <div id="app">
    <div v-if="cartUIStatus === 'idle'" class="payment">
      <h3>Please enter your payment details:</h3>
      <label for="email">email</label>
      <br />
      <input
        type="email"
        id="email"
        placeholder="name@gmail.com"
        v-model="stripEmail"
      />
      <br />
      <label for="card">Credit Card or Debit Card</label>
      <br />
      <small>
        Test using these Stripe test credit/debit card numbers with any CVC,
        postal code, and future expiration date:
        <ul>
          <li>
            <span class="cc-number"> 4242 4242 4242 4242 </span>
          </li>
          <li>
            <span class="cc-number"> 4000 0025 0000 3155 </span>
          </li>
          <li>
            <span class="cc-number"> 4000 0000 0000 3220 </span>
          </li>
        </ul>
      </small>
      <StripeElements
        :stripe-key="stripeKey"
        :instance-options="instanceOptions"
        :elements-options="elementsOptions"
        :class="{ complete }"
        @change="complete = $event.complete"
        #default="{ elements }"
        ref="elms"
        class="stripe-card"
      >
        <StripeElement
          type="card"
          :elements="elements"
          :options="cardOptions"
          ref="card"
        />
      </StripeElements>

      <small class="card-error">{{ error }}</small>
      <button
        class="pay-with-stripe button"
        @click="pay"
        :disabled="!complete || !stripEmail"
      >
        Pay with credit or debit card
      </button>
    </div>
    <div v-else class="statussubmit">
      <div v-if="cartUIStatus === 'failure'">
        <h3>Oh No!</h3>
        <p>Something went wrong!</p>
        <button @click="clearCart">Please try again</button>
      </div>

      <div v-else-if="cartUIStatus === 'success'" class="loadcontain">
        <h4>Success!</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  StripeElements,
  StripeElement,
  handleCardPayment,
} from "vue-stripe-elements-plus";

export default {
  name: "AppCard",

  components: {
    StripeElements,
    StripeElement,
  },
  computed: {
    ...mapState(["cartUIStatus"]),
  },
  mounted() {
    this.$store.dispatch("createPaymentIntent");
  },
  data() {
    return {
      stripEmail: "",
      error: "",
      complete: false,
      stripeKey: "pk_test_8ssZgwB2PiH0ajJksD2gVbsG00u7Y3IDPv", // test key, don't hardcode
      instanceOptions: {
        // https://stripe.com/docs/js/initializing#init_stripe_js-options
      },
      elementsOptions: {
        // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
      },
      cardOptions: {
        // reactive
        // remember about Vue 2 reactivity limitations when dealing with options
        value: {
          postalCode: "",
        },
        // https://stripe.com/docs/stripe.js#element-options
      },
    };
  },
  methods: {
    pay() {
      this.$store.dispatch("setCartUIStatus", "loading");
      handleCardPayment(this.$refs.elms.$refs.card, {
        payment_method: {
          card: this.$refs.elms.$refs.card,
          billing_details: {
            email: this.stripEmail,
          },
        },
      })
        .then((result) => {
          if (result.error) {
            this.error = result.error.message;
            this.$store.dispatch("setCartUIStatus", "error");
          } else {
            this.$store.dispatch("setCartUIStatus", "success");
          }
        })
        .catch((error) => {
          this.error = error.message;
          this.$store.dispatch("setCartUIStatus", "error");
        });
    },
  },
  clearCart() {
    this.complete = false;
    this.$store.commit("clearCart");
  },
};
</script>

<style lang="scss" scoped>
.payment {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  h3 {
    margin: 0 0 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: none;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .stripe-card {
    margin-bottom: 1rem;
    margin-top: 10px;
    width: 100%;
    border: 1px solid #ccc;
    padding: 5px 10px;
    height: 2rem;
  }

  .card-error {
    color: red;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  .pay-with-stripe {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: none;
    font-size: 1rem;
    margin-bottom: 1rem;
    background: #fff;
    color: #000;
    cursor: pointer;
    &:hover {
      background: #000;
      color: #fff;
    }
    // &:disabled {
    //   background: #ccc;
    //   color: #000;
    //   cursor: not-allowed;
    // }
  }
  .stripe-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    &.complete {
      border-color: #000;
    }
  }
}

// input,
// button {
//   width: 100%;
// }

// button {
//   margin-top: 20px;
// }

// .payment {
//   margin-top: 20px;
// }

// .stripe-card {
//   margin-top: 10px;
//   width: 100%;
//   border: 1px solid #ccc;
//   padding: 5px 10px;
// }

// .stripe-card.complete {
//   border-color: green;
// }
</style> 