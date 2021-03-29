import Vue from 'vue'
import cart from '~/assets/js/cart.js'
import axios from "~/node_modules/axios";
import { VueAgile } from '~/node_modules/vue-agile'

Vue.mixin({
    methods: {

        addToCart(id) {
            cart.add(id);
            console.log('hiiiiii');
            // axios.get('http://api.tvtp.vn/v0/products', {
            //     headers: {
            //         Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
            //     }
            // })
            //     .then((result) => {
            //         //  this.post = result.data;
            //         //  console.log(this.post);
            //         console.log(result.data.data);
            //     })
        },
        // async demo() {
        //     var demo_data = await axios.get('http://api.tvtp.vn/v0/products', {
        //         headers: {
        //             Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        //         }
        //     });
        //     console.log(demo_data);
        // }
    }
})