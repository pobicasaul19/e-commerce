<template>
  <div>
    <app-nav />
    <section class="item-contain">
      <section class="img">
        <img :src="`/products/${product.img}`" />
      </section>
      <section class="product-info">
        <h1>{{ product.name }}</h1>
        <star-rating
          :rating="product.rating"
          :star-size="15"
          :show-rating="false"
          style="margin: 5px 0"
          active-color="#00"
        ></star-rating>
        <h4 class="price">{{ product.price }}</h4>
        <p>{{ product.description }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aperiam sapiente maiores iure. Quaerat ratione laudantium omnis eveniet dolore esse porro quo repellat rerum vitae.</p>
        <div class="product-options">
            <div class="quantity">
                <button class="update-num" @click="quantity > 0 ? quantity-- : quantity =0">-</button>
                <input type="number" v-model="quantity" />
                <button class="update-num" @click="quantity++">+</button>
            </div>
            <!-- <div v-if="product.sizes" class="size">
                <seclect v-model="size" class="size-picker" @change="showSizeRequiredMessage = false">
                    <option :value="null" disabled selected>Select Size</option>
                    <option v-for="(size, key) in product.sizes" :key="key" :value="size">{{ size }}</option>
                </seclect>
            </div> -->
        </div>
        <!-- <p v-if="showSizeRequiredMessage" class="size-required-message">Please choose a size</p> -->
        <p>
            Available in additional colors:
            <strong>
                <span :style="`color: ${product.color}`">{{ product.color}}</span>
            </strong>
        </p>
        <p>
            <button class="button purchase" @click="cartAdd">Add to Cart</button>
        </p>
      </section>
      <app-toast v-if="cartSummitted" class="toast">Order submmited <br>
      Check out more <nuxt-link to="/collections" class="link">products!</nuxt-link>
      </app-toast>
    </section>
    <hr />
    <div class="review">
        <h2>Reviews</h2>
        <star-rating
            :rating="product.rating"
            :star-size="15"
            :show-rating="false"
            style="margin: 5px 0"
            active-color="#00">
        </star-rating>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, esse.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum reprehenderit perspiciatis voluptas quibusdam corrupti delectus, fugiat adipisci, accusamus quasi culpa minima exercitationem labore vel nesciunt. Dolore aspernatur eveniet voluptatem!</p>
    </div>
    <app-featured-products />
    <app-footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StarRating from "vue-star-rating/src/star-rating.vue";
import AppFeaturedProductsVue from "@/components/AppFeaturedProducts.vue";
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppToast from "@/components/AppToast.vue";

export default {
    components: {
        AppFeaturedProductsVue,
        StarRating,
        AppNav,
        AppFooter,
        AppToast
    },
    data() {
        return {
            id: this.$route.params.id,
            quantity: 1,
            // size: null,
            // showSizeRequiredMessage: false,
            tempcart: [],
            cartSummitted: false
        };
    },
    computed: {
        ...mapState(["storedata"]),
        product() {
            return this.storedata.find((el) => el.id === this.id);
        },
    },
    methods: {
        cartAdd() {
            // if (this.product.sizes && !this.size) {
            //     this.showSizeRequiredMessage = true;
            //     return;
            // }
            this.cartSummitted = true;
            let item = this.product;
            item = {
                ...item,
                quantity: this.quantity,
                // size: this.size,
            };
            this.tempcart.push(item);
            this.$store.commit("addToCart", {...item});
        },
    },
};
</script>

<style lang="scss" scoped>
.item-contain {
  margin: 4% 8%;
  width: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 2fr;
}

.product-options {
  display: flex;
  align-items: center;
}

  .toast {
    position: fixed;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    z-index: 100;
    top: 0;
    right: 0;
    transition: all 0.5s ease-in;
    .link {
      color: #000;
      font-weight: 900;
    }
}

input,
select {
  width: 60px;
  font-size: 25px;
  margin: 0 5px;
  padding: 5px 10px;
}

.update-num {
  background: black;
  border-color: black;
  color: white;
  font-size: 20px;
  width: 45px;
}

.size {
  margin-left: 10px;
}

.size-picker {
  width: 130px;
  font-size: 20px;
  height: 100%;
  border: 0;
  background-color: white;
  outline: 1px solid #ccc;
  outline-offset: -1px;
}

.quantity {
  display: flex;
}

.size-required-message {
  color: red;
}

.review {
  margin: 0 8%;
  width: 80%;
}

@media screen and (max-width: 550px) {
  .img img {
    width: 100%;
    object-fit: contain;
  }

  .item-contain {
    grid-template-columns: 1fr;

  }

  .review {
    width: 90%;
    margin-left: 4%;
  }
}
</style>