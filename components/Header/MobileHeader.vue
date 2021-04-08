<template>
  <div>
    <div class="mobile_header">
      <b-row cols-lg="mobile_menu_header">
        <div class="col-1">
          <img src="~/assets/images/general/menu.png" width="120%" v-b-toggle.sidebar-header style="outline: none;">
        </div>
        <b-sidebar id="sidebar-header"
                   aria-label="Sidebar with custom footer"
                   no-header shadow>
          <template #footer="{ hide }">
            <div class="d-flex align-items-right px-3 py-2">
              <b-button align-items-right size="sm" @click="hide">
                <img src="~/assets/images/general/delete.png" width="30%">
                Đóng
              </b-button>
            </div>
          </template>
          <div class="container">
            <div class="row menu-top">
              <div class="col-6 menu-top-left">
                <nuxt-link to="/">
                  <img src="~/assets/images/general/home.png">
                </nuxt-link>
              </div>
              <div class="col-6"></div>
            </div>
            <div class="input-menu-search">
              <b-form-input placeholder="Tìm theo món hàng"></b-form-input>
              <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'search']"></font-awesome-icon>
            </div>
            <div class="mobile-item-menu">
              <div class="item" v-for="cate in categories" :key="cate.id">
                <nuxt-link :to="{ name: 'products_id-id', params: { id: cate.id }}">{{cate.name}}</nuxt-link>
              </div>
            </div>
            <nuxt-link to="#" class="promotion-navbar">
              <img src="~/assets/images/general/icon_spkm.png" width="12%"> Khuyến mãi hot
            </nuxt-link>
          </div>
        </b-sidebar>
        <div class="col-5 input-search">
          <b-form-input placeholder="Bạn tìm gì?"></b-form-input>
          <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
        </div>
        <div class="col-2">
          <button class="loca" v-b-modal.address-popup>
            <div class="loca-parentwrapper">
              <div class="loca-wrapper">
                <span>Giao tại</span>
                <div class="current_locate">Phường...</div>
              </div>
            </div>
            <b-modal id="address-popup">
              <p class="my-4">Hello from modal!</p>
            </b-modal>
          </button>
        </div>
        <div class="div-col col-2">
          <nuxt-link to="#">
            Đơn hàng từng mua
          </nuxt-link>
        </div>
        <nuxt-link to="/Cart" class="div-col col-2 mobile_header_cart">
          <font-awesome-icon :icon="['fas', 'shopping-basket']"></font-awesome-icon>
          <span>Giỏ hàng</span>
        </nuxt-link>
      </b-row>
    </div>
  </div>
</template>
<script>
import axios from "~/node_modules/axios";
export default {
  data() {
    return {
      categories: [],
      total: [],
      total_pages: null,
    }
  },
  async created() {
    this.totalPages();
  },
  methods: {
    async totalPages() {
      const response = await axios.get('http://api.tvtp.vn/v1/client/categories/hierarchy', {
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
      const categories = await axios.get('http://api.tvtp.vn/v1/client/categories/hierarchy?page=' + id, {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      this.categories = categories.data.data;
    }
  }
}
</script>
