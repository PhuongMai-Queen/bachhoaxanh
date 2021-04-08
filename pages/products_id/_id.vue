<template>
  <div v-if="$device.isDesktop">
    <div class="groupcate_desktop top">
      <div class="groupcate-inline_desktop">
        <div class="sub_desktop">
          <a class="title-cate_desktop active_desktop " href="nuoc-ngot-nuoc-tra-giai-khat">
            <h1>Nước ngọt, nước trà</h1>
          </a>

          <a href="/nuoc-ngot" class="">

            <h2>Nước ngọt các loại</h2>
          </a>
          <a href="/nuoc-tra" class=" ">

            <h2>Nước trà giải khát</h2>
          </a>
        </div>
      </div>
      <a class="more_desktop" data-top="top"></a>
      <!-- ========================================================-->
      <div class="manufacture_desktop top_desktop maincate_desktop" style="" >
        <form class="catesearch_desktop">
          <b-form-input class="searchcate_desktop"  placeholder="Tìm thương hiệu"></b-form-input>
          <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'search']" class="butcatesearch_desktop"></font-awesome-icon>
          <div class="resultsearch_desktop" style="display:none;">
            <ul>
              <li >Pepsi</li>
              <li>Lipton</li>
              <li>Mirinda</li>
              <li>7 Up</li>
              <li>Evervess</li>
              <li>Fuze Tea</li>
              <li>C2</li>
              <li>Cozy</li>
              <li>Dr.Thanh</li>
              <li>Vfresh</li>
              <li>Không Độ</li>
              <li>Coca Cola</li>
              <li>Sprite</li>
              <li>Tea Plus</li>
              <li>Fanta</li>
              <li>Kirin</li>
              <li>ITOEN</li>
              <li>Yeos</li>
              <li>Schweppes</li>
              <li>Boganic</li>
              <li>Pokka</li>
              <li>Chương Dương </li>
              <li>Wonderfarm</li>
              <li>New Choice</li>
              <li>Sun-Hee</li>
            </ul>
          </div>
        </form>
        <ul>
          <li>
            <a  >
              <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/pepsi-25092020163114.png" alt="Pepsi">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Lipton">
              <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/lipton-14032021221921.jpg" alt="Lipton">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Mirinda">
              <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/mirinda-25092020145639.png" alt="Mirinda">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="7 Up">
              <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/7-up-2109202095322.png" alt="7 Up">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a title="Evervess">
              <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/evervess-09032021113517.jpg" alt="Evervess">
              <em></em>
             <i></i>
            </a>
          </li>
        </ul>
        <span class="moremanu_desktop top_desktop">Xem thêm
         <font-awesome-icon v-b-toggle.sidebar-footer :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>

        <ul class="morebrand top" style="display: none;">
          <li>
            <a title="Cozy">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/cozy-14032021215252.jpg" alt="Cozy"
                   src="//cdn.tgdd.vn/Brand/11/cozy-14032021215252.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Dr.Thanh">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/drthanh-050320211354.jpg" alt="Dr.Thanh"
                   src="//cdn.tgdd.vn/Brand/11/drthanh-050320211354.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a title="Vfresh">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/vfresh-1303202114943.jpg" alt="Vfresh"
                   src="//cdn.tgdd.vn/Brand/11/vfresh-1303202114943.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a title="Không Độ">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/khong-do-13032021235513.jpg" alt="Không Độ"
                   src="//cdn.tgdd.vn/Brand/11/khong-do-13032021235513.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a title="Coca Cola">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/coca-cola-2309202010534.png" alt="Coca Cola"
                   src="//cdn.tgdd.vn/Brand/11/coca-cola-2309202010534.png" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Sprite">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/sprite-24092020111818.png" alt="Sprite"
                   src="//cdn.tgdd.vn/Brand/11/sprite-24092020111818.png" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Tea Plus">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/tea-plus-0903202120842.jpg" alt="Tea Plus"
                   src="//cdn.tgdd.vn/Brand/11/tea-plus-0903202120842.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Fanta">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/fanta-15032021112040.jpg" alt="Fanta"
                   src="//cdn.tgdd.vn/Brand/11/fanta-15032021112040.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Kirin">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/kirin-140320210131.jpg" alt="Kirin"
                   src="//cdn.tgdd.vn/Brand/11/kirin-140320210131.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="ITOEN">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/itoen-13032021233129.jpg" alt="ITOEN"
                   src="//cdn.tgdd.vn/Brand/11/itoen-13032021233129.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Yeos">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/yeos-12032021204041.jpg" alt="Yeos"
                   src="//cdn.tgdd.vn/Brand/11/yeos-12032021204041.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Schweppes">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/schweppes-12032021213452.jpg" alt="Schweppes"
                   src="//cdn.tgdd.vn/Brand/11/schweppes-12032021213452.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Boganic">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/boganic-15032021221529.jpg" alt="Boganic"
                   src="//cdn.tgdd.vn/Brand/11/boganic-15032021221529.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Pokka">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/pokka-15032021131751.jpg" alt="Pokka"
                   src="//cdn.tgdd.vn/Brand/11/pokka-15032021131751.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Chương Dương">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/chuong-duong-1403202121425.jpg" alt="Chương Dương"
                   src="//cdn.tgdd.vn/Brand/11/chuong-duong-1403202121425.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Wonderfarm">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/wonderfarm-11032021101827.jpg" alt="Wonderfarm"
                   src="//cdn.tgdd.vn/Brand/11/wonderfarm-11032021101827.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="New Choice">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/new-choice-1203202116186.jpg" alt="New Choice"
                   src="//cdn.tgdd.vn/Brand/11/new-choice-1203202116186.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
          <li>
            <a  title="Sun-Hee">
              <img width="65" height="40" class="lazy initial loaded"
                   data-src="//cdn.tgdd.vn/Brand/11/sun-hee-0603202121845.jpg" alt="Sun-Hee"
                   src="//cdn.tgdd.vn/Brand/11/sun-hee-0603202121845.jpg" data-was-processed="true">
              <em></em>
             <i></i>
            </a>
          </li>
        </ul>
      </div>
      <!--      ===================================================================-->
      <div class="list_groupfeature group_desktop ">
        <div class="groupfeature row">
          <div class="cateproduct col-3" v-for="product in product_bycate" :key="product.id">
              <div class="product">
                <nuxt-link :to="{ name: 'product-id', params: { id: product.id }}">
                  <div class="boximg">
                    <img :src="product.thumbnail" width="100%">
                  </div>
                </nuxt-link>
                  <h3 class="product-name">{{ product.name }}</h3>
                  <div class="price">{{ product.price_formated }}</div>
                  <button type="button" class="buy ">Chọn mua</button>
              </div>
          </div>
        </div>
        <div class="viewmore">
              <span>Xem thêm sản phẩm
                <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
              </span>
        </div>
      </div>
