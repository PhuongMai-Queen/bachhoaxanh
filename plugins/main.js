import Vue from 'vue'
import cart from '~/assets/js/cart.js'
import axios from "~/node_modules/axios";
import { VueAgile } from '~/node_modules/vue-agile'

Vue.mixin({
    methods: {
        addToCart(id, price) {
            cart.add(id, price);
        },
    }
})
