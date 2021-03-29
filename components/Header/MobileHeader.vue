<template>
  <div>
    <div class="mobile_header">
      <b-row cols-lg="mobile_menu_header">
        <div class="col-1">
          <img src="~/assets/images/general/menu.png" width="120%" v-b-toggle.sidebar-footer style="outline: none;">
        </div>
        <b-sidebar id="sidebar-footer"
                   aria-label="Sidebar with custom footer"
                   no-header shadow>
          <template #footer="{ hide }">
            <div class="d-flex align-items-right px-3 py-2">
              <b-button align-items-right size="sm" @click="hide">
                <img src="~/assets/images/general/delete.png" width="30%">
                Đóng
              </b-button>
            </div>
          </template>
          <mdb-container>
            <div class="row row-scrollspy">
              <mdb-col class="row-scrollspy-left">
                <div class="row menu-top">
                  <div class="col-7"></div>
                  <div class="col-5 menu-top-left">
                    <nuxt-link to="/">
                      <img src="~/assets/images/general/home.png">
                    </nuxt-link>
                  </div>
                </div>
                <mdb-list-group
                  v-mdb-scroll-spy.async="{
            container: 'container',
            callback: 'setActive',
            loading
          }"
                  class="scrollspy"
                >
                  <mdb-list-group-item
                    action
                    :active="i === active"
                    tag="a"
                    :href="`#${section.id}`"
                    v-for="(section, i) in scrollSections"
                    :key="section.id"
                  >
                    {{ section.title }}

                  </mdb-list-group-item>
                </mdb-list-group>
                <nuxt-link to="#" class="promotion-navbar">
                  <img src="~/assets/images/general/icon_spkm.png" width="12%"> Khuyến mãi hot
                </nuxt-link>
              </mdb-col>
              <mdb-col
                class="z-depth-1"
                id="container"
              >
                <div class="input-menu-search">
                  <b-form-input placeholder="Tìm theo món hàng"></b-form-input>
                  <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'search']"></font-awesome-icon>
                </div>
                <div id="section1">
                  <div class="space-drink-cate"></div>
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/bhx/nuoc-ngot-cac-loai-202103201457569683.jpg">
                      </nuxt-link>
                      <div class="text">
                        Nước ngọt<br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/8938/bhx/nuoc-tra-giai-khat-202103201458129503.jpg">
                      </nuxt-link>
                      <div class="text">
                        Nước trà<br> giải khát
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2883/bhx/ca-phe-pha-phin-202103201501103196.jpg">
                      </nuxt-link>
                      <div class="text">
                        Cà phê<br> pha phin
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2524/bhx/ca-phe-hoa-tan-202103201501249868.jpg">
                      </nuxt-link>
                      <div class="text">
                        Cà phê <br> hoà tan
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8966/bhx/cafe-cafe-sua-lon-202103201501396509.jpg">
                      </nuxt-link>
                      <div class="text">
                        Cafe, Cafe <br> sữa lon
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2385/bhx/tra-kho-tui-loc-202103201501522218.jpg">
                      </nuxt-link>
                      <div class="text">
                        Trà khô, <br> túi lọc
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3226/bhx/nuoc-uong-tang-luc-202103201500096061.jpg">
                      </nuxt-link>
                      <div class="text">
                        Nước uống <br> tăng lực
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8965/bhx/nuoc-uong-bu-khoang-202103201500222590.jpg">
                      </nuxt-link>
                      <div class="text">
                        Nước uống <br> bù khoáng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3265/bhx/nuoc-ep-trai-cay-202103201458568358.jpg">
                      </nuxt-link>
                      <div class="text">
                        Nước ép <br> trái cây
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7163/bhx/trai-cay-dong-hop-202103201459282072.jpg">
                      </nuxt-link>
                      <div class="text">
                        Trái cây <br> đóng hộp
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7579/bhx/si-ro-sinh-to-202103201459403377.jpg">
                      </nuxt-link>
                      <div class="text">
                        Si rô, <br> sinh tố
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2282/bhx/bia-nuoc-co-con-202103201503346998.jpg">
                      </nuxt-link>
                      <div class="text">
                        Bia, nước <br> có cồn
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2563/bhx/nuoc-suoi-dong-chai-202103201500377907.jpg">
                      </nuxt-link>
                      <div class="text">
                        Nước suối, <br> nước khoáng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8963/bhx/tra-sua-dong-chai-202103202301463403.jpg">
                      </nuxt-link>
                      <div class="text">
                        Trà sữa <br> đóng chai
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2947/bhx/sua-huong-trai-cay-202103201458415512.jpg">
                      </nuxt-link>
                      <div class="text">
                        Sữa hương <br> trái cây
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/4585/bhx/nuoc-yen-dinh-duong-202103201502312993.jpg">
                      </nuxt-link>
                      <div class="text">
                        Nước yến <br> dinh dưỡng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="//cdn.tgdd.vn/Products/Images/7068/bhx/mat-ong-nguyen-chat-202103201502067379.jpg">
                      </nuxt-link>
                      <div class="text">
                        Mật ong <br> nguyên chất
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7100/bhx/bot-nghe-nghe-vien-202103201502525656.jpg">
                      </nuxt-link>
                      <div class="text">
                        Bột nghệ, <br> nghệ viên
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section2" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2944/bhx/sua-chua-uong-lien-202103201453362737.jpg">
                      </nuxt-link>
                      <div class="text">
                        Sữa chua <br> uống liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2386/bhx/sua-tuoi-cac-loai-202103201452535875.jpg">
                      </nuxt-link>
                      <div class="text">
                        Sữa tươi <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2943/bhx/sua-hat-sua-dau-202103201453075147.jpg">
                      </nuxt-link>
                      <div class="text">
                        Sữa hạt, <br> sữa đậu
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2526/bhx/sua-dac-cac-loai-202101191009485079.png">
                      </nuxt-link>
                      <div class="text">
                        Sữa đặc <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2945/bhx/thuc-uong-lua-mach-202103201453236788.jpg">
                      </nuxt-link>
                      <div class="text">
                        Thức uống <br> lúa mạch
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="//cdn.tgdd.vn/Products/Images/8286/bhx/yen-mach-ngu-coc-202103201452187337.jpg">
                      </nuxt-link>
                      <div class="text">
                        Yến mạch, <br> ngũ cốc
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2382/bhx/sua-bot-cong-thuc-202103201451339363.jpg">
                      </nuxt-link>
                      <div class="text">
                        Sữa bột <br> công thức
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2946/bhx/sua-bot-pha-san-202103201454327667.jpg">
                      </nuxt-link>
                      <div class="text">
                        Sữa bột <br> pha sẵn
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2944/bhx/sua-chua-uong-lien-202103201453362737.jpg">
                      </nuxt-link>
                      <div class="text">
                        Sữa chua <br> uống liền
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section3" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3357/bhx/banh-quy-cac-loai-202101191016028154.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh quy <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7621/bhx/banh-trung-cac-loai-202101191016251253.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh trứng <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3364/bhx/banh-snack-rong-bien-202101191013131774.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh snack, <br> rong biển
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/4888/bhx/keo-singum-cac-loai-202101191019035595.png">
                      </nuxt-link>
                      <div class="text">
                        Kẹo singum <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2687/bhx/keo-cung-cac-loai-202101191019120098.png">
                      </nuxt-link>
                      <div class="text">
                        Kẹo cứng <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7199/bhx/keo-mem-cac-loai-202101191019428041.png">
                      </nuxt-link>
                      <div class="text">
                        Kẹo mềm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3361/bhx/banh-gao-an-lien-202101191014218262.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh gạo <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3360/bhx/banh-xop-cac-loai-202101191015057897.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh xốp <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3358/bhx/banh-bong-lan-ngot-202101191015228544.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh bông <br> lan ngọt
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7622/bhx/banh-socola-cac-loai-202101191018158757.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh socola <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/6597/bhx/keo-socola-cac-loai-202101191018363455.png">
                      </nuxt-link>
                      <div class="text">
                        Kẹo socola <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3362/bhx/banh-que-cac-loai-202101191017210043.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh que <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3359/bhx/banh-que-cac-loai-202101191017363950.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh quế <br>Bánh quế
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3488/bhx/keo-mut-cac-loai-202101191030461283.png">
                      </nuxt-link>
                      <div class="text">
                        Kẹo mứt <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3487/bhx/hat-kho-cac-loai-202101191031129321.png">
                      </nuxt-link>
                      <div class="text">
                        Hạt khô <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3368/bhx/rau-cau-cac-loai-202103201507450595.jpg">
                      </nuxt-link>
                      <div class="text">
                        Rau câu <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3445/bhx/cac-loai-banh-khac-202101191031369432.png">
                      </nuxt-link>
                      <div class="text">
                        Các loại <br> bánh khác
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8318/bhx/kho-che-bien-san-202101191032218293.png">
                      </nuxt-link>
                      <div class="text">
                        Khô chế <br> biến sẵn
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8320/bhx/do-kho-an-lien-khac-202006020954260996.png">
                      </nuxt-link>
                      <div class="text">
                        Cơm cháy, <br> bánh tráng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3365/bhx/hat-trai-cay-say-202101191020287508.png">
                      </nuxt-link>
                      <div class="text">
                        Hạt, trái <br> cây sấy
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3357/bhx/banh-quy-cac-loai-202101191016028154.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh quy <br> các loại
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section4" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2963/bhx/bun-goi-an-lien-202101191036052196.png">
                      </nuxt-link>
                      <div class="text">
                        Bún gói <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2566/bhx/pho-goi-an-lien-202101191034573607.png">
                      </nuxt-link>
                      <div class="text">
                        Phở gói <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2565/bhx/mi-goi-an-lien-202101191033219269.png">
                      </nuxt-link>
                      <div class="text">
                        Mì gói <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2965/bhx/hu-tieu-an-lien-202101191035054907.png">
                      </nuxt-link>
                      <div class="text">
                        Hủ tiếu <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2964/bhx/mien-goi-an-lien-202101191035260246.png">
                      </nuxt-link>
                      <div class="text">
                        Miến gói <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7167/bhx/canh-goi-an-lien-202101191035340416.png">
                      </nuxt-link>
                      <div class="text">
                        Canh gói <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2564/bhx/chao-goi-chao-tuoi-202101191033493330.png">
                      </nuxt-link>
                      <div class="text">
                        Cháo gói, <br> cháo tươi
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7162/bhx/banh-gao-han-quoc-202101191037192049.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh gạo <br> Hàn Quốc
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2963/bhx/bun-goi-an-lien-202101191036052196.png">
                      </nuxt-link>
                      <div class="text">
                        Bún gói <br> ăn liền
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section5" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2804/bhx/duong-cat-nuoc-duong-202101191041037575.png">
                      </nuxt-link>
                      <div class="text">
                        Đường cát, <br> nước đường
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2803/bhx/muoi-an-cac-loai-202101191041121818.png">
                      </nuxt-link>
                      <div class="text">
                        Muối ăn <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2809/bhx/tieu-den-tieu-xay-202101191041462608.png">
                      </nuxt-link>
                      <div class="text">
                        Tiêu đen, <br> tiêu xay
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2286/bhx/dau-an-cac-loai-202101191038388488.png">
                      </nuxt-link>
                      <div class="text">
                        Dầu ăn <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2806/bhx/hat-nem-cac-loai-202101191039531814.png">
                      </nuxt-link>
                      <div class="text">
                        Hạt nêm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2805/bhx/bot-ngot-cac-loai-202101191039447440.png">
                      </nuxt-link>
                      <div class="text">
                        Bột ngọt <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2808/bhx/bot-canh-cac-loai-202101191040101160.png">
                      </nuxt-link>
                      <div class="text">
                        Bột canh <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2289/bhx/nuoc-mam-cac-loai-202101191039178222.png">
                      </nuxt-link>
                      <div class="text">
                        Nước mắm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8274/bhx/ca-ri-bo-kho-202101191053195892.png">
                      </nuxt-link>
                      <div class="text">
                        Cà ri, <br> bò kho
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8275/bhx/hoi-que-thao-qua-202101191053115082.png">
                      </nuxt-link>
                      <div class="text">
                        Hồi, quế, <br> thảo quả
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3526/bhx/sa-te-ot-bot-202101191053586737.png">
                      </nuxt-link>
                      <div class="text">
                        Sa tế, <br>  ớt bột
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8271/bhx/gia-vi-nem-san-202101191054099247.png">
                      </nuxt-link>
                      <div class="text">
                        Gia vị <br>  nêm sẵn
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8276/bhx/nuoc-mau-hat-dieu-202101191054271369.png">
                      </nuxt-link>
                      <div class="text">
                        Nước màu, <br> hạt điều
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2567/bhx/tuong-ot-tuong-den-202101191041387651.png">
                      </nuxt-link>
                      <div class="text">
                        Tương ớt, <br> tương đen
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2683/bhx/nuoc-tuong-cac-loai-202101191038455490.png">
                      </nuxt-link>
                      <div class="text">
                        Nước tương <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3405/bhx/dau-hao-cac-loai-202101191042093103.png">
                      </nuxt-link>
                      <div class="text">
                        Dầu hào <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3466/bhx/giam-an-cac-loai-202101191043060728.png">
                      </nuxt-link>
                      <div class="text">
                        Giấm ăn <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3465/bhx/bo-tu-thuc-vat-202101191042582309.png">
                      </nuxt-link>
                      <div class="text">
                        Bơ từ <br> thực vật
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3228/bhx/sot-mayonnaise-cac-loai-202101191044149375.png">
                      </nuxt-link>
                      <div class="text">
                        Các loại <br> mayonnaise
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7779/bhx/nuoc-cham-cac-loai-202101191045093746.png">
                      </nuxt-link>
                      <div class="text">
                        Nước chấm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8279/bhx/mam-tom-cac-loai-202101191046207783.png">
                      </nuxt-link>
                      <div class="text">
                        Mắm tôm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8280/bhx/mam-ruoc-cac-loai-202101191046496280.png">
                      </nuxt-link>
                      <div class="text">
                        Mắm ruốc <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8281/bhx/mam-nem-cac-loai-202101191046584505.png">
                      </nuxt-link>
                      <div class="text">
                        Mắm nêm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3528/bhx/mu-tat-cac-loai-202101191048035488.png">
                      </nuxt-link>
                      <div class="text">
                        Mù tạt <br> các loại
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section6" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2513/bhx/gao-ngon-cac-loai-202101191055092230.png">
                      </nuxt-link>
                      <div class="text">
                        Gạo ngon <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8638/bhx/mi-chay-an-lien-202101191111437111.png">
                      </nuxt-link>
                      <div class="text">
                        Mì chay <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8641/bhx/hu-tieu-goi-chay-202101191111516000.png">
                      </nuxt-link>
                      <div class="text">
                        Hủ tiếu <br> gói chay
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8640/bhx/pho-chay-an-lien-202101191112104519.png">
                      </nuxt-link>
                      <div class="text">
                        Phở chay <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8643/bhx/bun-chay-an-lien-202101191112192414.png">
                      </nuxt-link>
                      <div class="text">
                        Bún chay <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8639/bhx/chao-chay-an-lien-202101191112588781.png">
                      </nuxt-link>
                      <div class="text">
                        Cháo chay <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8644/bhx/nuoc-mam-an-chay-202101191112511683.png">
                      </nuxt-link>
                      <div class="text">
                        Nước mắm <br> ăn chay
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8645/bhx/hat-nem-an-chay-202101191113148211.png">
                      </nuxt-link>
                      <div class="text">
                        Hạt nêm <br> ăn chay
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7082/bhx/vang-dau-suon-non-202101191113236226.png">
                      </nuxt-link>
                      <div class="text">
                        Váng đậu, <br> sườn non
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8642/bhx/mien-chay-an-lien-202101191114072777.png">
                      </nuxt-link>
                      <div class="text">
                        Miến chay <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3525/bhx/tuong-chao-cac-loai-202101191114233127.png">
                      </nuxt-link>
                      <div class="text">
                        Tương, chao <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3507/bhx/xuc-xich-tiet-trung-202101191102416056.png">
                      </nuxt-link>
                      <div class="text">
                        Xúc xích <br> tiệt trùng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3506/bhx/lap-xuong-cac-loai-202101191103099063.png">
                      </nuxt-link>
                      <div class="text">
                        Lạp xưởng <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8158/bhx/mi-y-mi-trung-202101191058074546.png">
                      </nuxt-link>
                      <div class="text">
                        Mì Ý, <br> mì trứng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8159/bhx/nui-kho-cac-loai-202101191058261473.png">
                      </nuxt-link>
                      <div class="text">
                        Nui khô <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8160/bhx/mien-hu-tieu-pho-202101191058350359.png">
                      </nuxt-link>
                      <div class="text">
                        Miến, hủ <br> tiếu, phở
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8163/bhx/bun-kho-bun-tuoi-202101191059091502.png">
                      </nuxt-link>
                      <div class="text">
                        Bún khô, <br> bún tươi
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8298/bhx/rong-bien-an-lien-202101191104133511.png">
                      </nuxt-link>
                      <div class="text">
                        Rong biển <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7083/bhx/rong-bien-nau-canh-202101191104214802.png">
                      </nuxt-link>
                      <div class="text">
                        Rong biển <br> nấu canh
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2388/bhx/bot-che-bien-san-202101191109277810.png">
                      </nuxt-link>
                      <div class="text">
                        Bột chế <br> biến sẵn
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7605/bhx/bot-kho-cac-loai-202101191109466818.png">
                      </nuxt-link>
                      <div class="text">
                        Bột khô <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2864/bhx/bot-chien-gion-xu-202101191110021745.png">
                      </nuxt-link>
                      <div class="text">
                        Bột chiên <br> giòn, xù
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2865/bhx/bot-lam-rau-cau-202101191110180765.png">
                      </nuxt-link>
                      <div class="text">
                        Bột làm <br> rau câu
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3237/bhx/ca-hop-cac-loai-202101191100088146.png">
                      </nuxt-link>
                      <div class="text">
                        Cá hộp <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3238/bhx/heo-hop-cac-loai-202101191100246765.png">
                      </nuxt-link>
                      <div class="text">
                        Heo hộp <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3239/bhx/bo-hop-cac-loai-202101191100337812.png">
                      </nuxt-link>
                      <div class="text">
                        Bò hộp <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3240/bhx/pate-hop-cac-loai-202101191101060934.png">
                      </nuxt-link>
                      <div class="text">
                        Pate hộp <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8164/bhx/thit-ga-dong-hop-202101191100583065.png">
                      </nuxt-link>
                      <div class="text">
                        Thịt gà <br> đóng hộp
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7220/bhx/rau-cu-dong-hop-202101191101519876.png">
                      </nuxt-link>
                      <div class="text">
                        Rau củ <br> đóng hộp
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3235/bhx/dau-kho-cac-loai-202101191104571896.png">
                      </nuxt-link>
                      <div class="text">
                        Đậu khô <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7084/bhx/nam-kho-do-kho-202101191105198758.png">
                      </nuxt-link>
                      <div class="text">
                        Nấm khô, <br> đồ khô
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2903/bhx/ngu-coc-yen-mach-202101191057161925.png">
                      </nuxt-link>
                      <div class="text">
                        Ngũ cốc, <br> yến mạch
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7086/bhx/nuoc-cot-dua-lon-202101191105595016.png">
                      </nuxt-link>
                      <div class="text">
                        Nước cốt <br> dừa lon
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7221/bhx/nguyen-lieu-nau-che-202101191108553220.png">
                      </nuxt-link>
                      <div class="text">
                        Nguyên liệu <br> nấu chè
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3233/bhx/banh-trang-cac-loai-202101191103287246.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh tráng <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3234/bhx/banh-phong-banh-da-202101191103370908.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh phồng, <br> bánh đa
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8285/bhx/ca-mam-cac-loai-202101191110456928.png">
                      </nuxt-link>
                      <div class="text">
                        Cá mắm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3527/bhx/dua-mam-cac-loai-202101191110532585.png">
                      </nuxt-link>
                      <div class="text">
                        Dưa mắm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2513/bhx/gao-ngon-cac-loai-202101191055092230.png">
                      </nuxt-link>
                      <div class="text">
                        Gạo ngon <br> các loại
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section7" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7172/bhx/thit-hai-san-dong-202101191135401545.png">
                      </nuxt-link>
                      <div class="text">
                        Thịt, hải <br> sản đông
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7578/bhx/trai-cay-nhap-khau-202101191124534951.png">
                      </nuxt-link>
                      <div class="text">
                        Trái cây <br> nhập khẩu
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7558/bhx/sua-chua-vang-sua-202101191125403642.png">
                      </nuxt-link>
                      <div class="text">
                        Sữa chua, <br> váng sữa
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7598/bhx/sua-chua-men-song-202101191126088031.png">
                      </nuxt-link>
                      <div class="text">
                        Sữa chua <br> men sống
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7599/bhx/pho-mai-an-lien-202101191126009421.png">
                      </nuxt-link>
                      <div class="text">
                        Phô mai <br> ăn liền
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7618/bhx/xuc-xich-cac-loai-202101191133271412.png">
                      </nuxt-link>
                      <div class="text">
                        Xúc xích <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7169/bhx/cha-lua-thit-nguoi-202101191134359413.png">
                      </nuxt-link>
                      <div class="text">
                        Chả lụa, <br> thịt nguội
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7258/bhx/banh-xep-ha-cao-202101191128443530.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh xếp, <br> há cảo
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7301/bhx/banh-bao-dong-lanh-202101191128549336.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh bao <br> đông lạnh
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8359/bhx/banh-pizza-cac-loai-202101191129514296.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh Pizza <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7740/bhx/banh-mi-tuoi-ngot-202101191127377206.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh mì <br> tươi ngọt
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/9026/bhx/banh-sandwich-cac-loai-202101191127453094.png">
                      </nuxt-link>
                      <div class="text">
                        Sandwich các <br> loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/9027/bhx/banh-ngot-cac-loai-202101191128051838.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh ngọt <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7170/bhx/ca-vien-bo-vien-202101191135128624.png">
                      </nuxt-link>
                      <div class="text">
                        Cá viên, <br> bò viên
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7459/bhx/kim-chi-dua-muoi-202101191137165148.png">
                      </nuxt-link>
                      <div class="text">
                        Kim chi, <br> dưa muối
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7171/bhx/cha-gio-cha-ram-202101191127162702.png">
                      </nuxt-link>
                      <div class="text">
                        Chả giò, <br> chả ram
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7461/bhx/dau-hu-cac-loai-202101191136088565.png">
                      </nuxt-link>
                      <div class="text">
                        Đậu hũ <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7460/bhx/banh-flan-cac-loai-202101191136253978.png">
                      </nuxt-link>
                      <div class="text">
                        Bánh flan <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7259/bhx/thuc-pham-lam-san-202101191135347752.png">
                      </nuxt-link>
                      <div class="text">
                        Thực phẩm <br> làm sẵn
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8778/bhx/nuoc-sam-tra-sua-202101191124365161.png">
                      </nuxt-link>
                      <div class="text">
                        Nước sâm, <br> trà sữa
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7172/bhx/thit-hai-san-dong-202101191135401545.png">
                      </nuxt-link>
                      <div class="text">
                        Thịt, hải <br> sản đông
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section8" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8682/bhx/khan-uot-khan-sua-202101191141463556.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn ướt, <br> khăn sữa
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/9079/bhx/sua-bot-cho-be-202101191139001488.png">
                      </nuxt-link>
                      <div class="text">
                        Sữa bột <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/9080/bhx/sua-pha-san-cho-be-202101191139193461.png">
                      </nuxt-link>
                      <div class="text">
                        Sữa pha <br> sẵn cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2605/bhx/bot-banh-an-dam-202101191139274244.png">
                      </nuxt-link>
                      <div class="text">
                        Bột, bánh <br> ăn dặm
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3286/bhx/nuoc-giat-cho-be-202101191141151168.png">
                      </nuxt-link>
                      <div class="text">
                        Nước giặt <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3023/bhx/nuoc-xa-cho-be-202101191141053476.png">
                      </nuxt-link>
                      <div class="text">
                        Nước xả <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8684/bhx/giat-xa-cho-be-202101191141326640.png">
                      </nuxt-link>
                      <div class="text">
                        Giặt xả <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3027/bhx/ban-chai-cho-be-202101191142130234.png">
                      </nuxt-link>
                      <div class="text">
                        Bàn chải <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3028/bhx/danh-rang-cho-be-202101191142401034.png">
                      </nuxt-link>
                      <div class="text">
                        Đánh răng <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3025/bhx/dau-goi-cho-be-202101191139461392.png">
                      </nuxt-link>
                      <div class="text">
                        Dầu gội <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3026/bhx/sua-tam-cho-be-202101191140118183.png">
                      </nuxt-link>
                      <div class="text">
                        Sữa tắm <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8678/bhx/tam-goi-cho-be-202101191140194700.png">
                      </nuxt-link>
                      <div class="text">
                        Tắm gội <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2427/bhx/ta-bim-cho-be-202101191138216126.png">
                      </nuxt-link>
                      <div class="text">
                        Tã bỉm <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8681/bhx/khau-trang-cho-be-202101191143229091.png">
                      </nuxt-link>
                      <div class="text">
                        Khẩu trang <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8738/bhx/tam-bong-cho-be-202101191144041249.png">
                      </nuxt-link>
                      <div class="text">
                        Tăm bông <br> cho bé
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3063/bhx/phan-thom-duong-am-202101191140389481.png">
                      </nuxt-link>
                      <div class="text">
                        Phấn thơm, <br> dưỡng ẩm
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8683/bhx/binh-sua-nuoc-rua-202101191142478142.png">
                      </nuxt-link>
                      <div class="text">
                        Bình sữa, <br> nước rửa
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8682/bhx/khan-uot-khan-sua-202101191141463556.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn ướt, <br> khăn sữa
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section9" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3003/bhx/khan-uot-cac-loai-202101191151358335.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn ướt <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2483/bhx/dau-goi-cac-loai-202101191145083094.png">
                      </nuxt-link>
                      <div class="text">
                        Dầu gội <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3004/bhx/khan-giay-cac-loai-202101191150026451.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn giấy <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/9081/bhx/khan-giay-ve-sinh-202101191151290602.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn giấy <br> vệ sinh
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2484/bhx/dau-xa-cac-loai-202101191145190601.png">
                      </nuxt-link>
                      <div class="text">
                        Dầu xả <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7518/bhx/tam-goi-cac-loai-202101191145379177.png">
                      </nuxt-link>
                      <div class="text">
                        Tắm gội <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2504/bhx/sua-kem-rua-mat-202101191153176839.png">
                      </nuxt-link>
                      <div class="text">
                        Sữa, kem <br> rửa mặt
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3708/bhx/tay-trang-cac-loai-202101191153240749.png">
                      </nuxt-link>
                      <div class="text">
                        Tẩy trang <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/4945/bhx/khan-bong-tay-trang-202101191153314535.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn, bông <br> tẩy trang
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2446/bhx/tuyp-kem-danh-rang-202101191151498523.png">
                      </nuxt-link>
                      <div class="text">
                        Tuýp kem <br> đánh răng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2491/bhx/ban-chai-danh-rang-202101191152059473.png">
                      </nuxt-link>
                      <div class="text">
                        Bàn chải <br> đánh răng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2516/bhx/bang-ve-sinh-tampon-202101191149323972.png">
                      </nuxt-link>
                      <div class="text">
                        Gói băng <br> vệ sinh
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2517/bhx/dung-dich-ve-sinh-202101191149397258.png">
                      </nuxt-link>
                      <div class="text">
                        Dung dịch <br> vệ sinh
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2486/bhx/nuoc-gel-rua-tay-202101191150094424.png">
                      </nuxt-link>
                      <div class="text">
                        Nước, gel <br> rửa tay
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/5872/bhx/khau-trang-cac-loai-202101191149130620.png">
                      </nuxt-link>
                      <div class="text">
                        Khẩu trang <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2444/bhx/sua-tam-cac-loai-202101191146309033.png">
                      </nuxt-link>
                      <div class="text">
                        Sữa tắm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2485/bhx/xa-bong-cac-loai-202101191146236879.png">
                      </nuxt-link>
                      <div class="text">
                        Xà bông <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2490/bhx/nuoc-muoi-suc-mieng-202101191152202123.png">
                      </nuxt-link>
                      <div class="text">
                        Nước muối, <br> súc miệng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2492/bhx/tam-chi-nha-khoa-202101191152277910.png">
                      </nuxt-link>
                      <div class="text">
                        Tăm, chỉ <br> nha khoa
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2507/bhx/lan-xit-khu-mui-202101191149485473.png">
                      </nuxt-link>
                      <div class="text">
                        Lăn xịt <br> khử mùi
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3485/bhx/dao-bot-cao-rau-202101191159017618.png">
                      </nuxt-link>
                      <div class="text">
                        Dao, bọt <br> cạo râu
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/6642/bhx/nuoc-hoa-hong-toner-202101191153503423.png">
                      </nuxt-link>
                      <div class="text">
                        Nước hoa <br> hồng, toner
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/6562/bhx/duong-da-cac-loai-202101191153577750.png">
                      </nuxt-link>
                      <div class="text">
                        Dưỡng da <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/6653/bhx/mat-na-cac-loai-202101191154365042.png">
                      </nuxt-link>
                      <div class="text">
                        Mặt nạ <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/5436/bhx/kem-tay-wax-long-202101191159212825.png">
                      </nuxt-link>
                      <div class="text">
                        Kem tẩy, <br> wax lông
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7658/bhx/kem-xit-con-trung-202101191159482700.png">
                      </nuxt-link>
                      <div class="text">
                        Kem, xịt <br> côn trùng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3124/bhx/tam-bong-ray-tai-202101191159548972.png">
                      </nuxt-link>
                      <div class="text">
                        Tăm bông <br> ráy tai
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7700/bhx/quan-lot-mot-lan-202101191200022978.png">
                      </nuxt-link>
                      <div class="text">
                        Quần lót <br> một lần
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3425/bhx/ta-cho-nguoi-lon-202101191200129835.png">
                      </nuxt-link>
                      <div class="text">
                        Tã cho <br> người lớn
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8740/bhx/do-cham-soc-mong-202101191201168808.png">
                      </nuxt-link>
                      <div class="text">
                        Đồ chăm <br> sóc móng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/8758/bhx/bang-dan-ca-nhan-202101191201242384.png">
                      </nuxt-link>
                      <div class="text">
                        Băng dán <br> cá nhân
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3104/bhx/sua-duong-toan-than-202101191157171273.png">
                      </nuxt-link>
                      <div class="text">
                        Sữa dưỡng <br> toàn thân
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/6658/bhx/kem-gel-chong-nang-202101191157250192.png">
                      </nuxt-link>
                      <div class="text">
                        Kem, gel <br> chống nắng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2519/bhx/bao-cao-su-gel-202101191159081608.png">
                      </nuxt-link>
                      <div class="text">
                        Bao cao <br> su, gel
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3740/bhx/kem-u-duong-toc-202101191157409332.png">
                      </nuxt-link>
                      <div class="text">
                        Kem ủ, <br> xịt dưỡng tóc
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2505/bhx/keo-gel-vuot-toc-202101191157486600.png">
                      </nuxt-link>
                      <div class="text">
                        Keo, gel <br> vuốt tóc
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section10" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2463/bhx/bot-giat-cac-loai-202101191202135986.png">
                      </nuxt-link>
                      <div class="text">
                        Bột giặt <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2464/bhx/nuoc-giat-cac-loai-202101191202550703.png">
                      </nuxt-link>
                      <div class="text">
                        Nước giặt <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/9083/bhx/giat-xa-cac-loai-202101191203044281.png">
                      </nuxt-link>
                      <div class="text">
                        Giặt xả <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2387/bhx/xa-bong-rua-chen-202101191203274766.png">
                      </nuxt-link>
                      <div class="text">
                        Nước rửa <br> chén dĩa
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2465/bhx/nuoc-xa-quan-ao-202101191203110053.png">
                      </nuxt-link>
                      <div class="text">
                        Nước xả <br> quần áo
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2510/bhx/nuoc-lau-san-nha-202101191204324314.png">
                      </nuxt-link>
                      <div class="text">
                        Nước lau <br> sàn nhà
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2783/bhx/khan-nuoc-lau-bep-202101191204406935.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn, nước <br> lau bếp
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2512/bhx/dung-dich-lau-kinh-202101191204517935.png">
                      </nuxt-link>
                      <div class="text">
                        Dung dịch <br> lau kính
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2787/bhx/nuoc-tay-da-nang-202101191206430605.png">
                      </nuxt-link>
                      <div class="text">
                        Nước tẩy <br> đa năng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2511/bhx/tay-rua-nha-tam-202101191203206953.png">
                      </nuxt-link>
                      <div class="text">
                        Tẩy rửa <br> nhà tắm
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3346/bhx/nuoc-xit-thom-phong-202101191207037625.png">
                      </nuxt-link>
                      <div class="text">
                        Nước xịt <br> thơm phòng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3345/bhx/sap-thom-tui-thom-202101191226028593.png">
                      </nuxt-link>
                      <div class="text">
                        Sáp thơm, <br> túi thơm
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2530/bhx/binh-diet-con-trung-202101191235123443.png">
                      </nuxt-link>
                      <div class="text">
                        Bình diệt <br> côn trùng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/2493/bhx/nuoc-tay-quan-ao-202101191226151470.png">
                      </nuxt-link>
                      <div class="text">
                        Nước tẩy <br> quần áo
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/6553/bhx/tui-bao-dung-rac-202101191236179944.png">
                      </nuxt-link>
                      <div class="text">
                        Túi, bao <br> đựng rác
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section11" class="mt-2">
                  <div class="drink-cate row">
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3728/bhx/khan-lau-tap-de-202101191303098275.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn lau, <br> tạp dề
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7694/bhx/lot-noi-nhac-noi-202101191303225404.png">
                      </nuxt-link>
                      <div class="text">
                        Lót nồi, <br> nhấc nồi
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7401/bhx/giay-bac-tham-dau-202101191309371727.png">
                      </nuxt-link>
                      <div class="text">
                        Giấy bạc, <br> thấm dầu
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7479/bhx/vi-bep-thung-nuong-202101191310100803.png">
                      </nuxt-link>
                      <div class="text">
                        Vỉ, bếp, <br> thùng nướng
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3732/bhx/mieng-rua-chen-noi-202101191310573520.png">
                      </nuxt-link>
                      <div class="text">
                        Miếng rửa <br> chén, nồi
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7696/bhx/dung-cu-vat-cam-202101191312138038.png">
                      </nuxt-link>
                      <div class="text">
                        Dụng cụ <br> vắt cam
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/4946/bhx/khay-ly-lam-da-202101191312568203.png">
                      </nuxt-link>
                      <div class="text">
                        Khay - <br> ly làm đá
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3727/bhx/khan-tam-bong-tam-202101191315332148.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn tắm, <br> bông tắm
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7942/bhx/moc-dan-tren-tuong-202101191316248411.png">
                      </nuxt-link>
                      <div class="text">
                        Móc dán <br> treo tường
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/7695/bhx/gang-tay-cac-loai-202101191316391060.png">
                      </nuxt-link>
                      <div class="text">
                        Găng tay <br> bằng nylon
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3730/bhx/gang-tay-cac-loai-202101191317201207.png">
                      </nuxt-link>
                      <div class="text">
                        Găng tay <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/4956/bhx/hu-do-dung-tam-202101191318009828.png">
                      </nuxt-link>
                      <div class="text">
                        Hũ, đồ <br> đựng tăm
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/6553/bhx/tui-bao-dung-rac-202101191236179944.png">
                      </nuxt-link>
                      <div class="text">
                        Túi, bao <br> đựng rác
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/5225/bhx/ly-dung-cac-loai-202101191258472721.png">
                      </nuxt-link>
                      <div class="text">
                        Ly đơn, <br> bộ ly
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/56/bhx/pin-tieu-cac-loai-202101191322481794.png">
                      </nuxt-link>
                      <div class="text">
                        Pin tiểu <br> trái cây
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/4352/bhx/do-dung-mot-lan-202101191237241328.png">
                      </nuxt-link>
                      <div class="text">
                        Đồ dùng <br> một lần
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3187/bhx/dao-cat-cac-loai-202101191300010143.png">
                      </nuxt-link>
                      <div class="text">
                        Dao nhôm <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/5227/bhx/muong-nia-cac-loai-202101191259470405.png">
                      </nuxt-link>
                      <div class="text">
                        Muỗng, nĩa <br> các loại
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/4326/bhx/mang-boc-thuc-pham-202101191236267118.png">
                      </nuxt-link>
                      <div class="text">
                        Màng bọc <br> thực phẩm
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/4929/bhx/hop-dung-thuc-pham-202101191236344607.png">
                      </nuxt-link>
                      <div class="text">
                        Hộp đựng <br> thực phẩm
                      </div>
                    </div>
                    <div class="col-4">
                      <nuxt-link to="#">
                        <img src="https://cdn.tgdd.vn/Products/Images/3728/bhx/khan-lau-tap-de-202101191303098275.png">
                      </nuxt-link>
                      <div class="text">
                        Khăn lau, <br> tạp dề
                      </div>
                    </div>
                  </div>
                </div>
              </mdb-col>
            </div>
          </mdb-container>
        </b-sidebar>
        <div class="col-5 input-search">
          <b-form-input placeholder="Bạn tìm gì?"></b-form-input>
          <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'search']"></font-awesome-icon>
        </div>
        <div class="col-2">
          <div class="loca">
            <div class="loca-parentwrapper">
              <div class="loca-wrapper">
                <span>Giao tại</span>
                <div class="current_locate">Phường...</div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-col col-2">
          <nuxt-link to="#">
            Đơn hàng từng mua
          </nuxt-link>
        </div>
        <nuxt-link to="/Cart" class="div-col col-2 mobile_header_cart">
          <font-awesome-icon :icon="['fas', 'shopping-basket']"></font-awesome-icon>
          <span>Giỏ hàng</span>
        </nuxt-link>
      </b-row>
    </div>
  </div>
