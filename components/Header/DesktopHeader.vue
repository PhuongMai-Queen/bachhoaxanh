<template>
  <div class="desktop_header">
    <div class="container">
      <div class="row">
        <nav class="col-3 mb-3">
          <h3><img src="~assets/images/general/menu_desktop.png"> DANH MỤC SẢN PHẨM</h3>
          <b-nav vertical>
            <li class="item-menu" v-for="cate in categories" :key="cate.id">
              <nuxt-link :to="{ name: 'products_id-id', params: { id: cate.id }}">{{cate.name}}</nuxt-link>
            </li>
            <div class="menu-side-bottom input-side-search">
              <b-form-input placeholder="Nhập nhóm hàng cần tìm..."></b-form-input>
              <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'search']"></font-awesome-icon>
            </div>
            <div class="menu-side-bottom">
              <nuxt-link to="#">
                <img src="~/assets/images/general/icon_spkm.png">
                <strong>775</strong> sản phẩm khuyến mãi
              </nuxt-link>
            </div>
            <div class="menu-side-bottom">
              <nuxt-link to="#">
                <img src="~/assets/images/general/icon_xkgs.png"> Xả kho giá sốc
              </nuxt-link>
            </div>
            <div class="menu-side-bottom">
              <nuxt-link to="#">
                <img src="~/assets/images/general/icon_pmhdt.png"> Phiếu mua hàng điện tử
              </nuxt-link>
            </div>
            <div class="menu-side-bottom">
              <nuxt-link to="#">
                <img src="~/assets/images/general/icon_dhcb.png"> Đơn hàng của bạn
              </nuxt-link>
            </div>
          </b-nav>
        </nav>
        <div class="col-2"></div>
        <nuxt-link to="/" class="col-2 desktop_logo">
          <img src="~/assets/images/general/logo.png" width="100%" v-b-toggle.sidebar-footer style="outline: none;">
        </nuxt-link>
        <div class="col-2 desktop_loca">
          <div class="loca-parentwrapper">
              <div class="loca-icon">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']"></font-awesome-icon>
              </div>
              <div class="loca-wrapper">
                <div class="current_locate">
                  <span class="shipto">Giao tại : </span>
                  <span class="shiptoHere">P.An Khánh, Quận Ninh Kiều, ...</span>
                  <span class="change">Thay đổi</span>
                </div>
              </div>
            </div>
        </div>
        <div class="col-4 mainsearch">
          <b-form-input placeholder="Bạn tìm gì?"></b-form-input>
          <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'search']"></font-awesome-icon>
        </div>
        <div class="col-1 histories">
          <nuxt-link to="#">
            Đơn hàng của bạn
          </nuxt-link>
        </div>
        <div class="col-1 desktop_header_cart">
            <nuxt-link to="/cart/">
              <font-awesome-icon :icon="['fas', 'shopping-basket']"></font-awesome-icon>
              <span>Giỏ hàng</span>
            </nuxt-link>
        </div>
      </div>
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
