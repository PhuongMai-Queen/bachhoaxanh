<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-10 content-col-right">
        <div class="desktop_footer">
          <div class="benefits row">
            <div class="col-6">
                <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'clock']"></font-awesome-icon>
                <p>
                  Đặt online <b>giao tận nhà ĐÚNG GIỜ</b>
                  (nếu trễ tặng PMH 20.000₫)
                </p>
            </div>
            <div class="col-6">
              <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'undo-alt']"></font-awesome-icon>
              <p>
                Đổi, trả sản phẩm <b>trong 7 ngày</b>
              </p>
            </div>
          </div>
          <div class="detail row">
            <div class="col-6">
              <div class="callcenter">
                <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'phone-alt']"></font-awesome-icon>
                Tổng đài:
                <nuxt-link to="#">1900.1908 </nuxt-link>-
                <nuxt-link to="#">028.3622.9900 </nuxt-link> (7:00 - 21:30)
              </div>
              <div class="linkfooter">
                <div class="row">
                  <div class="col-4">
                    <ul>
                      <li>
                        <nuxt-link to="#">Chính sách giao hàng</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="#">Hóa đơn điện tử</nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-4">
                    <ul>
                      <li>
                        <nuxt-link to="#">Chính sách đổi trả</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="#">Hướng dẫn mua hàng</nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-4">
                    <ul>
                      <li>
                        <nuxt-link to="#">Liên hệ</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="#">Quy chế hoạt động</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="recruitment">
                <nuxt-link to="#">Tuyển dụng</nuxt-link>
                <nuxt-link to="#">6.906 công việc đang chờ bạn</nuxt-link>
              </div>
              <div class="linkfooter_bottom_1">
                <span>Website thành viên:</span>
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
              </div>
              <div class="nofollow">
                <nuxt-link to="#">
                  <span>9</span> cửa hàng mới khai trương <div class="lab_promo">(Có khuyến mãi)</div>
                </nuxt-link>
              </div>
              <div class="nofollow">
                <nuxt-link to="#">
                  <span>3</span> cửa hàng sắp khai trương
                </nuxt-link>
              </div>
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
        <div class="desktop_footer_copyright">
          © 2018. Công Ty Cổ Phần Thương Mại Bách Hoá Xanh. GPDKKD: 0310471746 do sở KH & ĐT TP.HCM cấp ngày 23/11/2010.
          Giấy phép thiết lập mạng xã hội trên mạng (Số 20/GP-BTTTT) do Bộ Thông Tin Và Truyền Thông cấp ngày 11/01/2021.
          Trụ sở chính: 128, Trần Quang Khải, P.Tân Định, Quận.1, TP.HCM. Địa chỉ liên hệ: Toà nhà MWG, Lô T2-1.2,
          Đường D1, Khu Công Nghệ Cao, P. Tân Phú, Quận 9, TP.HCM. Email:lienhe@bachhoaxanh.com Chịu trách nhiệm
          nội dung: Trần Nhật Linh.
          <nuxt-link to="#">Xem chính sách sử dụng web</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
