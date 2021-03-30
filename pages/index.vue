<template>
  <div v-if="$device.isDesktop">
    Content Desktop
  </div>
  <div v-else-if="$device.isTablet">
    Content Tablet
  </div>
  <div v-else class="mobile_content">
    <section>
      <div>
        <mdb-navbar :toggler="false" color="grey" class="lighten-4">
          <mdb-navbar-nav
            vertical
            v-mdb-scroll-spy="{
              container: 'nested',
              callback: 'setActiveLink'
            }" class="nav-pills">
            <mdb-nav-item href="#item-1" :active="nested === 1">Thịt, cá, <br> trứng, rau</mdb-nav-item>
            <mdb-nav-item href="#item-2" :active="nested === 2">Sữa uống<br> các loại</mdb-nav-item>
            <mdb-nav-item href="#item-3" :active="nested === 3">Đồ uống<br> các loại</mdb-nav-item>
            <mdb-nav-item href="#item-4" :active="nested === 4">Mì, cháo,<br> phở, bún</mdb-nav-item>
            <mdb-nav-item href="#item-5" :active="nested === 5">Dầu ăn,<br> gia vị</mdb-nav-item>
            <mdb-nav-item href="#item-6" :active="nested === 6">Chăm sóc<br> cá nhân</mdb-nav-item>
            <mdb-nav-item href="#item-7" :active="nested === 7">Gạo, bột,<br> đồ khô</mdb-nav-item>
            <mdb-nav-item href="#item-8" :active="nested === 8">Đồ mát,<br> đông lạnh</mdb-nav-item>
            <mdb-nav-item href="#item-9" :active="nested === 9">Vệ sinh<br> nhà cửa</mdb-nav-item>
            <mdb-nav-item href="#item-10" :active="nested === 10">Vệ sinh<br> nhà cửa</mdb-nav-item>
            <mdb-nav-item href="#item-11" :active="nested === 11">Đồ dùng<br> gia đình</mdb-nav-item>
            <mdb-nav-item href="#item-12" :active="nested === 12">Xả kho<br> giá sốc</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar>
      </div>
      <div>
        <div
          class="z-depth-2"
          style="max-height: 736px; overflow-y: scroll;"
          id="nested"
        >
          <div id="item-1">
            <div class="groupfeature groupfeaturefresh">
              <div class="banner five-billion">
                <img src="~/assets/images/banner/freshBanner.v202103021255.png" width="90%">
              </div>
              <div class="cate-list">
                <div class="cate-item">
                  <span>
                    Rau củ,<br>  rau nêm
                  </span>
                </div>
                <div class="cate-item">
                  <span>
                    Trái cây<br>  tươi ngon
                  </span>
                </div>
                <div class="cate-item">
                  <span>
                    Đồ sơ<br>  chế sẵn
                  </span>
                </div>
                <div class="cate-item">
                  <span>
                    Thực phẩm<br>  đông lạnh
                  </span>
                </div>
              </div>
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7578/234004/bhx/nho-den-nhap-khau-hop-500g-202103170006116633_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Nho đen tươi nhập khẩu túi 500g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>93.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button" class="" @click="addToCart(item.id, item.price)">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7578/234004/bhx/nho-den-nhap-khau-hop-500g-202103170006116633_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Nho đen tươi nhập khẩu túi 500g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>93.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7578/234004/bhx/nho-den-nhap-khau-hop-500g-202103170006116633_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Nho đen tươi nhập khẩu túi 500g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>93.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7578/234004/bhx/nho-den-nhap-khau-hop-500g-202103170006116633_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Nho đen tươi nhập khẩu túi 500g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>93.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7578/234004/bhx/nho-den-nhap-khau-hop-500g-202103170006116633_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Nho đen tươi nhập khẩu túi 500g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>93.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7578/234004/bhx/nho-den-nhap-khau-hop-500g-202103170006116633_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Nho đen tươi nhập khẩu túi 500g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>93.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7578/234004/bhx/nho-den-nhap-khau-hop-500g-202103170006116633_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Nho đen tươi nhập khẩu túi 500g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>93.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7578/234004/bhx/nho-den-nhap-khau-hop-500g-202103170006116633_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Nho đen tươi nhập khẩu túi 500g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>93.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7578/234004/bhx/nho-den-nhap-khau-hop-500g-202103170006116633_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Nho đen tươi nhập khẩu túi 500g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>93.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
                <span>Xem thêm 99 sản phẩm <b>thịt, cá, trứng, rau</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-2">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4" v-for="item in products" :key="item.id">
                    <div class="product-box">
                      <nuxt-link :to="{ name: 'product-id', params: { id: item.id }}">
                        <img :src="item.thumbnail" width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">{{ item.name }}</h3>
                      </div>
                      <div class="box-buy">
                        <a @click="addToCart(item.id, item.price)">
                          <div class="row">
                            <div class="price col-7">
                              <span>{{ item.price_formatted }}</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button" class="" >
                                MUA
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="limit > 9" class="cate-item-bottom">
                <div class="cate-list">
                  <div class="cate-item">
            <span>
              Socola <br> lúa mạch
            </span>
                  </div>
                  <div class="cate-item">
            <span>
              Sữa chua <br>ăn
            </span>
                  </div>
                  <div class="cate-item">
            <span>
              Sữa chua<br>uống
            </span>
                  </div>
                  <div class="cate-item">
            <span>
              Sữa<br>bắp
            </span>
                  </div>
                  <div class="cate-item">
            <span>
              Sữa <br> trái cây
            </span>
                  </div>
                  <div class="cate-item">
            <span>
              Sữa <br>túi
            </span>
                  </div>
                  <div class="cate-item">
            <span>
              Sữa <br> chai
            </span>
                  </div>
                </div>
              </div>
              <div v-if="total-limit > 0">
                <div class="viewmore" @click="limitShow()">
        <span>Xem thêm {{ total - limit }} sản phẩm  <b>sữa uống các loại</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
                </div>
              </div>
            </div>
          </div>
          <div id="item-3">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png"
                          width="100%">
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
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png"
                          width="100%">
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
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png"
                          width="100%">
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
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png"
                          width="100%">
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
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png"
                          width="100%">
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
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png"
                          width="100%">
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
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png"
                          width="100%">
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
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png"
                          width="100%">
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
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/feature/6-lon-nuoc-ngot-mirinda-huong-xa-xi-330ml-202102072040594539.png"
                          width="100%">
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
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 207 sản phẩm  <b>đồ uống các loại</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-4">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2565/184778/bhx/feature/mi-yumyum-vi-tom-yum-kung-nuoc-trong-goi-67g-202103181100294164.png"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Mì YumYum vị Tom Yum Kung gói 67g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>6.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2565/184778/bhx/feature/mi-yumyum-vi-tom-yum-kung-nuoc-trong-goi-67g-202103181100294164.png"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Mì YumYum vị Tom Yum Kung gói 67g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>6.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2565/184778/bhx/feature/mi-yumyum-vi-tom-yum-kung-nuoc-trong-goi-67g-202103181100294164.png"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Mì YumYum vị Tom Yum Kung gói 67g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>6.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2565/184778/bhx/feature/mi-yumyum-vi-tom-yum-kung-nuoc-trong-goi-67g-202103181100294164.png"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Mì YumYum vị Tom Yum Kung gói 67g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>6.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2565/184778/bhx/feature/mi-yumyum-vi-tom-yum-kung-nuoc-trong-goi-67g-202103181100294164.png"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Mì YumYum vị Tom Yum Kung gói 67g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>6.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2565/184778/bhx/feature/mi-yumyum-vi-tom-yum-kung-nuoc-trong-goi-67g-202103181100294164.png"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Mì YumYum vị Tom Yum Kung gói 67g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>6.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2565/184778/bhx/feature/mi-yumyum-vi-tom-yum-kung-nuoc-trong-goi-67g-202103181100294164.png"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Mì YumYum vị Tom Yum Kung gói 67g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>6.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2565/184778/bhx/feature/mi-yumyum-vi-tom-yum-kung-nuoc-trong-goi-67g-202103181100294164.png"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Mì YumYum vị Tom Yum Kung gói 67g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>6.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2565/184778/bhx/feature/mi-yumyum-vi-tom-yum-kung-nuoc-trong-goi-67g-202103181100294164.png"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Mì YumYum vị Tom Yum Kung gói 67g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>6.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 18 sản phẩm  <b>mì, cháo, phở, bún</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-5">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3405/228641/bhx/dau-hao-kum-chun-lee-kum-kee-chai-255g-202103030749227644_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Dầu hào Lee Kum Kee chai 255g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>15.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3405/228641/bhx/dau-hao-kum-chun-lee-kum-kee-chai-255g-202103030749227644_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Dầu hào Lee Kum Kee chai 255g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>15.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3405/228641/bhx/dau-hao-kum-chun-lee-kum-kee-chai-255g-202103030749227644_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Dầu hào Lee Kum Kee chai 255g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>15.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3405/228641/bhx/dau-hao-kum-chun-lee-kum-kee-chai-255g-202103030749227644_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Dầu hào Lee Kum Kee chai 255g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>15.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3405/228641/bhx/dau-hao-kum-chun-lee-kum-kee-chai-255g-202103030749227644_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Dầu hào Lee Kum Kee chai 255g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>15.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3405/228641/bhx/dau-hao-kum-chun-lee-kum-kee-chai-255g-202103030749227644_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Dầu hào Lee Kum Kee chai 255g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>15.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3405/228641/bhx/dau-hao-kum-chun-lee-kum-kee-chai-255g-202103030749227644_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Dầu hào Lee Kum Kee chai 255g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>15.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3405/228641/bhx/dau-hao-kum-chun-lee-kum-kee-chai-255g-202103030749227644_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Dầu hào Lee Kum Kee chai 255g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>15.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3405/228641/bhx/dau-hao-kum-chun-lee-kum-kee-chai-255g-202103030749227644_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Dầu hào Lee Kum Kee chai 255g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>15.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 18 sản phẩm  <b>dầu ăn, gia vị</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-6">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2444/194743/bhx/sua-tam-duong-am-sang-da-hazeline-yen-mach-dau-tam-896ml-202103012258167412_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Sữa tắm sáng da Hazeline chai 896ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>101.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2444/194743/bhx/sua-tam-duong-am-sang-da-hazeline-yen-mach-dau-tam-896ml-202103012258167412_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Sữa tắm sáng da Hazeline chai 896ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>101.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2444/194743/bhx/sua-tam-duong-am-sang-da-hazeline-yen-mach-dau-tam-896ml-202103012258167412_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Sữa tắm sáng da Hazeline chai 896ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>101.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2444/194743/bhx/sua-tam-duong-am-sang-da-hazeline-yen-mach-dau-tam-896ml-202103012258167412_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Sữa tắm sáng da Hazeline chai 896ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>101.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2444/194743/bhx/sua-tam-duong-am-sang-da-hazeline-yen-mach-dau-tam-896ml-202103012258167412_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Sữa tắm sáng da Hazeline chai 896ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>101.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2444/194743/bhx/sua-tam-duong-am-sang-da-hazeline-yen-mach-dau-tam-896ml-202103012258167412_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Sữa tắm sáng da Hazeline chai 896ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>101.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2444/194743/bhx/sua-tam-duong-am-sang-da-hazeline-yen-mach-dau-tam-896ml-202103012258167412_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Sữa tắm sáng da Hazeline chai 896ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>101.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2444/194743/bhx/sua-tam-duong-am-sang-da-hazeline-yen-mach-dau-tam-896ml-202103012258167412_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Sữa tắm sáng da Hazeline chai 896ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>101.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2444/194743/bhx/sua-tam-duong-am-sang-da-hazeline-yen-mach-dau-tam-896ml-202103012258167412_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Sữa tắm sáng da Hazeline chai 896ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>101.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 306 sản phẩm   <b>chăm sóc cá nhân</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-7">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2513/159559/bhx/gao-thom-vua-gao-lang-ta-tui-2kg-202103040808562277_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Gạo thơm dẻo Vua Gạo Làng Ta 2kg</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>39.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2513/159559/bhx/gao-thom-vua-gao-lang-ta-tui-2kg-202103040808562277_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Gạo thơm dẻo Vua Gạo Làng Ta 2kg</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>39.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2513/159559/bhx/gao-thom-vua-gao-lang-ta-tui-2kg-202103040808562277_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Gạo thơm dẻo Vua Gạo Làng Ta 2kg</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>39.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2513/159559/bhx/gao-thom-vua-gao-lang-ta-tui-2kg-202103040808562277_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Gạo thơm dẻo Vua Gạo Làng Ta 2kg</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>39.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2513/159559/bhx/gao-thom-vua-gao-lang-ta-tui-2kg-202103040808562277_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Gạo thơm dẻo Vua Gạo Làng Ta 2kg</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>39.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2513/159559/bhx/gao-thom-vua-gao-lang-ta-tui-2kg-202103040808562277_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Gạo thơm dẻo Vua Gạo Làng Ta 2kg</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>39.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2513/159559/bhx/gao-thom-vua-gao-lang-ta-tui-2kg-202103040808562277_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Gạo thơm dẻo Vua Gạo Làng Ta 2kg</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>39.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2513/159559/bhx/gao-thom-vua-gao-lang-ta-tui-2kg-202103040808562277_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Gạo thơm dẻo Vua Gạo Làng Ta 2kg</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>39.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2513/159559/bhx/gao-thom-vua-gao-lang-ta-tui-2kg-202103040808562277_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Gạo thơm dẻo Vua Gạo Làng Ta 2kg</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>39.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 54 sản phẩm <b>gạo, bột, đồ khô</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-8">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7558/198074/bhx/loc-4-hop-sua-chua-vinamilk-it-duong-100g-202103020020082219_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Lốc 4 hộp sữa chua ít đường 100g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7558/198074/bhx/loc-4-hop-sua-chua-vinamilk-it-duong-100g-202103020020082219_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Lốc 4 hộp sữa chua ít đường 100g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7558/198074/bhx/loc-4-hop-sua-chua-vinamilk-it-duong-100g-202103020020082219_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Lốc 4 hộp sữa chua ít đường 100g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7558/198074/bhx/loc-4-hop-sua-chua-vinamilk-it-duong-100g-202103020020082219_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Lốc 4 hộp sữa chua ít đường 100g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7558/198074/bhx/loc-4-hop-sua-chua-vinamilk-it-duong-100g-202103020020082219_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Lốc 4 hộp sữa chua ít đường 100g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7558/198074/bhx/loc-4-hop-sua-chua-vinamilk-it-duong-100g-202103020020082219_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Lốc 4 hộp sữa chua ít đường 100g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7558/198074/bhx/loc-4-hop-sua-chua-vinamilk-it-duong-100g-202103020020082219_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Lốc 4 hộp sữa chua ít đường 100g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7558/198074/bhx/loc-4-hop-sua-chua-vinamilk-it-duong-100g-202103020020082219_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Lốc 4 hộp sữa chua ít đường 100g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/7558/198074/bhx/loc-4-hop-sua-chua-vinamilk-it-duong-100g-202103020020082219_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Lốc 4 hộp sữa chua ít đường 100g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 18 sản phẩm <b>đồ mát, đông lạnh</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-9">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3357/212664/bhx/banh-quy-bo-truyen-thong-andersens-danish-hop-100g-202103011514087125_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh quy bơ Danish 10 gói x 10g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>14.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3357/212664/bhx/banh-quy-bo-truyen-thong-andersens-danish-hop-100g-202103011514087125_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh quy bơ Danish 10 gói x 10g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>14.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3357/212664/bhx/banh-quy-bo-truyen-thong-andersens-danish-hop-100g-202103011514087125_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh quy bơ Danish 10 gói x 10g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>14.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3357/212664/bhx/banh-quy-bo-truyen-thong-andersens-danish-hop-100g-202103011514087125_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh quy bơ Danish 10 gói x 10g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>14.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3357/212664/bhx/banh-quy-bo-truyen-thong-andersens-danish-hop-100g-202103011514087125_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh quy bơ Danish 10 gói x 10g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>14.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3357/212664/bhx/banh-quy-bo-truyen-thong-andersens-danish-hop-100g-202103011514087125_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh quy bơ Danish 10 gói x 10g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>14.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3357/212664/bhx/banh-quy-bo-truyen-thong-andersens-danish-hop-100g-202103011514087125_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh quy bơ Danish 10 gói x 10g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>14.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3357/212664/bhx/banh-quy-bo-truyen-thong-andersens-danish-hop-100g-202103011514087125_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh quy bơ Danish 10 gói x 10g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>14.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3357/212664/bhx/banh-quy-bo-truyen-thong-andersens-danish-hop-100g-202103011514087125_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh quy bơ Danish 10 gói x 10g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>14.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 117 sản phẩm <b>bánh kẹo các loại</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-10">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2530/88282/bhx/binh-xit-muoi-raid-huong-cam-chanh-600ml-202103031359427512_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bình xịt muỗi Raid cam chanh 600ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>58.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2530/88282/bhx/binh-xit-muoi-raid-huong-cam-chanh-600ml-202103031359427512_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bình xịt muỗi Raid cam chanh 600ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>58.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2530/88282/bhx/binh-xit-muoi-raid-huong-cam-chanh-600ml-202103031359427512_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bình xịt muỗi Raid cam chanh 600ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>58.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2530/88282/bhx/binh-xit-muoi-raid-huong-cam-chanh-600ml-202103031359427512_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bình xịt muỗi Raid cam chanh 600ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>58.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2530/88282/bhx/binh-xit-muoi-raid-huong-cam-chanh-600ml-202103031359427512_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bình xịt muỗi Raid cam chanh 600ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>58.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2530/88282/bhx/binh-xit-muoi-raid-huong-cam-chanh-600ml-202103031359427512_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bình xịt muỗi Raid cam chanh 600ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>58.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2530/88282/bhx/binh-xit-muoi-raid-huong-cam-chanh-600ml-202103031359427512_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bình xịt muỗi Raid cam chanh 600ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>58.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2530/88282/bhx/binh-xit-muoi-raid-huong-cam-chanh-600ml-202103031359427512_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bình xịt muỗi Raid cam chanh 600ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>58.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/2530/88282/bhx/binh-xit-muoi-raid-huong-cam-chanh-600ml-202103031359427512_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bình xịt muỗi Raid cam chanh 600ml</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>58.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 162 sản phẩm <b>vệ sinh nhà cửa</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-11">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/4326/227749/bhx/tui-dung-thuc-pham-tu-huy-sinh-hoc-bach-hoa-xanh-25-x-35-cm-120-tui-202010201606514964_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">120 túi tự Bách hoá XANH 25x35cm</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/4326/227749/bhx/tui-dung-thuc-pham-tu-huy-sinh-hoc-bach-hoa-xanh-25-x-35-cm-120-tui-202010201606514964_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">120 túi tự Bách hoá XANH 25x35cm</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/4326/227749/bhx/tui-dung-thuc-pham-tu-huy-sinh-hoc-bach-hoa-xanh-25-x-35-cm-120-tui-202010201606514964_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">120 túi tự Bách hoá XANH 25x35cm</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/4326/227749/bhx/tui-dung-thuc-pham-tu-huy-sinh-hoc-bach-hoa-xanh-25-x-35-cm-120-tui-202010201606514964_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">120 túi tự Bách hoá XANH 25x35cm</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/4326/227749/bhx/tui-dung-thuc-pham-tu-huy-sinh-hoc-bach-hoa-xanh-25-x-35-cm-120-tui-202010201606514964_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">120 túi tự Bách hoá XANH 25x35cm</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/4326/227749/bhx/tui-dung-thuc-pham-tu-huy-sinh-hoc-bach-hoa-xanh-25-x-35-cm-120-tui-202010201606514964_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">120 túi tự Bách hoá XANH 25x35cm</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/4326/227749/bhx/tui-dung-thuc-pham-tu-huy-sinh-hoc-bach-hoa-xanh-25-x-35-cm-120-tui-202010201606514964_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">120 túi tự Bách hoá XANH 25x35cm</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/4326/227749/bhx/tui-dung-thuc-pham-tu-huy-sinh-hoc-bach-hoa-xanh-25-x-35-cm-120-tui-202010201606514964_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">120 túi tự Bách hoá XANH 25x35cm</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/4326/227749/bhx/tui-dung-thuc-pham-tu-huy-sinh-hoc-bach-hoa-xanh-25-x-35-cm-120-tui-202010201606514964_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">120 túi tự Bách hoá XANH 25x35cm</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>22.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 9 sản phẩm <b>đồ dùng gia đình</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div id="item-12">
            <div class="groupfeature">
              <div class="cate cateproduct">
                <div class="product row">
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3445/224725/bhx/banh-que-dui-ga-vi-nuoc-mam-dorkbua-goi-18g-202007151401475055_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh que vị nước mắm Dorkbua 18g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>4.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3445/224725/bhx/banh-que-dui-ga-vi-nuoc-mam-dorkbua-goi-18g-202007151401475055_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh que vị nước mắm Dorkbua 18g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>4.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3445/224725/bhx/banh-que-dui-ga-vi-nuoc-mam-dorkbua-goi-18g-202007151401475055_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh que vị nước mắm Dorkbua 18g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>4.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3445/224725/bhx/banh-que-dui-ga-vi-nuoc-mam-dorkbua-goi-18g-202007151401475055_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh que vị nước mắm Dorkbua 18g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>4.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3445/224725/bhx/banh-que-dui-ga-vi-nuoc-mam-dorkbua-goi-18g-202007151401475055_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh que vị nước mắm Dorkbua 18g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>4.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3445/224725/bhx/banh-que-dui-ga-vi-nuoc-mam-dorkbua-goi-18g-202007151401475055_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh que vị nước mắm Dorkbua 18g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>4.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3445/224725/bhx/banh-que-dui-ga-vi-nuoc-mam-dorkbua-goi-18g-202007151401475055_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh que vị nước mắm Dorkbua 18g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>4.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3445/224725/bhx/banh-que-dui-ga-vi-nuoc-mam-dorkbua-goi-18g-202007151401475055_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh que vị nước mắm Dorkbua 18g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>4.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="product-item col-4">
                    <div class="product-box">
                      <nuxt-link to="#">
                        <img
                          src="https://cdn.tgdd.vn/Products/Images/3445/224725/bhx/banh-que-dui-ga-vi-nuoc-mam-dorkbua-goi-18g-202007151401475055_300x300.jpg"
                          width="100%">
                      </nuxt-link>
                      <div class="productinfo">
                        <h3 class="product-name">Bánh que vị nước mắm Dorkbua 18g</h3>
                      </div>
                      <div class="box-buy">
                        <nuxt-link to="#">
                          <div class="row">
                            <div class="price col-7">
                              <span>4.000₫</span>
                            </div>
                            <div class="buy col-5">
                              <button type="button">
                                MUA
                              </button>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="viewmore">
        <span>Xem thêm 118 sản phẩm <b>xả kho giá sốc</b>
          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
        </span>
              </div>
            </div>
          </div>
          <div class="mobile_content_banner">
            <agile :autoplay="true" :navButtons="false" :dots="true">
              <div>
                <img src="~/assets/images/banner/hoa-don-50k-duoc-mua-gia-soc-17032021112419.jpg" width="100%">
              </div>
              <div>
                <img src="~/assets/images/banner/tra-dam-da-giam-den-40-15032021144328.jpg" width="100%">
              </div>
              <div>
                <img src="~/assets/images/banner/sale-het-y-giam-gia-me-ly-chi-tu-3300d-1703202115523.jpg" width="100%">
              </div>
              <div>
                <img src="~/assets/images/banner/sua-abbott-cho-be-cao-hon-thong-minh-hon-0511202015554.jpg"
                     width="100%">
              </div>
              <div>
                <img src="~/assets/images/banner/mua-thung-sua-milo-uong-lien-cao-trung-thuong-100-0203202115117.jpg"
                     width="100%">
              </div>
              <div>
                <img src="~/assets/images/banner/da-dep-toc-xinh-1903202182240.jpg" width="100%">
              </div>
            </agile>
          </div>
          <div class="tips">
            <div class="newvideo">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/WeRLE0DyDEo"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </div>
            <div class="nomehews">
              <div class="row">
                <div class="col-6">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="https://cdn.tgdd.vn/Files/2021/03/20/1336836/be-an-thoa-thich-voi-banh-trung-ibo-vua-ngon-lai-bo-duong-202103201455237916.jpg"
                        width="100%">
                    </div>
                    <div class="col-8">
                      <p>Bé ăn thỏa thích với bánh trứng I.B.O vừa ngon lại bổ... </p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="https://cdn.tgdd.vn/Files/2021/03/20/1336854/tat-tan-tat-nhung-cach-tiet-trung-do-dung-chai-lo-trong-nha-khong-can-may-moc-hien-dai-202103201517561890.jpg"
                        width="100%">
                    </div>
                    <div class="col-8">
                      <p>Tất tần tật những cách tiệt trùng đồ dùng, chai lọ trong... </p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="https://cdn.tgdd.vn/Files/2017/09/17/1022409/cach-got-vo-khoai-so-khong-so-bi-ngua-tay-202103211425170172.jpg"
                        width="100%">
                    </div>
                    <div class="col-8">
                      <p>Cách gọt vỏ khoai sọ không sợ bị...</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="https://cdn.tgdd.vn/Files/2021/03/20/1336844/nuoc-nha-dam-chuong-duong-thuc-uong-tuyet-voi-danh-cho-suc-khoe-202103201451194842.jpg"
                        width="100%">
                    </div>
                    <div class="col-8">
                      <p>Nước nha đam Chương Dương thức uống tuyệt... </p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="https://cdn.tgdd.vn/Files/2021/03/20/1336818/cach-lam-tiet-canh-bang-cu-den-da-ngon-an-toan-lai-con-dep-da-202103201347197210.jpg"
                        width="100%">
                    </div>
                    <div class="col-8">
                      <p>Cách làm tiết canh bằng củ dền đã ngon an toàn lại còn đẹp... </p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="https://cdn.tgdd.vn/Files/2021/03/20/1336781/4-nguyen-lieu-dau-goi-tu-thien-nhien-giup-toc-khoe-bong-muot-cua-phu-nu-viet-thoi-xa-xua-202103201153268534.jpg"
                        width="100%">
                    </div>
                    <div class="col-8">
                      <p>4 nguyên liệu dầu gội từ thiên nhiên giúp tóc khỏe... </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "~/node_modules/axios";
