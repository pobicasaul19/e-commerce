<template>
  <section>
    <h2>
      <span>Feature Products</span>
    </h2>
    <div class="featureditems">
      <div class="item" v-for="product in featuredProducts" :key="product.id">
        <img :src="`/products/${product.img}`" />
        <h3>{{ product.name }}</h3>
        <h4>{{ product.price }}</h4>
        <Nuxt-link :to="`/product/${product.id}`">
          <button class="multi-item">View Item</button>
        </Nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    featuredProducts() {
      return this.$store.getters.featuredProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 60px;
}

.featureditems {
  max-width: 1000px;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  .item {
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 9px 9px 29px #848484, -9px -9px 29px #ffffff;
    padding: 10px 20px 30px;
    min-height: 150px;
    justify-self: center;
    align-self: center;
    text-align: center;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }
}

h4 {
  color: #000;
  margin: 10px 0;
}

h2 {
  color: #000;
  text-align: center;
  overflow: hidden;
}
h2 span {
  display: inline-block;
  position: relative;
}
h2 span:after,
h2 span:before {
  content: " ";
  display: block;
  height: 1px;
  width: 1000px;
  background: #1f2028;
  position: absolute;
  top: 50%;
}
h2 span:before {
  left: -1010px;
}
h2 span:after {
  right: -1010px;
}

@media screen and (max-width: 699px) {
  section {
    margin: 0 1rem !important;
  }
  .featureditems {
    width: 60%;
    display: block;
    div {
      padding: 10px 20px;
      margin-bottom: 40px;
    }
  }

  img {
    width: 100%;
  }
}

@media screen and (max-width: 860px) {
  .featureditems {
    max-width: 700px !important;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  img {
    width: 100%;
  }
}
</style>
