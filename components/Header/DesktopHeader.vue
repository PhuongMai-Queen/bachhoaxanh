<template>
  <div class="desktop_header">
    <div class="container">
      <div class="row">
        <nav class="col-3 mb-3">
          <span><img src="~assets/images/general/menu_desktop.png"> DANH MỤC SẢN PHẨM</span>
          <b-nav vertical>
            <b-nav-item to="#">Rau an toàn 4KFarm</b-nav-item>
            <b-nav-item v-b-toggle.collapse-2>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Đồ uống các loại
            </b-nav-item>
            <b-collapse id="collapse-2">
              <ul>
                <li>
                  <nuxt-link to="#">Nước ngọt, nước trà</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Cafe, trà các loại</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Nước uống tăng lực</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước uống trái cây </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bia, nước có cồn </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước suối, nước khoáng </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Trà sữa đóng chai </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước yến dinh dưỡng </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Mật ong, bột nghệ </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-3>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Sữa uống các loại
            </b-nav-item>
            <b-collapse id="collapse-3">
              <ul>
                <li>
                  <nuxt-link to="#"> Sữa tươi các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Sữa hạt, sữa đậu </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Sữa đặc các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Sữa chua, phô mai </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Thức uống lúa mạch </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Yến mạch, ngũ cốc </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Sữa bột các loại </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-4>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Bánh kẹo các loại
            </b-nav-item>
            <b-collapse id="collapse-4">
              <ul>
                <li>
                  <nuxt-link to="#"> Bánh snack, rong biển </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bánh quy, bánh trứng </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Singum, kẹo các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bánh gạo, bánh xốp </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bánh bông lan ngọt </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bánh socola, kẹo socola </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bánh que, bánh quế </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Mứt, thạch các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Ăn vặt văn phòng </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Hạt, trái cây sấy </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-5>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Mì, cháo, phở, bún
            </b-nav-item>
            <b-collapse id="collapse-5">
              <ul>
                <li>
                  <nuxt-link to="#"> Mì gói ăn liền </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Phở, hủ tiếu, miến </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Cháo gói, cháo tươi </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bánh canh, bánh đa </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bánh gạo hàn quốc </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-6>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Dầu ăn, gia vị
            </b-nav-item>
            <b-collapse id="collapse-6">
              <ul>
                <li>
                  <nuxt-link to="#"> Đường, muối, gia vị </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Dầu ăn các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Hạt nêm, bột ngọt </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước mắm các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Gia vị nêm sẵn </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Tương ớt, tương đen </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước tương các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Dầu hào, giấm, bơ </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước chấm, mắm tôm </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-7>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Gạo, bột, đồ khô
            </b-nav-item>
            <b-collapse id="collapse-7">
              <ul>
                <li>
                  <nuxt-link to="#"> Đồ chay các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Gạo ngon các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Xúc xích, lạp xưởng </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Mì, nui, bún khô </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Rong biển, tảo biển </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bột khô các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Đồ hộp các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Đậu, nấm, đồ khô </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Ngũ cốc, yến mạch </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước cốt dừa lon </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bánh tráng, bánh phồng </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Cá mắm, đồ chua </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-8>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Đồ mát, đông lạnh
            </b-nav-item>
            <b-collapse id="collapse-8">
              <ul>
                <li>
                  <nuxt-link to="#"> Sữa chua, phô mai </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Trái cây nhập khẩu </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Xúc xích, chả lụa </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Há cảo, bánh xếp </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Thịt, hải sản đông </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bánh ngọt, sandwich </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Cá viên, bò viên </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Kim chi, dưa muối </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Chả giò, chả ram </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Đậu hũ, cá khô </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Thực phẩm làm sẵn </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước sâm, trà sữa </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-9>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Tã, đồ cho bé
            </b-nav-item>
            <b-collapse id="collapse-9">
              <ul>
                <li>
                  <nuxt-link to="#"> Khăn ướt, khăn sữa </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Sữa uống cho bé </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước giặt, nước xả </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Chải răng cho bé </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Dầu gội, sữa tắm </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Tã bỉm cho bé </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Khẩu trang, tăm bông </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Phấn thơm, dưỡng ẩm </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bình sữa, nước rửa </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-10>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Chăm sóc cá nhân
            </b-nav-item>
            <b-collapse id="collapse-10">
              <ul>
                <li>
                  <nuxt-link to="#"> Khăn giấy, khăn ướt </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Dầu gội, dầu xả </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Tẩy trang, rửa mặt </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Kem, bàn chải răng </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Chăm sóc phụ nữ </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Rửa tay, khẩu trang </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Sữa tắm, xà bông </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước súc miệng, tăm </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Lăn xịt khử mùi </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Dao, bọt cạo râu </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Chăm sóc da mặt </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Đồ chăm sóc khác </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Dưỡng thể, chống nắng </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bao cao su, gel </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Kem ủ dưỡng tóc </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-11>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Vệ sinh nhà cửa
            </b-nav-item>
            <b-collapse id="collapse-11">
              <ul>
                <li>
                  <nuxt-link to="#"> Nước giặt, bột giặt </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước rửa chén dĩa </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước xả quần áo </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Lau sàn, lau bếp </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Tẩy rửa nhà tắm </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Xịt phòng, sáp thơm </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bình diệt côn trùng </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Nước tẩy quần áo </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Túi, bao đựng rác </nuxt-link>
                </li>
              </ul>
            </b-collapse>
            <b-nav-item v-b-toggle.collapse-12>
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
              Đồ dùng gia đình
            </b-nav-item>
            <b-collapse id="collapse-12">
              <ul>
                <li>
                  <nuxt-link to="#"> Đồ dùng nhà bếp </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Các đồ dùng khác </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Túi, bao đựng rác </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Tô, chén, dĩa, ly </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Pin tiểu các loại </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Đồ dùng một lần </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Dao, kéo, thớt gỗ </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Đũa, muỗng, nĩa, vá </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Màng bọc thực phẩm </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Bình nước, giữ nhiệt </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"> Hộp đựng thực phẩm </nuxt-link>
                </li>
              </ul>
            </b-collapse>
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
        <div class="col-2 desktop_logo">
          <img src="~/assets/images/general/logo.png" width="100%" v-b-toggle.sidebar-footer style="outline: none;">
        </div>
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
          <font-awesome-icon :icon="['fas', 'shopping-basket']"></font-awesome-icon>
          <span>Giỏ hàng</span>
        </div>
      </div>
    </div>
  </div>
</template>
