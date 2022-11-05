<template>
  <div>
    <app-store-grid :data="men" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppStoreGridVue from "../components/AppStoreGrid.vue";
export default {
  components: {
    AppStoreGridVue,
  },
  computed: {
    ...mapGetters(["men"]),
  },
};
</script>

<style lang="scss" scoped>
</style>