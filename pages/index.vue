<template>
<div>
  <app-textlockup />
  <app-sale-boxes />
  <app-textlockup>
    <template v-slot:img>
      <img src="../static/bag.jpg" alt="bag">
    </template>
    <template v-slot:new>50%</template>
    <template v-slot:sale>Storewide Sale</template>
    <template v-slot:collections>Summer</template>
    <template v-slot:details>All Acessories</template>
  </app-textlockup>
  <app-featured-products />
</div>
</template>

<script>
import AppSaleBoxes from '../components/AppSaleBoxes.vue';
import AppTextlockupVue from '../components/AppTextlockup.vue';
import AppFeaturedProductsVue from '../components/AppFeaturedProducts.vue';

export default {
  components: {
    AppTextlockupVue,
    AppSaleBoxes,
    AppFeaturedProductsVue,
  }
}
</script>

<style>
</style>