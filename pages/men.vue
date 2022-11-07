<template>
  <div>
    <app-nav />
    <app-store-grid :data="men" />
    <app-footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppStoreGridVue from "../components/AppStoreGrid.vue";
import AppFooter from "../components/AppFooter.vue";
import AppNav from "../components/AppNav.vue";
export default {
  components: {
    AppStoreGridVue,
    AppFooter,
    AppNav,
  },
  computed: {
    ...mapGetters(["men"]),
  },
};
</script>

<style lang="scss" scoped>
</style>