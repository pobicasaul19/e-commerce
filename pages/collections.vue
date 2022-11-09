<template>
  <div>
    <app-nav />
    <app-store-grid :data="storedata" />
    <app-footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppStoreGrid from "../components/AppStoreGrid.vue";
import AppFooter from "../components/AppFooter.vue";
import AppNav from "../components/AppNav.vue";
export default {
  components: {
    AppStoreGrid,
    AppFooter,
    AppNav,
  },
  computed: {
    ...mapState(["storedata"]),
  },
};
</script>

<style lang="scss" scoped>

</style>