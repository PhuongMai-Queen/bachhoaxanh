<template>
  <div v-if="$device.isDesktop">
    Content Desktop
  </div>
  <div v-else-if="$device.isTablet">
    Content Tablet
  </div>
  <div v-else class="mobile_content">
    <div class="groupcate">
      <b-container class="bv-example-row">
        <b-row>
          <b-col v-b-toggle.sidebar-filter  style="outline: none;">
            <b-row class="products_id">
              <span>Nước ngọt<br>các loại </span>
            </b-row>
            <b-row class="serch_collab">
              <span >Lọc tìm <br> <font-awesome-icon :icon="['fas', 'search']" ></font-awesome-icon></span>
            </b-row>
          </b-col>
          <b-col cols="8">
            <b-row class="mb-2">
              <b-col order="1">
                <div class="listgroup">
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> trái cây </span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                </div>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col>
                <div class="listgroup">
                  <nuxt-link to="#">
                    <span>
                    <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%">
                    </span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="cate cateproduct cateproduct_id">
      <div class="product row">
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "~/node_modules/axios";
import {VueAgile} from '~/node_modules/vue-agile'

export default {
  components: {
    agile: VueAgile
  },
  data() {
    return {
      products: [],
      data: [],
      total: [],
      total_pages: null,
      error: null,
      limit: 9
    }
  },
  async created() {
    this.totalPages();
  },
  methods: {
    async totalPages() {
      const response = await axios.get('http://api.tvtp.vn/v0/products', {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      this.total_pages = response.data.meta.pagination['total_pages'];
      this.total = response.data.meta.pagination['total'];
      var i = 0;
      for (i = 1; i <= this.total_pages; i++) {
        this.getData(i);
      }
    },
    async getData(id) {
      const response = await axios.get('http://api.tvtp.vn/v0/products?page=' + id, {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      this.products = this.products.concat(response.data.data).filter((el, index) => index < this.limit);
    },
    async limitShow() {
      this.limit = this.limit + 9;
      this.products = [];
      this.totalPages();
    }
  }
}
</script>