<!--      ====================================================================-->

    </div>
  </div>
  <div v-else class="mobile_content">
    <!--    bộ lọc tìm kiếm -->
    <div class="property">
      <div class="title-cate nolink px80 ">
        <h1><b>Nước ngọt<br>các loại</b></h1>
      </div>
      <div class="scroll-lst px80 loaded">
        <div class="it"  >
          <p><b>Nước ngọt<br>dạng cây</b></p>
          <em></em>
        </div>
        <div class="it">
          <p><b>Nước ngọt<br>lon nhỏ</b></p>
          <em></em>
        </div>
        <div class="it">
          <p><b>Nước ngọt<br>chai nhỏ</b></p>
          <em></em>
        </div>
        <div class="it">
          <p><b>Nước ngọt<br>chai lớn</b></p>
          <em></em>
        </div>
        <div class="it">
          <p><b>Nước ngọt<br>dạng lốc</b></p>
          <em></em>
        </div>
        <div class="it">
          <p><b>Nước ngọt<br>thùng 24</b></p>
          <em></em>
        </div>
        <div class="it sort" data-value="PriceDesc" data-hash="PriceDesc">
          <p><b>Giá cao<br>đến thấp</b></p>
          <em></em>
        </div>
        <div class="it sort" data-value="PriceAcs" data-hash="PriceAcs">
          <p><b>Giá thấp<br>đến cao</b></p>
          <em></em>
        </div>
        <div class="it sort" data-value="OnlyPromotion" data-hash="OnlyPromotion">
          <p><b>Khuyến mãi<br>nhiều hơn</b></p>
          <em></em>
        </div>
        <div class="it sort" data-value="TopSale" data-hash="TopSale">
          <p><b>Sản phẩm<br>bán chạy</b></p>
          <em></em>
        </div>
        <div class="it" ><p class="viewmore"><span>Xem thêm</span></p></div>

      </div>
    </div>
    <div class="manufacture">
      <div class="more_procduct px80" id="btn-showfilter" v-b-toggle.sidebar-filter>
        <i class="bhx-smanu"></i>
        <span>Lọc tìm</span>
      </div>
      <div class="scroll-lst px80 loaded">
        <div class="it">
          <a data-id="22187" data-hash="pepsi" title="Pepsi" href="/nuoc-ngot-pepsi">
            <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/pepsi-25092020163114.png" alt="Pepsi">
            <em></em>
          </a>
        </div>
        <div class="it">
          <a data-id="21583" data-hash="coca-cola" title="Coca Cola" href="/nuoc-ngot-coca-cola">
            <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/coca-cola-2309202010534.png" alt="Coca Cola">

            <em></em>
          </a>
        </div>
        <div class="it">
          <a data-id="21662" data-hash="sprite" title="Sprite" href="/nuoc-ngot-sprite">
            <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/sprite-24092020111818.png" alt="Sprite">

            <em></em>
          </a>
        </div>
        <div class="it">
          <a data-id="22291" data-hash="fanta" title="Fanta" href="/nuoc-ngot-fanta">
            <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/fanta-15032021112040.jpg" alt="Fanta">
            <em></em>
          </a>
        </div>
        <div class="it">
          <a data-id="20970" data-hash="7-up" title="7 Up" href="/nuoc-ngot-7-up">
            <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/7-up-2109202095322.png" alt="7 Up">
            <em></em>
          </a>
        </div>
        <div class="it">
          <a data-id="21730" data-hash="schweppes" title="Schweppes" href="/nuoc-ngot-schweppes">
            <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/schweppes-12032021213452.jpg" alt="Schweppes">

            <em></em>
          </a>
        </div>
        <div class="it">
          <a data-id="22125" data-hash="mirinda" title="Mirinda" href="/nuoc-ngot-mirinda">
            <img width="65" height="40" class="lazy initial loaded"
                 data-src="//cdn.tgdd.vn/Brand/11/mirinda-25092020145639.png" alt="Mirinda"
                 src="//cdn.tgdd.vn/Brand/11/mirinda-25092020145639.png" data-was-processed="true">
            <em></em>
          </a>
        </div>
        <div class="it">
          <a data-id="21561" data-hash="chuong-duong" title="Chương Dương" href="/nuoc-ngot-chuong-duong">
            <img width="65" height="40" class="lazy initial loaded"
                 data-src="//cdn.tgdd.vn/Brand/11/chuong-duong-1403202121425.jpg" alt="Chương Dương"
                 src="//cdn.tgdd.vn/Brand/11/chuong-duong-1403202121425.jpg" data-was-processed="true">
            <em></em>
          </a>
        </div>
        <div class="it"><p class="viewmore"><span>Xem thêm</span></p></div>

      </div>
    </div>
    <div class="groupcate">
      <div class="scrollfilter fixtop" id="fixtop">
        <div class="more_procduct px80">
          <i class="bhx-smanu"></i>
          <span>Lọc tìm</span>
        </div>
        <div class="scroll-lst px80 loaded">
          <div class="it"><a data-id="22187" data-hash="pepsi" title="Pepsi" href="/nuoc-ngot-pepsi"> <img width="65"
                                                                                                           height="40"
                                                                                                           src="//cdn.tgdd.vn/Brand/11/pepsi-25092020163114.png"
                                                                                                           alt="Pepsi">
            <em></em> </a></div>
          <div class="it" data-value="17779:177136" data-id="17779:177136" data-href="/nuoc-ngot-cay" data-hash="cay"
               title="Nước ngọt dạng cây"><span><b>Nước ngọt<br>dạng cây</b></span> <em></em></div>
          <div class="it"><a data-id="21583" data-hash="coca-cola" title="Coca Cola" href="/nuoc-ngot-coca-cola"> <img
            width="65" height="40" src="//cdn.tgdd.vn/Brand/11/coca-cola-2309202010534.png" alt="Coca Cola"> <em></em>
          </a></div>
          <div class="it" data-value="17779:124491" data-id="17779:124491" data-href="/nuoc-ngot-lon" data-hash="lon"
               title="Nước ngọt lon nhỏ"><span><b>Nước ngọt<br>lon nhỏ</b></span> <em></em></div>
          <div class="it"><a data-id="21662" data-hash="sprite" title="Sprite" href="/nuoc-ngot-sprite"> <img width="65"
                                                                                                              height="40"
                                                                                                              src="//cdn.tgdd.vn/Brand/11/sprite-24092020111818.png"
                                                                                                              alt="Sprite">
            <em></em> </a></div>
          <div class="it" data-value="17779:124493" data-id="17779:124493" data-href="/nuoc-ngot-chai" data-hash="chai"
               title="Nước ngọt chai nhỏ"><span><b>Nước ngọt<br>chai nhỏ</b></span> <em></em></div>
          <div class="it"><a data-id="22291" data-hash="fanta" title="Fanta" href="/nuoc-ngot-fanta"> <img width="65"
                                                                                                           height="40"
                                                                                                           src="//cdn.tgdd.vn/Brand/11/fanta-15032021112040.jpg"
                                                                                                           alt="Fanta">
            <em></em> </a></div>
          <div class="it" data-value="17779:149374" data-id="17779:149374" data-href="/nuoc-ngot-chai-lon"
               data-hash="chai-lon" title="Nước ngọt chai lớn"><span><b>Nước ngọt<br>chai lớn</b></span> <em></em></div>
          <div class="it"><a data-id="20970" data-hash="7-up" title="7 Up" href="/nuoc-ngot-7-up"> <img width="65"
                                                                                                        height="40"
                                                                                                        src="//cdn.tgdd.vn/Brand/11/7-up-2109202095322.png"
                                                                                                        alt="7 Up">
            <em></em> </a></div>
          <div class="it" data-value="17779:124494" data-id="17779:124494" data-href="/nuoc-ngot-loc" data-hash="loc"
               title="Nước ngọt dạng lốc"><span><b>Nước ngọt<br>dạng lốc</b></span> <em></em></div>
          <div class="it"><p class="viewmore_procduct"><i></i> <span>Xem thêm</span></p></div>
        </div>
      </div>
      <b-row style="display: none">
        <b-col v-b-toggle.sidebar-filter style="outline: none;">

          <b-row class="serch_collab">
            <span>Lọc tìm <br> <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon></span>
          </b-row>
        </b-col>
        <b-col cols="8">
          <b-row class="mb-2">
            <b-col>
              <div class="listgroup">
                <nuxt-link to="#">
                    <span>
                    <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%">
                    </span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
                <nuxt-link to="#">
                  <span> <img src="assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                </nuxt-link>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <!--        ====end ============-->
    <b-sidebar id="sidebar-filter">
      <template #footer="{ hide }">
        <div class="d-flex align-items-right px-3 py-2">
          <b-button align-items-right size="sm" @click="hide">
            <img src="~/assets/images/general/delete.png" width="30%">
            Đóng
          </b-button>
        </div>
      </template>
      <b-container class="bv-example-row ">
        <b-row>
          <h4>Sắp xếp theo giá: </h4>
        </b-row>
        <b-row class="box-filter">
          <b-col>
            <div @click="showTick('gia-cao-den-thap')">
              <b> Giá cao <br> đến thấp </b>
              <em id="gia-cao-den-thap" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('gia-thap-den-cao')">
              <b> Giá thấp <br> đến cao </b>
              <em id="gia-thap-den-cao" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('khuyen-mai-nhieu-hon')">
              <b> Khuyễn mãi <br>nhiều hơn </b>
              <em id="khuyen-mai-nhieu-hon" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('san-pham-ban-chay')">
              <b> Sản phẩm <br> bán chạy </b>
              <em id="san-pham-ban-chay" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('san-pham-moi-ve')">
              <b> Sản phẩm <br> mới về </b>
              <em id="san-pham-moi-ve" style="display: none"></em>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="bv-example-row ">
        <b-row>
          <h4>Sắp xếp đóng gói : </h4>
        </b-row>
        <b-row class="box-filter">
          <b-col>
            <div @click="showTick('nuoc-ngot-dang-cay')">
              <b> Nước ngọt <br> dạng cây </b>
              <em id="nuoc-ngot-dang-cay" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('nuoc-ngot-lon-nho')">
              <b>Nước ngọt <br> lon nhỏ</b>
              <em id="nuoc-ngot-lon-nho" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('nuoc-ngot-chai-lon')">
              <b> Nước ngọt <br> chai lớn </b>
              <em id="nuoc-ngot-chai-lon" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('nuoc-ngot-chai-nho')">
              <b>Nước ngọt <br> chai nhỏ </b>
              <em id="nuoc-ngot-chai-nho" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('nuoc-ngot-dang-loc')">
              <b>Nước ngọt <br> dạng lốc</b>
              <em id="nuoc-ngot-dang-loc" style="display: none"></em>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="bv-example-row ">
        <b-row>
          <h4>Lọc theo thương hiệu : </h4>
        </b-row>
        <b-row class="box-filter">
          <b-col>
            <div @click="showTick('brand-1')">
              <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="100%">
              <em id="brand-1" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('brand-2')">
              <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="100%">
              <em id="brand-2" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('brand-3')">
              <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="100%">
              <em id="brand-3" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div @click="showTick('brand-4')">
              <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="100%">
              <em id="brand-4" style="display: none"></em>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="footer-filter">
        <b-button>Chọn lại</b-button>
        <b-button class="filter-apcept">Áp dụng</b-button>
      </div>
    </b-sidebar>
    <div class="cate cateproduct cateproduct_id">
      <div class="product row">
        <div class="product-item col-4" v-for="product in product_bycate" :key="product.id">
          <div class="product-box">
            <nuxt-link :to="{ name: 'product-id', params: { id: product.id }}">
              <img
                :src="product.thumbnail"
                width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">{{ product.name }}</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>{{ product.price_formated }}</span>
                  </div>
                  <button type="button" class="buy ">Mua</button>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contain-boxintro">
      <div class="boxintro " data-video="">
        <div class="contain-article article">
          <article class="article minheight" id="minheight">
            <a href="https://www.bachhoaxanh.com/nuoc-ngot" name="Nước ngọt chính hãng tại Bách Hoá XANH" target="_self"
               title="Nước ngọt chính hãng tại Bách Hoá XANH">Nước ngọt</a>, <strong>nước ngọt có ga</strong> hay còn&nbsp;được
            gọi là<strong> nước giải khát có ga</strong> là loại nước thường chứa&nbsp;cacbon điôxít bão hòa, chất làm
            ngọt, và thường có thêm hương liệu.&nbsp;Một số nước giải khát có ga khác còn chứa caffeine, phẩm màu, chất
            bảo quản và các thành phần khác được kiểm định an toàn cho sức khỏe. Nước ngọt tại Bách hoá XANH đảm bảo
            chính hãng, chất lượng, an toàn sức khoẻ.<br>
            <br>
            Hiện có <strong>rất nhiều thương hiệu nước ngọt tại Bách hoá XANH</strong>&nbsp;như <a
            href="https://www.bachhoaxanh.com/nuoc-ngot-coca-cola" name="CocaCola chính hãng tại Bách Hoá XANH"
            target="_blank" title="CocaCola chính hãng tại Bách Hoá XANH">Coca Cola</a>, <a
            href="https://www.bachhoaxanh.com/nuoc-ngot-pepsi" name="Pepsi chính hãng tại Bách Hoá XANH" target="_blank"
            title="Pepsi chính hãng tại Bách Hoá XANH">Pepsi</a>, <a href="https://www.bachhoaxanh.com/nuoc-ngot-fanta"
                                                                     name="Fanta chính hãng tại Bách Hoá XANH"
                                                                     target="_blank"
                                                                     title="Fanta chính hãng tại Bách Hoá XANH">Fanta</a>,
            <a href="https://www.bachhoaxanh.com/nuoc-ngot-mirinda" name="Mirinda chính hãng tại Bách Hoá XANH"
               target="_blank" title="Mirinda chính hãng tại Bách Hoá XANH">Mirinda</a>, <a
            href="https://www.bachhoaxanh.com/nuoc-ngot-7-up" name="7 up chính hãng tại Bách Hoá XANH" target="_blank"
            title="7 up chính hãng tại Bách Hoá XANH">7 up</a>,... cùng nhiều thương hiệu khác cũng rất được người dùng
            ưa chuộng và chọn mua.<br>
            <br>
            Nước ngọt được dùng để <strong>giải khát nhanh hay dùng chung trong các bữa tiệc</strong>. Với lượng ga mạnh
            cùng khả năng kích thích vị giác, người dùng sẽ <strong>cảm thấy ngon miệng hơn khi ăn uống</strong> cùng
            bạn bè và gia đình.<br>
            <br>
            Ngoài nước ngọt ra nước giải khát còn có thêm những biến thể khác như <a
            href="https://www.bachhoaxanh.com/nuoc-ngot-nuoc-tang-luc" name="Nước tăng lực chính hãng Bách Hoá XANH"
            target="_blank" title="Nước tăng lực chính hãng Bách Hoá XANH">nước tăng lực</a>, <a
            href="https://www.bachhoaxanh.com/nuoc-ngot-bu-khoang" name="Nước bù khoáng, nước uống trong thể thao"
            target="_blank" title="Nước bù khoáng, nước uống trong thể thao">nước bù khoáng</a> hay thậm chí là nước
            uống thảo dược giúp bổ sung dưỡng chất và tăng cường sức khoẻ.
            <div class="ovlarticle"></div>
          </article>
          <div id="viewmore" class="xemthem" @click="viewmore_procduct">Xem thêm</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "~/node_modules/axios";
import cart from '~/assets/js/cart.js'
export default {
  data() {
    product_bycate: []
  },
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://api-idp.kpis.vn/v1/client/products?limit=24&store_id=&name=&category_ids=${params.id}`, {
      headers: {
        Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
      }
    })
    return {
      product_bycate: data.data
    }
  }
}
</script>
<!--===========================================the end ============================================-->

