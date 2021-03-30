<template>
  <div v-if="$device.isDesktop">
    Content Desktop
  </div>
  <div v-else-if="$device.isTablet">
    Content Tablet
  </div>
  <div v-else class="mobile_content">
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
            <div  @click="showTick('gia-cao-den-thap')">
              <b> Giá cao <br> đến thấp </b>
              <em id="gia-cao-den-thap" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('gia-thap-den-cao')">
              <b> Giá thấp <br> đến cao </b>
              <em id="gia-thap-den-cao" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('khuyen-mai-nhieu-hon')">
              <b> Khuyễn mãi  <br>nhiều hơn </b>
              <em id="khuyen-mai-nhieu-hon" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('san-pham-ban-chay')">
              <b> Sản phẩm <br> bán chạy </b>
              <em id="san-pham-ban-chay" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('san-pham-moi-ve')">
              <b> Sản phẩm  <br> mới về  </b>
              <em id="san-pham-moi-ve" style="display: none"></em>
            </div>
          </b-col>
        </b-row>
        <span></span>
      </b-container>
      <b-container class="bv-example-row ">
        <b-row>
          <h4>Sắp xếp đóng gói : </h4>
        </b-row>
        <b-row class="box-filter">
          <b-col>
            <div  @click="showTick('nuoc-ngot-dang-cay')">
              <b> Nước ngọt <br> dạng cây  </b>
              <em id="nuoc-ngot-dang-cay" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('nuoc-ngot-lon-nho')">
              <b>Nước ngọt <br> lon nhỏ</b>
              <em id="nuoc-ngot-lon-nho" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('nuoc-ngot-chai-lon')">
              <b> Nước ngọt <br> chai lớn </b>
              <em id="nuoc-ngot-chai-lon" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('nuoc-ngot-chai-nho')">
              <b>Nước ngọt <br> chai nhỏ  </b>
              <em id="nuoc-ngot-chai-nho" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('nuoc-ngot-dang-loc')">
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
            <div  @click="showTick('brand-1')">
              <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="100%">
              <em id="brand-1" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('brand-2')">
              <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="100%">
              <em id="brand-2" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('brand-3')">
              <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="100%">
              <em id="brand-3" style="display: none"></em>
            </div>
          </b-col>
          <b-col>
            <div  @click="showTick('brand-4')">
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
    <div class="groupcate">
      <b-container class="bv-example-row">
        <b-row>
          <b-col v-b-toggle.sidebar-filter  style="outline: none;">
            <b-row class="products_id">
              <span>Nước ngọt<br>các loại </span>
            </b-row>
            <b-row class="serch_collab">
              <span >Lọc tìm <br> <font-awesome-icon :icon="['fas', 'search']" ></font-awesome-icon></span>
            </b-row>
          </b-col>
          <b-col cols="8">
            <b-row class="mb-2">
              <b-col order="1">
                <div class="listgroup">
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> trái cây </span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span>Nước ngọt<br> các loại</span>
                  </nuxt-link>
                </div>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col>
                <div class="listgroup">
                  <nuxt-link to="#">
                    <span>
                    <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%">
                    </span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <span> <img src="~/assets/images/brand_products/pepsi-25092020163114.png" width="90%"></span>
                  </nuxt-link>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <div class="scrollfilter fixtop" id="fixtop">
          <div class="more px80" id="btntop-showfilter">
            <i class="bhx-smanu"></i>
            <span>Lọc tìm</span>
          </div>
          <div class="scroll-lst px80 loaded"><div class="it"><a data-id="22187" data-hash="pepsi" title="Pepsi" href="/nuoc-ngot-pepsi"> <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/pepsi-25092020163114.png" alt="Pepsi"> <em></em> </a></div><div class="it" data-value="17779:177136" data-id="17779:177136" data-href="/nuoc-ngot-cay" data-hash="cay" title="Nước ngọt dạng cây"><span><b>Nước ngọt<br>dạng cây</b></span> <em></em></div><div class="it"><a data-id="21583" data-hash="coca-cola" title="Coca Cola" href="/nuoc-ngot-coca-cola"> <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/coca-cola-2309202010534.png" alt="Coca Cola"> <em></em> </a></div><div class="it" data-value="17779:124491" data-id="17779:124491" data-href="/nuoc-ngot-lon" data-hash="lon" title="Nước ngọt lon nhỏ"><span><b>Nước ngọt<br>lon nhỏ</b></span> <em></em></div><div class="it"><a data-id="21662" data-hash="sprite" title="Sprite" href="/nuoc-ngot-sprite"> <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/sprite-24092020111818.png" alt="Sprite"> <em></em> </a></div><div class="it" data-value="17779:124493" data-id="17779:124493" data-href="/nuoc-ngot-chai" data-hash="chai" title="Nước ngọt chai nhỏ"><span><b>Nước ngọt<br>chai nhỏ</b></span> <em></em></div><div class="it"><a data-id="22291" data-hash="fanta" title="Fanta" href="/nuoc-ngot-fanta"> <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/fanta-15032021112040.jpg" alt="Fanta"> <em></em> </a></div><div class="it" data-value="17779:149374" data-id="17779:149374" data-href="/nuoc-ngot-chai-lon" data-hash="chai-lon" title="Nước ngọt chai lớn"><span><b>Nước ngọt<br>chai lớn</b></span> <em></em></div><div class="it"><a data-id="20970" data-hash="7-up" title="7 Up" href="/nuoc-ngot-7-up"> <img width="65" height="40" src="//cdn.tgdd.vn/Brand/11/7-up-2109202095322.png" alt="7 Up"> <em></em> </a></div><div class="it" data-value="17779:124494" data-id="17779:124494" data-href="/nuoc-ngot-loc" data-hash="loc" title="Nước ngọt dạng lốc"><span><b>Nước ngọt<br>dạng lốc</b></span> <em></em></div><div class="it"><p class="viewmore"><i></i> <span>Xem thêm</span></p></div></div>
        </div>
        <b-row style="display: none">
          <b-col v-b-toggle.sidebar-filter  style="outline: none;">

            <b-row class="serch_collab">
              <span >Lọc tìm <br> <font-awesome-icon :icon="['fas', 'search']" ></font-awesome-icon></span>
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
      </b-container>
    </div>
    <span></span>
    <div class="cate cateproduct cateproduct_id">
      <div class="product row">
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-item col-4">
          <div class="product-box">
            <nuxt-link to="#">
              <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
            </nuxt-link>
            <div class="productinfo">
              <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
            </div>
            <div class="box-buy">
              <nuxt-link to="#">
                <div class="row">
                  <div class="price col-7">
                    <span>38.000₫</span>
                  </div>
                  <div class="buy col-5"><span>MUA</span></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="groupfeature">
      <div class="cate cateproduct">
        <div class="product row">
          <div class="product-item col-4">
            <div class="product-box">
              <nuxt-link to="#">
                <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
              </nuxt-link>
              <div class="productinfo">
                <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
              </div>
              <div class="box-buy">
                <nuxt-link to="#">
                  <div class="row">
                    <div class="price col-7">
                      <span>38.000₫</span>
                    </div>
                    <div class="buy col-5"><span>MUA</span></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="product-item col-4">
            <div class="product-box">
              <nuxt-link to="#">
                <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
              </nuxt-link>
              <div class="productinfo">
                <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
              </div>
              <div class="box-buy">
                <nuxt-link to="#">
                  <div class="row">
                    <div class="price col-7">
                      <span>38.000₫</span>
                    </div>
                    <div class="buy col-5"><span>MUA</span></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="product-item col-4">
            <div class="product-box">
              <nuxt-link to="#">
                <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
              </nuxt-link>
              <div class="productinfo">
                <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
              </div>
              <div class="box-buy">
                <nuxt-link to="#">
                  <div class="row">
                    <div class="price col-7">
                      <span>38.000₫</span>
                    </div>
                    <div class="buy col-5"><span>MUA</span></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="product-item col-4">
            <div class="product-box">
              <nuxt-link to="#">
                <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
              </nuxt-link>
              <div class="productinfo">
                <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
              </div>
              <div class="box-buy">
                <nuxt-link to="#">
                  <div class="row">
                    <div class="price col-7">
                      <span>38.000₫</span>
                    </div>
                    <div class="buy col-5"><span>MUA</span></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="product-item col-4">
            <div class="product-box">
              <nuxt-link to="#">
                <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
              </nuxt-link>
              <div class="productinfo">
                <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
              </div>
              <div class="box-buy">
                <nuxt-link to="#">
                  <div class="row">
                    <div class="price col-7">
                      <span>38.000₫</span>
                    </div>
                    <div class="buy col-5"><span>MUA</span></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="product-item col-4">
            <div class="product-box">
              <nuxt-link to="#">
                <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
              </nuxt-link>
              <div class="productinfo">
                <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
              </div>
              <div class="box-buy">
                <nuxt-link to="#">
                  <div class="row">
                    <div class="price col-7">
                      <span>38.000₫</span>
                    </div>
                    <div class="buy col-5"><span>MUA</span></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="product-item col-4">
            <div class="product-box">
              <nuxt-link to="#">
                <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
              </nuxt-link>
              <div class="productinfo">
                <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
              </div>
              <div class="box-buy">
                <nuxt-link to="#">
                  <div class="row">
                    <div class="price col-7">
                      <span>38.000₫</span>
                    </div>
                    <div class="buy col-5"><span>MUA</span></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="product-item col-4">
            <div class="product-box">
              <nuxt-link to="#">
                <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
              </nuxt-link>
              <div class="productinfo">
                <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
              </div>
              <div class="box-buy">
                <nuxt-link to="#">
                  <div class="row">
                    <div class="price col-7">
                      <span>38.000₫</span>
                    </div>
                    <div class="buy col-5"><span>MUA</span></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="product-item col-4">
            <div class="product-box">
              <nuxt-link to="#">
                <img src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png" width="100%">
              </nuxt-link>
              <div class="productinfo">
                <h3 class="product-name">6 lon nước ngọt Mirinda xá xị 330ml</h3>
              </div>
              <div class="box-buy">
                <nuxt-link to="#">
                  <div class="row">
                    <div class="price col-7">
                      <span>38.000₫</span>
                    </div>
                    <div class="buy col-5"><span>MUA</span></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="viewmore">
        <span>Còn 123 sản phẩm  <b>đồ uống các loại</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
      </div>
    </div>
    <div class="contain-boxintro">
      <div class="boxintro " data-video="">

        <div class="contain-article article">
          <article class="article minheight" id="minheight">
            <a href="https://www.bachhoaxanh.com/nuoc-ngot" name="Nước ngọt chính hãng tại Bách Hoá XANH" target="_self" title="Nước ngọt chính hãng tại Bách Hoá XANH">Nước ngọt</a>, <strong>nước ngọt có ga</strong> hay còn&nbsp;được gọi là<strong> nước giải khát có ga</strong> là loại nước thường chứa&nbsp;cacbon điôxít bão hòa, chất làm ngọt, và thường có thêm hương liệu.&nbsp;Một số nước giải khát có ga khác còn chứa caffeine, phẩm màu, chất bảo quản và các thành phần khác được kiểm định an toàn cho sức khỏe. Nước ngọt tại Bách hoá XANH đảm bảo chính hãng, chất lượng, an toàn sức khoẻ.<br>
            <br>
            Hiện có <strong>rất nhiều thương hiệu nước ngọt tại Bách hoá XANH</strong>&nbsp;như <a href="https://www.bachhoaxanh.com/nuoc-ngot-coca-cola" name="CocaCola chính hãng tại Bách Hoá XANH" target="_blank" title="CocaCola chính hãng tại Bách Hoá XANH">Coca Cola</a>, <a href="https://www.bachhoaxanh.com/nuoc-ngot-pepsi" name="Pepsi chính hãng tại Bách Hoá XANH" target="_blank" title="Pepsi chính hãng tại Bách Hoá XANH">Pepsi</a>, <a href="https://www.bachhoaxanh.com/nuoc-ngot-fanta" name="Fanta chính hãng tại Bách Hoá XANH" target="_blank" title="Fanta chính hãng tại Bách Hoá XANH">Fanta</a>, <a href="https://www.bachhoaxanh.com/nuoc-ngot-mirinda" name="Mirinda chính hãng tại Bách Hoá XANH" target="_blank" title="Mirinda chính hãng tại Bách Hoá XANH">Mirinda</a>, <a href="https://www.bachhoaxanh.com/nuoc-ngot-7-up" name="7 up chính hãng tại Bách Hoá XANH" target="_blank" title="7 up chính hãng tại Bách Hoá XANH">7 up</a>,... cùng nhiều thương hiệu khác cũng rất được người dùng ưa chuộng và chọn mua.<br>
            <br>
            Nước ngọt được dùng để <strong>giải khát nhanh hay dùng chung trong các bữa tiệc</strong>. Với lượng ga mạnh cùng khả năng kích thích vị giác, người dùng sẽ <strong>cảm thấy ngon miệng hơn khi ăn uống</strong> cùng bạn bè và gia đình.<br>
            <br>
            Ngoài nước ngọt ra nước giải khát còn có thêm những biến thể khác như <a href="https://www.bachhoaxanh.com/nuoc-ngot-nuoc-tang-luc" name="Nước tăng lực chính hãng Bách Hoá XANH" target="_blank" title="Nước tăng lực chính hãng Bách Hoá XANH">nước tăng lực</a>, <a href="https://www.bachhoaxanh.com/nuoc-ngot-bu-khoang" name="Nước bù khoáng, nước uống trong thể thao" target="_blank" title="Nước bù khoáng, nước uống trong thể thao">nước bù khoáng</a> hay thậm chí là nước uống thảo dược giúp bổ sung dưỡng chất và tăng cường sức khoẻ.
            <div class="ovlarticle"></div>
          </article>
          <div id="viewmore" class="xemthem" @click="viewMore">Xem thêm</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "~/node_modules/axios";