import {VueAgile} from '~/node_modules/vue-agile'
import {
  mdbListGroupItem,
  mdbScrollSpy,
  mdbNavbarNav,
  mdbNavItem,
  mdbCol
} from "mdbvue";

export default {
  components: {
    agile: VueAgile,
    mdbListGroupItem,
    mdbNavbarNav,
    mdbNavItem,
    mdbCol
  },
  data() {
    return {
      active: 0,
      nested: 0,
      nav: 0,
      scrollSections2: [],
      loading: true,
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
  methods: {
    setActive(i) {
      this.active = i;
    },
    setActiveLink(i) {
      this.nested = i;
    },
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
    }
  },
  mounted() {
    setTimeout(() => {
      this.scrollSections2 = [
        {
          id: "cate_1",
          title: "Thịt, cá, trứng, rau"
        },
        {
          id: "cate_2",
          title: "Sữa uống các loại"

        },
        {
          id: "cate_3",
          title: "Đồ uống các loại"
        },
        {
          id: "cate_4",
          title: "Mì, cháo, phở, bún"
        },
        {
          id: "cate_5",
          title: "Dầu ăn, gia vị"
        },
        {
          id: "cate_6",
          title: " Chăm sóc cá nhân "
        },
        {
          id: "cate_7",
          title: "Gạo, bột, đồ khô"
        },
        {
          id: "cate_8",
          title: "Đồ mát, đông lạnh"
        },
        {
          id: "cate_9",
          title: "Vệ sinh nhà cửa"
        },
        {
          id: "cate_10",
          title: "Vệ sinh nhà cửa"
        },
        {
          id: "cate_11",
          title: "Đồ dùng gia đình"
        },
        {
          id: "cate_12",
          title: "Xả kho giá sốc"
        }
      ]
      this.loading = false;
    }, 1000)
  },
  directives: {mdbScrollSpy}
}
</script>

