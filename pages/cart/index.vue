<template>
  <div v-if="$device.isDesktop">
        <div class="desktop_cart">
      <div class="cart-content">
        <div class="list-product">
          <div class="title">Giỏ hàng của bạn</div>
          <div
            class="item"
            v-for="item in products"
            :key="item.id"
            :id="`item-${item.id}`"
          >
            <button class="delete" type="button" @click="removeToCart(item.id)">
              Xóa
            </button>
            <img :src="item.thumbnail" width="100%" :alt="item.name" />
            <div class="info">
              <a href="" class="name">{{ item.name }}</a>
              <p class="unit-price">{{ item.price_formatted }}</p>
            </div>
            <div class="money">
              <div class="total-price">
                <strong :id="`total-price-${item.id}`"
                  >{{
                    new Intl.NumberFormat("en-US").format(
                      item.quantity * item.price
                    )
                  }}
                  đ</strong
                >
              </div>
              <div class="quantity-group">
                <div class="quantity-item">
                  <button
                    type="button"
                    @click="minusToCart(item.id, item.price)"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name=""
                    :id="`quantity-input-${item.id}`"
                    :value="item.quantity"
                    min="0"
                    class="quantity-input"
                    @change="updateToCart(item.id, item.price)"
                  />
                  <button
                    type="button"
                    @click="plusToCart(item.id, item.price)"
                    id="plus"
                  >
                    +
                  </button>
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
              <strong id="total_price"></strong>
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
              <!-- <button class="btn btn-block" @click="deleteCart()">
                Xóa hết giỏ hàng
              </button> -->
              <b-button
                v-b-modal.delete-cart-model
                class="btn btn-block"
                variant="btn-outline-success"
              >
                Xóa hết giỏ hàng
              </b-button>

              <b-modal
                id="delete-cart-model"
                ref="model"
                @ok="deleteCart"
                hide-header
                hide-footer
              >
                <!-- <b-button @click="hide()">Hide Modal</b-button> -->
                <template #default="{ ok, cancel }">
                  Bạn muốn xóa tất cả sản phẩm trong giỏ hàng này?
                  <div class="row">
                    <div class="col-6">
                      <b-button @click="ok()" class="btn btn-success btn-block">
                        ĐỒNG Ý
                      </b-button>
                    </div>
                    <div class="col-6">
                      <b-button
                        variant="btn-outline-success"
                        @click="cancel()"
                        class="btn btn-outline-success btn-block"
                      >
                        KHÔNG
                      </b-button>
                    </div>
                  </div>
                </template>
              </b-modal>
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
              <b-button
                v-b-toggle.viewmore
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
  <div v-else-if="$device.isTablet">Content Tablet</div>
  <div v-else>
    <div class="mobile_cart">
      <div class="cart-content">
        <div class="list-product">
          <div class="title">Giỏ hàng của bạn</div>
          <div
            class="item"
            v-for="item in products"
            :key="item.id"
            :id="`item-${item.id}`"
          >
            <button class="delete" type="button" @click="removeToCart(item.id)">
              Xóa
            </button>
            <img :src="item.thumbnail" width="100%" :alt="item.name" />
            <div class="info">
              <a href="" class="name">{{ item.name }}</a>
              <p class="unit-price">{{ item.price_formatted }}</p>
            </div>
            <div class="money">
              <div class="total-price">
                <strong :id="`total-price-${item.id}`"
                  >{{
                    new Intl.NumberFormat("en-US").format(
                      item.quantity * item.price
                    )
                  }}
                  đ</strong
                >
              </div>
              <div class="quantity-group">
                <div class="quantity-item">
                  <button
                    type="button"
                    @click="minusToCart(item.id, item.price)"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name=""
                    :id="`quantity-input-${item.id}`"
                    :value="item.quantity"
                    min="0"
                    class="quantity-input"
                    @change="updateToCart(item.id, item.price)"
                  />
                  <button
                    type="button"
                    @click="plusToCart(item.id, item.price)"
                    id="plus"
                  >
                    +
                  </button>
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
              <strong id="total_price"></strong>
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
              <!-- <button class="btn btn-block" @click="deleteCart()">
                Xóa hết giỏ hàng
              </button> -->
              <b-button
                v-b-modal.delete-cart-model
                class="btn btn-block"
                variant="btn-outline-success"
              >
                Xóa hết giỏ hàng
              </b-button>

              <b-modal
                id="delete-cart-model"
                ref="model"
                @ok="deleteCart"
                hide-header
                hide-footer
              >
                <!-- <b-button @click="hide()">Hide Modal</b-button> -->
                <template #default="{ ok, cancel }">
                  Bạn muốn xóa tất cả sản phẩm trong giỏ hàng này?
                  <div class="row">
                    <div class="col-6">
                      <b-button @click="ok()" class="btn btn-success btn-block">
                        ĐỒNG Ý
                      </b-button>
                    </div>
                    <div class="col-6">
                      <b-button
                        variant="btn-outline-success"
                        @click="cancel()"
                        class="btn btn-outline-success btn-block"
                      >
                        KHÔNG
                      </b-button>
                    </div>
                  </div>
                </template>
              </b-modal>
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
              <b-button
                v-b-toggle.viewmore
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
      if (cart_data) {
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
        }
        console.log(product_data);
        console.log(cart_data);
        this.products = product_data;
      }

      this.totalPrice();
    },

    totalPrice() {
      var total_price = 0;
      var cart_data = cart.getCookie("cart");
      if (cart_data) {
        cart_data = JSON.parse(cart_data);
        for (var i = 0; i < cart_data.length; i++) {
          var quantity = cart_data[i].quantity;
          var price = cart_data[i].price;
          total_price += price * quantity;
        }
        total_price = new Intl.NumberFormat("en-US").format(total_price);
      }

      document.getElementById("total_price").innerHTML = total_price + " đ";
      console.log(total_price);
    },

    plusToCart(id, price) {
      cart.plus(id, price);
      var quantity_input = document.getElementById(`quantity-input-${id}`);
      var quantity = Number(quantity_input.value);
      quantity_input.value = quantity + 1;
      console.log(quantity);
      price = price * (quantity + 1);
      price = new Intl.NumberFormat("en-US").format(price);
      document.getElementById(`total-price-${id}`).innerHTML = price + " đ";
      this.totalPrice();
    },
    minusToCart(id, price) {
      cart.minus(id, price);
      var quantity_input = document.getElementById(`quantity-input-${id}`);
      var quantity = Number(quantity_input.value);
      if (quantity <= 1) {
        document.getElementById(`item-${id}`).style.display = "none";
      } else {
        quantity_input.value = quantity - 1;
        price = price * (quantity - 1);
        price = new Intl.NumberFormat("en-US").format(price);
        document.getElementById(`total-price-${id}`).innerHTML = price + " đ";
      }
      console.log(quantity);
      this.totalPrice();
    },
    removeToCart(id) {
      cart.remove(id);
      document.getElementById(`item-${id}`).style.display = "none";
      this.totalPrice();
    },
    deleteCart() {
      cart.delete();
      var classItem = document.getElementsByClassName("item");
      for (var i = 0; i < classItem.length; i++) {
        classItem[i].style.display = "none";
      }
      // console.log(classItem[0]);
      this.totalPrice();
    }
  }
};
</script>
