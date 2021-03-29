<template>
  <div v-if="$device.isDesktop">Content Desktop</div>
  <div v-else-if="$device.isTablet">Content Tablet</div>
  <div v-else>
    <div class="mobile_cart container-fluid">
      <div class="cart-content">
        <div class="list-product">
          <div class="title">Giỏ hàng của bạn</div>
          <div class="item" v-for="item in products" :key="item.id">
            <button class="delete" type="button">Xóa</button>
            <img :src="item.thumbnail" width="100%" :alt="item.name" />
            <div class="info">
              <a href="" class="name">{{ item.name }}</a>
              <p class="unit-price">{{ item.price_formatted }}</p>
            </div>
            <div class="money">
              <div class="total-price">
                <strong>{{ item.quantity*item.price }} đ</strong>
              </div>
              <div class="quantity-group">
                <div class="quantity-item">
                  <i>-</i>
                  <input
                    type="number"
                    name=""
                    id=""
                    :value="item.quantity"
                    min="0"
                    class="quantity-input"
                  />
                  <i>+</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="summary">
          <div class="row">
            <div class="col-6">
              <span>Tiền hàng</span>
            </div>
            <div class="col-6 text-right">
              <strong>180.000₫</strong>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <span>Phí giao dự kiến</span>
            </div>
            <div class="col-6 text-right">40.000₫</div>
          </div>
          <div class="row">
            <div class="col-4">
              <button class="btn btn-block">Xóa hết giỏ hàng</button>
            </div>
            <div class="col-4">
              <button class="btn btn-block">Dùng phiếu mua hàng</button>
            </div>
            <div class="col-4">
              <a class="btn btn-block btn-order" href="/cart/checkout"
                >Đặt hàng</a
              >
            </div>
          </div>
        </div>

        <div class="more">
          <div class="item">
            <div class="buymore">
              <nuxt-link to="#"> <strong>Mua thêm</strong> </nuxt-link>
              (còn 5 lần miễn phí giao đơn từ 100.000đ)
              <span class="text-muted">
                không tính hàng nặng, to: Bia, Nước các loại</span
              >
            </div>
          </div>

          <div class="item">
            <div class="cart-viewmore">
              <b-button v-b-toggle.viewmore
              class="btn-cart-viewmore"
                    variant="btn-cart-viewmore"

                >Xem thêm Khuyến mãi đặc biệt cho đơn 50.000₫

                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                ></font-awesome-icon>
                <font-awesome-icon
                  :icon="['fas', 'angle-up']"
                ></font-awesome-icon>
              </b-button>
              <b-collapse id="viewmore" class="mt-2">
                <div class="row">
                  <div class="col-3">Sản phẩm 1</div>
                  <div class="col-3">Sản phẩm 2</div>
                  <div class="col-3">Sản phẩm 3</div>
                  <div class="col-3">Sản phẩm 4</div>
                </div>
              </b-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "~/node_modules/axios";
import AppLogo from "~/components/AppLogo.vue";
import cart from "~/assets/js/cart.js";

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      products: [],
      data: [],
      total: []
    };
  },
  async created() {
    this.getData();
  },
  methods: {
    async getData() {
      var cart_data = cart.getCookie("cart");
      cart_data = JSON.parse(cart_data);
      var product_data = [];
      for (var i = 0; i < cart_data.length; i++) {
        const response = await axios.get(
          "http://api.tvtp.vn/v0/product-detail/" + cart_data[i].id,
          {
            headers: {
              Authorization:
                "Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3"
            }
          }
        );
        var data = response.data.data;
        data.quantity = cart_data[i].quantity;
        product_data = product_data.concat(data);
        // console.log(product_data);

        // this.products = this.products.push(response.data);
        // this.products = this.products.push(cart_data[i].quantity);
      }
      console.log(product_data);
      this.products = product_data;
    }
  }
};
</script>
