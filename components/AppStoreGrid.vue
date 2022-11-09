<template>
  <div class="storegrid">
    <aside>
      <h3>Special Sale</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro
        fuga quod eum hic nam ullam nihil aliquam exercitationem ea, minima
        nobis iure eos quidem vitae amet quas, possimus non
      </p>
      <!-- <h3>Filter by Price:</h3>
      <p style="margin-top: 5px">
        Max price
        <strong>${{ pricerange }}</strong>
      </p>
      <input
        class="slider"
        id="pricerange"
        type="range"
        v-model="pricerange"
        :min="min"
        :max="max"
        step="0.1"
      />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span> -->
    </aside>
    <transition-group name="items" tag="section" class="content">
      <div v-for="item in filteredprice" :key="item.id" class="item">
        <div class="img-contain">
          <Nuxt-link :to="`product/${item.id}`">
            <img :src="`/products/${item.img}`" />
          </Nuxt-link>
        </div>
        <star-rating :rating="item.rating" :star-size="15" :show-rating="false" active-color="#000"
          style="margin: 5px 0"></star-rating>
        <h3>{{ item.name }}</h3>
        <h4 class="price">{{ item.price }}</h4>
        <Nuxt-link :to="`product/${item.id}`">
          <button class="multi-item">View Item</button>
        </Nuxt-link>
      </div>
    </transition-group>
  </div>
</template>

<script>
import StarRating from "vue-star-rating/src/star-rating.vue";

export default {
  components: {
    StarRating,
  },
  props: {
    data: {
      required: true,
    },
  },
  data() {
    return {
      min: 0,
      max: 200,
      pricerange: '200',
    };
  },
  computed: {
    filteredprice() {
      return this.data.filter(el => el.price < this.pricerange);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px;
}

.img-contain {
  max-height: 200px;
  display: flex;
  align-content: center;
  align-items: center;

  img {
    width: 90%;
  }
}

.item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 10px;

  // border-radius: 15px;
  //   background: #ffffff;
  //   box-shadow: 9px 9px 29px #848484, -9px -9px 29px #ffffff;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
}

aside {
  height: 100%;
  width: 100%;
  h3 {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  p {
    margin: 10px auto;
    text-align: justify;
    max-width: 500px;
  }
}

.max {
  display: inline-block;
  // float: right;
}

@media screen and (max-width: 699px) {

  aside {
    display: block;
    justify-content: center;
    align-items: center;
    h3 {
      text-align: center;
    }
    p {
      text-align: justify;
      letter-spacing: 0px;
      line-height: 1.2;
      margin: 0 20px !important;
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr) !important;
    grid-template-rows: 1fr;
  }

  .item {
    margin: 10px 10px;

    h3 {
      font-size: 10px;
    }

    h4 {
      font-size: 10px;
    }

    .multi-item {
      font-size: 10px !important;
    }
  }

  .img-contain {
    max-height: 150px;

    img {
      width: 100%;
    }
  }

  .storegrid {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

}

@media screen and (min-width: 700px) and (max-width: 999px) {
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr) !important;
    grid-template-rows: 1fr;
  }

  .item {
    margin: 10px 10px;

    h3 {
      font-size: 15px;
    }

    h4 {
      font-size: 15px;
    }

    .multi-item {
      font-size: 15px !important;
    }
  }

  .img-contain {
    max-height: 150px;

    img {
      width: 80%;
    }
  }

  .storegrid {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
}
  
</style>