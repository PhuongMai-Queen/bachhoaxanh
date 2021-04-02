<template>
  <div>
    <div id="back-top" class="hascart" @click="topFunction">
      ↑ <span>Lên đầu trang</span>
    </div>
    <footer class="mobile_footer">
      <div class="callcenter row">
        <div class="col-4">
          <div class="buyercc infocc">
            <div class="buyercc infocc">
              <span>Bán hàng 7:00 - 21:30</span>
              <span>
              <font-awesome-icon :icon="['fas', 'phone-square-alt']"></font-awesome-icon>
              <a href="#">1900 1908</a>
            </span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="complaintcc infocc">
            <span>Khiếu nại 8:00 - 21:30</span>
            <span>
            <font-awesome-icon :icon="['fas', 'phone-square-alt']"></font-awesome-icon>
            <a href="#">1800 1067</a>
          </span>
          </div>
        </div>
        <div class="col-4">
          <div class="infoother">
            <div class="other">
            <span v-b-toggle.collapse-1>
              Xem thêm <br> thông tin
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
            </span>
            </div>
          </div>
        </div>
      </div>
      <b-collapse id="collapse-1">
        <div class="linkfooter">
          <div class="row">
            <div class="col-4">
              <ul>
                <li>
                  <nuxt-link to="#">Xem <b>1.761</b> cửa hàng</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Tuyển <b>5.954</b> việc</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Đăng ký chào hàng</nuxt-link>
                </li>
              </ul>
              <div class="linkfooter_bottom_1">
                <nuxt-link to="#">
                  <img src="~/assets/images/general/tgdd.png">
                </nuxt-link>
                <nuxt-link to="#">
                  <img src="~/assets/images/general/mai_am_tgdd.png">
                </nuxt-link>
                <nuxt-link to="#">
                  <img src="~/assets/images/general/dtb.png">
                </nuxt-link>
              </div>
            </div>
            <div class="col-4">
              <ul>
                <li>
                  <nuxt-link to="#">Chính sách giao</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Hướng dẫn mua</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Chính sách đổi trả</nuxt-link>
                </li>
              </ul>
              <div class="linkfooter_bottom_2">
                <nuxt-link to="#">
                  <img src="~/assets/images/general/dmx.png">
                </nuxt-link>
                <nuxt-link to="#">
                  <img src="~/assets/images/general/4k-farm.png">
                </nuxt-link>
                <nuxt-link to="#">
                  <img src="~/assets/images/general/dmca.png">
                </nuxt-link>
              </div>
            </div>
            <div class="col-4">
              <ul>
                <li>
                  <nuxt-link to="#">Quy chế Web</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Đăng ký chào hàng</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Liên hệ, góp ý</nuxt-link>
                </li>
              </ul>
              <div class="linkfooter_bottom_3">
                <nuxt-link to="#">
                  <img src="~/assets/images/general/ntak.png" width="65%">
                </nuxt-link>
                <nuxt-link to="#">
                  <img src="~/assets/images/general/facebook.png" width="15%"> <span>367k fan</span>
                </nuxt-link>
                <nuxt-link to="#">
                  <img src="~/assets/images/general/youtube.png" width="15%"> <span>20k theo dõi</span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="copyright">
          <span>
            © 2021. Công Ty Cổ Phần Thương Mại Bách Hoá Xanh. GPDKKD: 0310471746 do sở KH & ĐT TP.HCM cấp ngày 23/11/2010. Trụ sở chính: 128, Trần Quang Khải, P.Tân Định, Quận.1, TP.HCM. Giấy phép thiết lập mạng xã hội trên mạng (Số 20/GP-BTTTT) do Bộ Thông Tin Và Truyền Thông cấp ngày 11/01/2021. Địa chỉ liên hệ: Toà nhà MWG, Lô T2-1.2, Đường D1, Khu Công Nghệ Cao, P. Tân Phú, Quận 9, TP.HCM. Email:lienhe@bachhoaxanh.com Chịu trách nhiệm nội dung: Trần Nhật Linh.
          </span>
          </div>
        </div>
      </b-collapse>
      <div class="tgdd-ref">
        <div class="row">
          <div class="col-3 sim">
            <nuxt-link to="#">
              Sim, thẻ cào
            </nuxt-link>
          </div>
          <div class="col-4 installment">
            <nuxt-link to="#">
              Trả góp, điện nước
            </nuxt-link>
          </div>
          <div class="col-5 buyvoucher">
            <nuxt-link to="#">
              Mua Phiếu mua hàng
            </nuxt-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    // beforeMount() {
    //   window.onscroll = function () {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //       document.querySelector("#back-top").style.display = "block";
    //     } else {
    //       document.querySelector("#back-top").style.display = "none";
    //     }
    //   };
    // },
    methods:{
      topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  }
</script>
