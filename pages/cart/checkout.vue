<template>
  <div v-if="$device.isDesktop">
    <div class="desktop_checkout">
      <div class="checkout-content">
        <nuxt-link to="/cart/" class="back-to-cart">
          <font-awesome-icon
            :icon="['fas', 'chevron-left']"
          ></font-awesome-icon>
          Xem lại giỏ hàng
        </nuxt-link>
        <div class="clear"></div>
        <div class="get-address">
          <b-button
            v-b-modal.get-address-model
            class="get-address-btn btn-block text-uppercase"
            ><font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
            Lấy địa chỉ mua hàng trước
          </b-button>
          <b-modal
            id="get-address-model"
            ref="model"
            @show="resetFormGetAddress"
            @hidden="resetFormGetAddress"
            @ok="okFormGetAddress"
            hide-header
            hide-footer
          >
            <!-- <b-button @click="hide()">Hide Modal</b-button> -->
            <template #default="{ ok, cancel }">
              <form ref="form" @submit.stop.prevent="submitFormGetAddress">
                <b-form-group
                  invalid-feedback="Vui lòng nhập số điện thoại"
                  :state="phoneState"
                >
                  <b-form-input
                    placeholder="Nhập số điện thoại mua lần trước"
                    id="phone-input"
                    v-model="phone"
                    :state="phoneState"
                    required
                  ></b-form-input>
                </b-form-group>
              </form>
              <div class="row">
                <div class="col-6">
                  <b-button
                    variant="btn-outline-success"
                    @click="cancel()"
                    class="btn btn-outline-success btn-block"
                  >
                    Đóng
                  </b-button>
                </div>
                <div class="col-6">
                  <b-button @click="ok()" class="btn btn-success btn-block">
                    Tiếp tục
                  </b-button>
                </div>
              </div>
            </template>
          </b-modal>
        </div>

        <div class="clear"></div>
        <div class="checkout-form">
          <b-form>
            <div class="step">
              <div class="title">1. Thông tin nhận hàng</div>
              <b-form-input
                id="phone_number"
                name="phone_number"
                placeholder="Số điện thoại*"
                class="mb-3"
              ></b-form-input>
              <b-form-radio-group class="mb-3">
                <b-form-radio value="male">Anh</b-form-radio>
                <b-form-radio value="female">Chị</b-form-radio>
              </b-form-radio-group>

              <b-form-input
                id="full_name"
                name="full_name"
                placeholder="Họ và tên*"
                class="mb-3"
              ></b-form-input>

              <b-row style="margin-right: -15px; margin-left: -15px;">
                <b-col cols="6">
                  <b-form-select
                    id="city"
                    name="city"
                    class="mb-3"
                    v-model="selected"
                  >
                    <b-form-select-option :value="null">
                      Chọn thành phố
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Cần Thơ
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Hà Nội
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Đà Nẵng
                    </b-form-select-option>
                  </b-form-select>
                </b-col>
                <b-col cols="6">
                  <b-form-select
                    id="district"
                    name="district"
                    class="mb-3"
                    v-model="selected"
                  >
                    <b-form-select-option :value="null">
                      Chọn quận
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Ninh Kiều
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Xuân Khánh
                    </b-form-select-option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-form-select
                id="ward"
                name="ward"
                class="mb-3"
                v-model="selected"
              >
                <b-form-select-option :value="null">
                  Chọn phường
                </b-form-select-option>
                <b-form-select-option value="">
                  Ninh Kiều
                </b-form-select-option>
                <b-form-select-option value="">
                  Xuân Khánh
                </b-form-select-option>
              </b-form-select>
              <b-form-input
                id="address"
                name="address"
                placeholder="Số nhà, tên đường*"
                class="mb-3"
              ></b-form-input>

              <b-form-checkbox id="checkbox-1" name="checkbox-1" value="">
                Yêu cầu giao tận chung cư, văn phòng
              </b-form-checkbox>
              <b-form-checkbox id="checkbox-2" name="checkbox-2" value="">
                Gọi người khác nhận hàng (nếu có)
              </b-form-checkbox>
            </div>

            <div class="step">
              <div class="title">2. Chọn thời gian nhận hàng</div>

              <b-form-select
                id="date"
                name="date"
                class="mb-3"
                v-model="selected"
              >
                <b-form-select-option :value="null">
                  Chọn ngày
                </b-form-select-option>
                <b-form-select-option value="">
                  Hôm nay
                </b-form-select-option>
                <b-form-select-option value="">
                  Ngày mai
                </b-form-select-option>
              </b-form-select>
              <b-form-select
                id="time"
                name="time"
                class="mb-3"
                v-model="selected"
              >
                <b-form-select-option :value="null">
                  Chọn thời gian
                </b-form-select-option>
                <b-form-select-option value="">
                  08h-12h
                </b-form-select-option>
                <b-form-select-option value="">
                  12h-16h
                </b-form-select-option>
              </b-form-select>

              <nuxt-link to="#">
                <strong>Mua thêm</strong> (còn 5 lần miễn phí đơn giao từ
                100.000đ)
                <span class="text-muted">
                  Không tính hàng nặng, to: Bia, Nước các loại
                </span>
              </nuxt-link>
            </div>

            <div class="step">
              <b-form-checkbox
                id="checkbox-3"
                name="checkbox-3"
                value=""
                class="mb-3"
              >
                Xuất hóa đơn công ty
              </b-form-checkbox>
              <b-form-textarea
                id="note"
                placeholder="Ghi chú (nếu có)"
                rows="3"
              ></b-form-textarea>
            </div>

            <div class="step">
              <b-row>
                <b-col cols="6">
                  Tiền hàng
                </b-col>
                <b-col cols="6" class="text-right">
                  <strong>990.000đ</strong>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="6">
                  Phí giao dự kiến
                </b-col>
                <b-col cols="6" class="text-right">
                  40.000đ
                </b-col>
              </b-row>
              <b-row class="mt-3">
                <b-col cols="4">
                  <b-button
                    class="btn btn-block btn-outline-secondary"
                    variant="btn"
                    >Xóa hết giỏ hàng</b-button
                  >
                </b-col>
                <b-col cols="4">
                  <b-button
                    class="btn btn-block btn-outline-secondary"
                    variant="btn-outline-secondary"
                    >Dùng phiếu mua hàng</b-button
                  >
                </b-col>
                <b-col cols="4">
                  <b-button
                    type="submit"
                    class="btn btn-block btn-success"
                    variant="btn-success"
                  >
                    Hoàn tất mua <strong>1.030.000đ</strong>
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </b-form>
          <p class="px-3 py-2 text-center">
            <nuxt-link to="#">
              <span class="text-muted privacy"
                >Bằng cách đặt hàng, bạn đồng ý với điều khoản sử dụng của
                BachhoaXANH</span
              >
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="$device.isTablet">Content Tablet</div>
  <div v-else>
    <div class="mobile_checkout">
      <div class="checkout-content">
        <nuxt-link to="/cart/" class="back-to-cart">
          <font-awesome-icon
            :icon="['fas', 'chevron-left']"
          ></font-awesome-icon>
          Xem lại giỏ hàng
        </nuxt-link>
        <div class="clear"></div>
        <div class="get-address">
          <b-button
            v-b-modal.get-address-model
            class="get-address-btn btn-block text-uppercase"
            ><font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
            Lấy địa chỉ mua hàng trước
          </b-button>
          <b-modal
            id="get-address-model"
            ref="model"
            @show="resetFormGetAddress"
            @hidden="resetFormGetAddress"
            @ok="okFormGetAddress"
            hide-header
            hide-footer
          >
            <!-- <b-button @click="hide()">Hide Modal</b-button> -->
            <template #default="{ ok, cancel }">
              <form ref="form" @submit.stop.prevent="submitFormGetAddress">
                <b-form-group
                  invalid-feedback="Vui lòng nhập số điện thoại"
                  :state="phoneState"
                >
                  <b-form-input
                    placeholder="Nhập số điện thoại mua lần trước"
                    id="phone-input"
                    v-model="phone"
                    :state="phoneState"
                    required
                  ></b-form-input>
                </b-form-group>
              </form>
              <div class="row">
                <div class="col-6">
                  <b-button
                    variant="btn-outline-success"
                    @click="cancel()"
                    class="btn btn-outline-success btn-block"
                  >
                    Đóng
                  </b-button>
                </div>
                <div class="col-6">
                  <b-button @click="ok()" class="btn btn-success btn-block">
                    Tiếp tục
                  </b-button>
                </div>
              </div>
            </template>
          </b-modal>
        </div>

        <div class="clear"></div>
        <div class="checkout-form">
          <b-form>
            <div class="step">
              <div class="title">1. Thông tin nhận hàng</div>
              <b-form-input
                id="phone_number"
                name="phone_number"
                placeholder="Số điện thoại*"
                class="mb-3"
              ></b-form-input>
              <b-form-radio-group class="mb-3">
                <b-form-radio value="male">Anh</b-form-radio>
                <b-form-radio value="female">Chị</b-form-radio>
              </b-form-radio-group>

              <b-form-input
                id="full_name"
                name="full_name"
                placeholder="Họ và tên*"
                class="mb-3"
              ></b-form-input>

              <b-row style="margin-right: -15px; margin-left: -15px;">
                <b-col cols="6">
                  <b-form-select
                    id="city"
                    name="city"
                    class="mb-3"
                    v-model="selected"
                  >
                    <b-form-select-option :value="null">
                      Chọn thành phố
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Cần Thơ
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Hà Nội
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Đà Nẵng
                    </b-form-select-option>
                  </b-form-select>
                </b-col>
                <b-col cols="6">
                  <b-form-select
                    id="district"
                    name="district"
                    class="mb-3"
                    v-model="selected"
                  >
                    <b-form-select-option :value="null">
                      Chọn quận
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Ninh Kiều
                    </b-form-select-option>
                    <b-form-select-option value="">
                      Xuân Khánh
                    </b-form-select-option>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-form-select
                id="ward"
                name="ward"
                class="mb-3"
                v-model="selected"
              >
                <b-form-select-option :value="null">
                  Chọn phường
                </b-form-select-option>
                <b-form-select-option value="">
                  Ninh Kiều
                </b-form-select-option>
                <b-form-select-option value="">
                  Xuân Khánh
                </b-form-select-option>
              </b-form-select>
              <b-form-input
                id="address"
                name="address"
                placeholder="Số nhà, tên đường*"
                class="mb-3"
              ></b-form-input>

              <b-form-checkbox id="checkbox-1" name="checkbox-1" value="">
                Yêu cầu giao tận chung cư, văn phòng
              </b-form-checkbox>
              <b-form-checkbox id="checkbox-2" name="checkbox-2" value="">
                Gọi người khác nhận hàng (nếu có)
              </b-form-checkbox>
            </div>

            <div class="step">
              <div class="title">2. Chọn thời gian nhận hàng</div>

              <b-form-select
                id="date"
                name="date"
                class="mb-3"
                v-model="selected"
              >
                <b-form-select-option :value="null">
                  Chọn ngày
                </b-form-select-option>
                <b-form-select-option value="">
                  Hôm nay
                </b-form-select-option>
                <b-form-select-option value="">
                  Ngày mai
                </b-form-select-option>
              </b-form-select>
              <b-form-select
                id="time"
                name="time"
                class="mb-3"
                v-model="selected"
              >
                <b-form-select-option :value="null">
                  Chọn thời gian
                </b-form-select-option>
                <b-form-select-option value="">
                  08h-12h
                </b-form-select-option>
                <b-form-select-option value="">
                  12h-16h
                </b-form-select-option>
              </b-form-select>

              <nuxt-link to="#">
                <strong>Mua thêm</strong> (còn 5 lần miễn phí đơn giao từ
                100.000đ)
                <span class="text-muted">
                  Không tính hàng nặng, to: Bia, Nước các loại
                </span>
              </nuxt-link>
            </div>

            <div class="step">
              <b-form-checkbox
                id="checkbox-3"
                name="checkbox-3"
                value=""
                class="mb-3"
              >
                Xuất hóa đơn công ty
              </b-form-checkbox>
              <b-form-textarea
                id="note"
                placeholder="Ghi chú (nếu có)"
                rows="3"
              ></b-form-textarea>
            </div>

            <div class="step">
              <b-row>
                <b-col cols="6">
                  Tiền hàng
                </b-col>
                <b-col cols="6" class="text-right">
                  <strong>990.000đ</strong>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="6">
                  Phí giao dự kiến
                </b-col>
                <b-col cols="6" class="text-right">
                  40.000đ
                </b-col>
              </b-row>
              <b-row class="mt-3">
                <b-col cols="4">
                  <b-button
                    class="btn btn-block btn-outline-secondary"
                    variant="btn"
                    >Xóa hết giỏ hàng</b-button
                  >
                </b-col>
                <b-col cols="4">
                  <b-button
                    class="btn btn-block btn-outline-secondary"
                    variant="btn-outline-secondary"
                    >Dùng phiếu mua hàng</b-button
                  >
                </b-col>
                <b-col cols="4">
                  <b-button
                    type="submit"
                    class="btn btn-block btn-success"
                    variant="btn-success"
                  >
                    Hoàn tất mua <strong>1.030.000đ</strong>
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </b-form>
          <p class="px-3 py-2 text-center">
            <nuxt-link to="#">
              <span class="text-muted privacy"
                >Bằng cách đặt hàng, bạn đồng ý với điều khoản sử dụng của
                BachhoaXANH</span
              >
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>
<script>
export default {
  data() {
    return {
      phone: "",
      phoneState: null,
      selected: null
      // submittedPhone: [],
    };
  },
  methods: {
    checkFormGetAddress() {
      const valid = this.$refs.form.checkValidity();
      this.phoneState = valid;
      return valid;
    },
    resetFormGetAddress() {
      this.phone = "";
      this.phoneState = null;
    },
    okFormGetAddress(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.submitFormGetAddress();
    },
    submitFormGetAddress() {
      // Exit when the form isn't valid
      if (!this.checkFormGetAddress()) {
        return;
      }
    }
  }
};
</script>