</template>
<script>
import {
  mdbListGroupItem,
  mdbScrollSpy
} from "mdbvue";

export default {
  components: {
    mdbListGroupItem
  },
  data() {
    return {
      active: 0,
      nested: 0,
      nav: 0,
      scrollSections: [],
      loading: true
    };
  },
  methods: {
    setActive(i) {
      this.active = i;
    }
  },
  mounted() {
    setTimeout(() => {
      this.scrollSections = [
        {
          id: "section1",
          title: "Đồ uống các loại"
        },
        {
          id: "section2",
          title: "Sữa uống các loại"

        },
        {
          id: "section3",
          title: "Bánh kẹo các loại"
        },
        {
          id: "section4",
          title: "Mì, cháo, phở, bún"
        },
        {
          id: "section5",
          title: "Dầu ăn, gia vị"
        },
        {
          id: "section6",
          title: "Gạo, bột, đồ khô"
        },{
          id: "section7",
          title: "Đồ mát, đông lạnh"
        },
        {
          id: "section8",
          title: "Tã, đồ cho bé"
        },
        {
          id: "section9",
          title: "Chăm sóc cá nhân"
        },
        {
          id: "section10",
          title: "Vệ sinh nhà cửa"
        },
        {
          id: "section11",
          title: "Đồ dùng gia đình"
        }
      ]
      this.loading = false;
    }, 1000)
  },
  directives: { mdbScrollSpy }
};
</script>
