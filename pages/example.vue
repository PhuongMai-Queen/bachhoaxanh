<template>
  <div v-if="testAsync">{{testAsync}}</div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      testAsync: {},
      productsCate: []
    }
  },

  async mounted() {
    let start = + new Date();
    this.testAsync= await this.testPromise();
    console.log(this.testAsync);
    let finish = + new Date();
    console.log("here we wait ", finish - start, " ms for you");
  },

  methods: {
    async testPromise() {
      return new Promise(resolve => {
        this.$nextTick(() => {
          setTimeout(() => {
            this.getData();
          }, 5000);
        })
      });
    },
    async getData() {
      const categories = await axios.get('http://api.tvtp.vn/v1/client/categories/hierarchy', {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      const categoriesProductTopSale = await axios.get('https://api-idp.kpis.vn/v1/client/categories-product-top-sale', {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      var test  = {};
      console.log(categories);
      // this.products = this.products.concat(response.data.data).filter((el, index) => index < this.limit);
      var cate = categories.data.data;
      this.categoriesProductTopSale = categoriesProductTopSale.data.data;
      for (var i = 0; i < cate.length; i++) {
        this.getProductsByCate(cate[i].id);
      }
      console.log(cate);
      console.log(test);

      test.cats = cate;
      test.products = this.productsCate;
      return test;
    },
    async getProductsByCate(id) {
      const response = await axios.get('https://api-idp.kpis.vn/v1/client/products?limit=24&store_id=&name=&category_ids='+id, {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      this.productsCate[id] = response.data.data;
    },
  }
}
</script>
