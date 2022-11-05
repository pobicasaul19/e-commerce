<template>
    <div>
      <app-store-grid :data="women" />
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
      ...mapGetters(["women"]),
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>