import {VueAgile} from '~/node_modules/vue-agile'
export default {
  components: {
    agile: VueAgile
  },
  data() {
    return {
      products: [],
      data: [],
      total: [],
      total_pages: null,
      error: null,
      limit: 9
    }
  },
  async created() {
    this.totalPages();

  },
  mounted() {
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("#fixtop").style.display = "block";
      } else {
        document.querySelector("#fixtop").style.display = "none";
      }
    };
  },
  methods: {
    async totalPages() {
      const response = await axios.get('http://api.tvtp.vn/v0/products', {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      this.total_pages = response.data.meta.pagination['total_pages'];
      this.total = response.data.meta.pagination['total'];
      var i = 0;
      for (i = 1; i <= this.total_pages; i++) {
        this.getData(i);
      }
    },
    async getData(id) {
      const response = await axios.get('http://api.tvtp.vn/v0/products?page=' + id, {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      this.products = this.products.concat(response.data.data).filter((el, index) => index < this.limit);
    },
    async limitShow() {
      this.limit = this.limit + 9;
      this.products = [];
      this.totalPages();
    },
    viewMore(){
      document.querySelector("#minheight").style.maxHeight = "max-content";
      document.querySelector("#viewmore").style.display = "none";
    },
    showTick(name){
      if(document.getElementById(name).style.display === "none"){
        document.getElementById(name).style.display = "block";
      }else{
        document.getElementById(name).style.display = "none";
      }
    }
  }
}
</script>

