<template>
  <div v-if="$device.isDesktop">
    Content Desktop
  </div>
  <div v-else-if="$device.isTablet">
    Content Tablet
  </div>
  <div v-else class="mobile_content">
    <div class="mobile_content_banner">
      <agile :autoplay="true" :dots="false" :fade="true" :navButtons="false">
        <div>
          <img src="~/assets/images/banner/banner_1.jpg" width="100%">
        </div>
        <div>
          <img src="~/assets/images/banner/banner_2.jpg" width="100%">
        </div>
        <div>
          <img src="~/assets/images/banner/banner_3.jpg" width="100%">
        </div>
        <div>
          <img src="~/assets/images/banner/banner_4.jpg" width="100%">
        </div>
        <div>
          <img src="~/assets/images/banner/banner_5.jpg" width="100%">
        </div>
        <div>
          <img src="~/assets/images/banner/banner_6.jpg" width="100%">
        </div>
        <div>
          <img src="~/assets/images/banner/banner_7.jpg" width="100%">
        </div>
      </agile>
      <div class="mobile_content_groupcate">
        <div class="mobile_content_groupcate_top row">
          <div class="col-9 groupcate_top_title">
            <p>Nhóm hàng thường mua</p>
          </div>
          <div class="col-3 btn-show-modal" style="text-align: end">
            <font-awesome-icon :icon="['far', 'caret-square-down']"
                               id="show-btn" @click="$bvModal.show('bv-modal-example')">

            </font-awesome-icon>
            <b-modal id="bv-modal-example" hide-footer hide-header>
              <font-awesome-icon :icon="['far', 'caret-square-up']"
                                 block @click="$bvModal.hide('bv-modal-example')">
              </font-awesome-icon>
                <div class="list_group_modal row">
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/sua-tuoi-cac-loai-202101191009091372.png" style="width: 100%;">
                      <span>Sữa tươi các loại</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/nuoc-ngot-cac-loai-202101190943494803.png" style="width: 100%;">
                      <span>Nước ngọt các loại</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/mi-goi-an-lien-202101191033219269.png" style="width: 100%;">
                      <span>Mì gói ăn liền</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/dau-an-cac-loai-202101191038388488.png" style="width: 100%;">
                      <span>Dầu ăn các loại</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/khan-uot-cac-loai-202101191151358335.png" style="width: 100%;">
                      <span>Khăn ướt các loại</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/dau-goi-cac-loai-202101191145083094.png" style="width: 100%;">
                      <span>Dầu gội các loại</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/gao-ngon-cac-loai-202101191055092230.png" style="width: 100%;">
                      <span>Gạo ngon các loại</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/thit-hai-san-dong-202101191135401545.png" style="width: 100%;">
                      <span>Thịt, hải sản đông</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/trai-cay-nhap-khau-202101191124534951.png" style="width: 100%;">
                      <span>Trái cây nhập khẩu</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#">
                      <img src="~/assets/images/products/bia-nuoc-co-con-202101190940074943.png" style="width: 100%;">
                      <span>Bia, nước có cồn</span>
                    </a>
                  </div>
                </div>
            </b-modal>
          </div>
        </div>
        <div class="listgroup">
          <a href="#">
            <img src="~/assets/images/products/sua-tuoi-cac-loai-202101191009091372.png" style="width: 50%;">
            <span>Sữa tươi các loại</span>
          </a>
          <a href="#">
            <img src="~/assets/images/products/nuoc-ngot-cac-loai-202101190943494803.png" style="width: 50%;">
            <span>Nước ngọt các loại</span>
          </a>
          <a href="#">
            <img src="~/assets/images/products/mi-goi-an-lien-202101191033219269.png" style="width: 50%;">
            <span>Mì gói ăn liền</span>
          </a>
          <a href="#">
            <img src="~/assets/images/products/dau-an-cac-loai-202101191038388488.png" style="width: 50%;">
            <span>Dầu ăn các loại</span>
          </a>
          <a href="#">
            <img src="~/assets/images/products/khan-uot-cac-loai-202101191151358335.png" style="width: 50%;">
            <span>Khăn ướt các loại</span>
          </a>
          <a href="#">
            <img src="~/assets/images/products/dau-goi-cac-loai-202101191145083094.png" style="width: 50%;">
            <span>Dầu gội các loại</span>
          </a>
          <a href="#">
            <img src="~/assets/images/products/gao-ngon-cac-loai-202101191055092230.png" style="width: 50%;">
            <span>Gạo ngon các loại</span>
          </a>
          <a href="#">
            <img src="~/assets/images/products/thit-hai-san-dong-202101191135401545.png" style="width: 50%;">
            <span>Thịt, hải sản đông</span>
          </a>
          <a href="#">
            <img src="~/assets/images/products/trai-cay-nhap-khau-202101191124534951.png" style="width: 50%;">
            <span>Trái cây nhập khẩu</span>
          </a>
          <a href="#">
            <img src="~/assets/images/products/bia-nuoc-co-con-202101190940074943.png" style="width: 50%;">
            <span>Bia, nước có cồn</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { VueAgile } from '~/node_modules/vue-agile'
export default {
  components: {
    agile: VueAgile
  }
}
</script>

