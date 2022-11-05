import Vue from "vue";

Vue.filter("price", function(value) { 
    return `$${parseFloat(value).toFixed(2)}`;
});