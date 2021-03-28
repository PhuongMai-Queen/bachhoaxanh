<template>
  <div v-if="$device.isDesktop">Content Desktop</div>
  <div v-else-if="$device.isTablet">Content Tablet</div>
  <div v-else>
    <div class="mobile_cart container-fluid">
      <div class="cart-content">
        <div class="list-product">
          <div class="title">Giỏ hàng của bạn</div>
          <div class="item">
            <a href="mobile_cart-delete" class="delete">Xóa</a>
            <img
              src="https://cdn.tgdd.vn/Products/Images/2443/84394/bhx/6-chai-nuoc-ngot-mirinda-huong-cam-390ml-202103201620340728_300x300.jpg"
              alt="6 chai nước ngọt Mirinda hương cam 390ml"
            />
            <div class="info">
              <a href="" class="name">6 chai nước ngọt Mirinda 390ml</a>
              <p class="unit-price">30.000₫ / lốc</p>
            </div>
            <div class="money">
              <div class="total-price">
                <strong>90.000₫</strong>
              </div>
              <div class="quantity-group">
                <div class="quantity-item">
                  <i>-</i>
                  <input
                    type="number"
                    name=""
                    id=""
                    value="1"
                    min="0"
                    class="quantity-input"
                  />
                  <i>+</i>
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <a href="mobile_cart-delete" class="delete">Xóa</a>
            <img
              src="https://cdn.tgdd.vn/Products/Images/2443/84394/bhx/6-chai-nuoc-ngot-mirinda-huong-cam-390ml-202103201620340728_300x300.jpg"
              alt="6 chai nước ngọt Mirinda hương cam 390ml"
            />
            <div class="info">
              <a href="" class="name">6 chai nước ngọt Mirinda 390ml</a>
              <p class="unit-price">30.000₫ / lốc</p>
            </div>
            <div class="money">
              <div class="total-price">
                <strong>90.000₫</strong>
              </div>
              <div class="quantity-group">
                <div class="quantity-item">
                  <i>-</i>
                  <input
                    type="number"
                    name=""
                    id=""
                    value="1"
                    min="0"
                    class="quantity-input"
                  />
                  <i>+</i>
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <a href="mobile_cart-delete" class="delete">Xóa</a>
            <img
              src="https://cdn.tgdd.vn/Products/Images/2443/84394/bhx/6-chai-nuoc-ngot-mirinda-huong-cam-390ml-202103201620340728_300x300.jpg"
              alt="6 chai nước ngọt Mirinda hương cam 390ml"
            />
            <div class="info">
              <a href="" class="name">6 chai nước ngọt Mirinda 390ml</a>
              <p class="unit-price">30.000₫ / lốc</p>
            </div>
            <div class="money">
              <div class="total-price">
                <strong>90.000₫</strong>
              </div>
              <div class="quantity-group">
                <div class="quantity-item">
                  <i>-</i>
                  <input
                    type="number"
                    name=""
                    id=""
                    value="1"
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
              <a class="btn btn-block btn-order" href="/cart/checkout">Đặt hàng</a>
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
              <b-a v-b-toggle.viewmore
                >Xem thêm Khuyến mãi đặc biệt cho đơn 50.000₫

                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                ></font-awesome-icon>
                <font-awesome-icon
                  :icon="['fas', 'angle-up']"
                ></font-awesome-icon>
              </b-a>
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
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo,
  },
};
</script>
