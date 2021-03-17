<template>
  <div class="mobile_footer">
   <div class="benefits row">
     <div class="col-6">
       <div class="row">
         <div class="col-2">
           <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'clock']"></font-awesome-icon>
         </div>
         <div class="col-10">
           <p>
             Đặt online <b>giao tận nhà ĐÚNG GIỜ</b>
             (nếu trễ tặng PMH 20.000₫)
           </p>
         </div>
       </div>
     </div>
     <div class="col-6">
       <div class="row">
         <div class="col-2">
           <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'undo-alt']"></font-awesome-icon>
         </div>
         <div class="col-10">
           <p>
             Đổi, trả sản phẩm <b>trong 7 ngày</b>
           </p>
         </div>
       </div>
     </div>
   </div>
    <div class="stores">
      <div>
        <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'clipboard-list']"></font-awesome-icon>
        <nuxt-link to="#">
          Đăng ký chào hàng vào Bách Hóa Xanh
        </nuxt-link>
      </div>
      <div>
        <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'building']"></font-awesome-icon>
        <nuxt-link to="#">
          Hệ thống <span>1.761</span> cửa hàng Bách Hóa Xanh
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="#">
          <span>3</span> cửa hàng sắp khai trương
        </nuxt-link>
      </div>
    </div>
    <div class="recruitment">
      <nuxt-link to="#">
        Tuyển dụng
      </nuxt-link>
      <nuxt-link to="#">6.906 công việc đang chờ bạn</nuxt-link>
    </div>
    <div class="callcenter">
      <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'phone-alt']"></font-awesome-icon>
      Tổng đài:
      <nuxt-link to="#">1900.1908 </nuxt-link>-
      <nuxt-link to="#">028.3622.9900 </nuxt-link> (7:00 - 21:30)
    </div>
    <div class="infoother">
      <div class="other">
        <span v-b-toggle.collapse-1>

          Thông tin khác
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
          <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
        </span>
        <b-collapse id="collapse-1">
          <div class="linkfooter">
            <div class="row">
              <div class="col-6">
                <ul>
                  <li>
                    <nuxt-link to="#">Chính sách giao hàng</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Liên hệ</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Quy chế hoạt động</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Tuyển dụng</nuxt-link>
                  </li>
                </ul>
                <div class="linkfooter_bottom_1">
                  <p>Website thành viên:</p>
                  <nuxt-link to="#">
                    <img src="~/assets/images/general/tgdd.png">
                  </nuxt-link>
                  <nuxt-link to="#">
                    <img src="~/assets/images/general/dmx.png">
                  </nuxt-link>
                  <nuxt-link to="#">
                    <img src="~/assets/images/general/mai_am_tgdd.png">
                  </nuxt-link>
                </div>
              </div>
              <div class="col-6">
                <ul>
                  <li>
                    <nuxt-link to="#">Chính sách đổi trả</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Hướng dẫn mua hàng</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Hóa đơn điện tử</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Gop ý</nuxt-link>
                  </li>
                </ul>
                <div class="linkfooter_bottom_2">
                  <nuxt-link to="#">
                    <img src="~/assets/images/general/dtb.png">
                  </nuxt-link>
                  <nuxt-link to="#">
                    <img src="~/assets/images/general/dmca.png">
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
    <div class="tgdd-ref">
      <div class="row">
        <div class="col-6 sim">
          <nuxt-link to="#">
            Sim, thẻ cào
          </nuxt-link>
        </div>
        <div class="col-6 installment">
          <nuxt-link to="#">
            Trả góp, điện nước
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
