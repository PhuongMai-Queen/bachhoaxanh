<template>
  <div v-if="$device.isDesktop">
    <div class="desktop_content_banner">
      <agile :autoplay="true">
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
          <img src="~/assets/images/banner/banner_4.jpg"
               width="100%">
        </div>
        <div>
          <img src="~/assets/images/banner/banner_5.jpg"
               width="100%">
        </div>
        <div>
          <img src="~/assets/images/banner/banner_6.jpg" width="100%">
        </div>
      </agile>
      <div class="groupcate">
        <div class="namegroup">Nhóm hàng thường mua</div>
        <div class="listgroup">
          <a href="#" v-for="cpts in categoriesProductTopSale" :key="cpts.id">
            <img :src="cpts.image_url">
            <span>{{cpts.name}}</span>
          </a>
        </div>
      </div>
      <div class="list_groupfeature" v-for="cate in categories" :key="cate.id">
        <h2 class="grouptitle">{{cate.name}}</h2>
        <div v-for="product in productsCate[cate.id]" :key="product.id">
          <div>{{product.id}}</div>
        </div>
      </div>
      <div class="hometips">
        <div class="hometitle">
          <nuxt-link to="#">Mẹo hay trong gia đình</nuxt-link>
        </div>
        <div class="row">
          <div class="newvideo col-8">
            <iframe width="100%" height="326" src="https://www.youtube.com/embed/WeRLE0DyDEo"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <div class="newlist col-4">
            <nuxt-link to="#">
              <img
                src="https://cdn.tgdd.vn/Files/2021/03/20/1336836/be-an-thoa-thich-voi-banh-trung-ibo-vua-ngon-lai-bo-duong-202103201455237916.jpg">
              <p>Bé ăn thỏa thích với bánh trứng I.B.O vừa ngon lại bổ... </p>
            </nuxt-link>
            <nuxt-link to="#">
              <img
                src="https://cdn.tgdd.vn/Files/2021/03/20/1336854/tat-tan-tat-nhung-cach-tiet-trung-do-dung-chai-lo-trong-nha-khong-can-may-moc-hien-dai-202103201517561890.jpg">
              <p>Tất tần tật những cách tiệt trùng đồ dùng, chai lọ trong... </p>
            </nuxt-link>
            <nuxt-link to="#">
              <img
                src="https://cdn.tgdd.vn/Files/2017/09/17/1022409/cach-got-vo-khoai-so-khong-so-bi-ngua-tay-202103211425170172.jpg">
              <p>Cách gọt vỏ khoai sọ không sợ bị...</p>
            </nuxt-link>
            <nuxt-link to="#">
              <img
                src="https://cdn.tgdd.vn/Files/2021/03/20/1336844/nuoc-nha-dam-chuong-duong-thuc-uong-tuyet-voi-danh-cho-suc-khoe-202103201451194842.jpg">
              <p>Nước nha đam Chương Dương thức uống tuyệt... </p>
            </nuxt-link>
            <nuxt-link to="#">
              <img
                src="https://cdn.tgdd.vn/Files/2021/03/20/1336818/cach-lam-tiet-canh-bang-cu-den-da-ngon-an-toan-lai-con-dep-da-202103201347197210.jpg">
              <p>Cách làm tiết canh bằng củ dền đã ngon an toàn lại còn... </p>
            </nuxt-link>
            <nuxt-link to="#">
              <img
                src="https://cdn.tgdd.vn/Files/2021/03/20/1336781/4-nguyen-lieu-dau-goi-tu-thien-nhien-giup-toc-khoe-bong-muot-cua-phu-nu-viet-thoi-xa-xua-202103201153268534.jpg">
              <p>4 nguyên liệu dầu gội từ thiên nhiên giúp tóc khỏe... </p>
            </nuxt-link>
            <nuxt-link to="#" class="viewother">Xem các tin bài khác »</nuxt-link>
          </div>
        </div>
      </div>
      <div class="evoucher">
        <div class="voucher-title">
          <div class="voucher-title-left">
            <font-awesome-icon :icon="['fas', 'money-check-alt']"></font-awesome-icon>
            <span>Đặt mua phiếu mua hàng điện tử</span>
          </div>
          <div class="voucher-tip">
            <nuxt-link to="#">Thông tin phiếu mua hàng điện tử »</nuxt-link>
          </div>
        </div>
        <div class="voucher-main">
          <div class="voucher-main-step1">
            <span><b>Bước 1:</b> Chọn mệnh giá</span>
            <div class="voucher-pricechoose">
              <button v-b-toggle.collapse-voucher>
              <span>
                <label @click="showCollapse">
                  <input v-model="selected" type="radio" name="voucher" value="50.000"> 50.000₫
                </label>
              </span>
              </button>
              <button v-b-toggle.collapse-voucher>
                <label @click="showCollapse">
                  <input v-model="selected" type="radio" name="voucher" value="100.000"> 100.000₫
                </label>
              </button>
              <button v-b-toggle.collapse-voucher>
                <label @click="showCollapse">
                  <input v-model="selected" type="radio" name="voucher" value="200.000"> 200.000₫
                </label>
              </button>
              <button v-b-toggle.collapse-voucher>
                <label @click="showCollapse">
                  <input v-model="selected" type="radio" name="voucher" value="300.000"> 300.000₫
                </label>
              </button>
              <button v-b-toggle.collapse-voucher>
                <label @click="showCollapse">
                  <input v-model="selected" type="radio" name="voucher" value="500.000"> 500.000₫
                </label>
              </button>
              <button v-b-toggle.collapse-voucher>
                <label @click="showCollapse">
                  <input v-model="selected" type="radio" name="voucher" value="1.000.000"> 1.000.000₫
                </label>
              </button>
            </div>
          </div>
          <div class="voucher-main-step2" id="collapse-step" style="display: none">
            <div class="voucher-infouser">
              <span><b>Bước 2:</b> Chọn số lượng</span>
            </div>
            <div class="voucher-number">
              <div class="qty">
                <span class="down">-</span>
                <input type="number" min="1" value="1">
                <span class="up">+</span>
              </div>
              <div class="voucher-totalprice">
                <span>Thành tiền: <span class="total">{{ selected }}₫</span></span>
              </div>
            </div>
            <div class="voucher-phone">
              <input type="text" placeholder="Nhập số điện thoại để nhận mã phiếu">
            </div>
            <div class="voucher-payment">
              <span><b>Bước 3:</b> Thanh toán</span>
              <div class="payments">
                <nuxt-link to="#">Thẻ<img src="~/assets/images/general/atm.png">  <span>(có internet banking)</span></nuxt-link>
                <nuxt-link to="#">Thẻ <img src="~/assets/images/general/card.png"></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            <div v-for="cate in categories" :key="cate.id">
              <mdb-nav-item href="#">{{cate.name}}</mdb-nav-item>
            </div>
          </mdb-navbar-nav>
        </mdb-navbar>
      </div>
      <div>
        <div
          class="z-depth-2"
          style="max-height: 736px; overflow-y: scroll;"
          id="nested"
        >
          <!--          <div id="item-2">-->
          <!--            <div class="groupfeature">-->
          <!--              <div class="cate cateproduct">-->
          <!--                <div class="product row">-->
          <!--                  <div class="product-item col-4" v-for="item in products" :key="item.id">-->
          <!--                    <div class="product-box">-->
          <!--                      <nuxt-link :to="{ name: 'product-id', params: { id: item.id }}">-->
          <!--                        <img :src="item.thumbnail" width="100%">-->
          <!--                      </nuxt-link>-->
          <!--                      <div class="productinfo">-->
          <!--                        <h3 class="product-name">{{ item.name }}</h3>-->
          <!--                      </div>-->
          <!--                      <div class="box-buy">-->
          <!--                        <a @click="addToCart(item.id, item.price)">-->
          <!--                          <div class="row">-->
          <!--                            <div class="price col-7">-->
          <!--                              <span>{{ item.price_formatted }}</span>-->
          <!--                            </div>-->
          <!--                            <div class="buy col-5">-->
          <!--                              <button type="button" class="" >-->
          <!--                                MUA-->
          <!--                              </button>-->
          <!--                            </div>-->
          <!--                          </div>-->
          <!--                        </a>-->
          <!--                      </div>-->
          <!--                      &lt;!&ndash;                      <div class="updown">&ndash;&gt;-->
          <!--                      &lt;!&ndash;                        <div class="quantity-group">&ndash;&gt;-->
          <!--                      &lt;!&ndash;                          <div class="quantity-item">&ndash;&gt;-->
          <!--                      &lt;!&ndash;                            <button type="button" class="down">-</button>&ndash;&gt;-->
          <!--                      &lt;!&ndash;                            <input type="number" value="1" class="quantity-input"/>&ndash;&gt;-->
          <!--                      &lt;!&ndash;                            <button type="button" id="plus" class="up">+</button>&ndash;&gt;-->
          <!--                      &lt;!&ndash;                          </div>&ndash;&gt;-->
          <!--                      &lt;!&ndash;                        </div>&ndash;&gt;-->
          <!--                      &lt;!&ndash;                      </div>&ndash;&gt;-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div v-if="limit > 9" class="cate-item-bottom">-->
          <!--                <div class="cate-list">-->
          <!--                  <div class="cate-item">-->
          <!--            <span>-->
          <!--              Socola <br> lúa mạch-->
          <!--            </span>-->
          <!--                  </div>-->
          <!--                  <div class="cate-item">-->
          <!--            <span>-->
          <!--              Sữa chua <br>ăn-->
          <!--            </span>-->
          <!--                  </div>-->
          <!--                  <div class="cate-item">-->
          <!--            <span>-->
          <!--              Sữa chua<br>uống-->
          <!--            </span>-->
          <!--                  </div>-->
          <!--                  <div class="cate-item">-->
          <!--            <span>-->
          <!--              Sữa<br>bắp-->
          <!--            </span>-->
          <!--                  </div>-->
          <!--                  <div class="cate-item">-->
          <!--            <span>-->
          <!--              Sữa <br> trái cây-->
          <!--            </span>-->
          <!--                  </div>-->
          <!--                  <div class="cate-item">-->
          <!--            <span>-->
          <!--              Sữa <br>túi-->
          <!--            </span>-->
          <!--                  </div>-->
          <!--                  <div class="cate-item">-->
          <!--            <span>-->
          <!--              Sữa <br> chai-->
          <!--            </span>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div v-if="total-limit > 0">-->
          <!--                <div class="viewmore" @click="limitShow()">-->
          <!--        <span>Xem thêm {{ total - limit }} sản phẩm  <b>sữa uống các loại</b>-->
          <!--          <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>-->
          <!--        </span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
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
import {VueAgile} from '~/node_modules/vue-agile';
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
      categories: [],
      data: [],
      total: [],
      total_pages: null,
      error: null,
      limit: 9,
      limit_cate: 8,
      selected: '',
      categoriesProductTopSale: [],
      productsCate: [],
      test: false
    }
  },
  async created() {
    this.getData();
  },
  methods: {
    setActive(i) {
      this.active = i;
    },
    setActiveLink(i) {
      this.nested = i;
    },
    async getData() {
      const categories = await axios.get('http://api.tvtp.vn/v1/client/categories/hierarchy', {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      const categoriesProductTopSale = await axios.get('https://api-idp.kpis.vn/v1/client/categories-product-top-sale', {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      // this.products = this.products.concat(response.data.data).filter((el, index) => index < this.limit);
      this.categories = categories.data.data;
      this.categoriesProductTopSale = categoriesProductTopSale.data.data;
      for (var i = 0; i < this.categories.length; i++) {
        this.getProductsByCate(this.categories[i].id);
      }
      console.log(this.productsCate);
    },
    async getProductsByCate(id) {
      const response = await axios.get('https://api-idp.kpis.vn/v1/client/products?limit=24&store_id=&name=&category_ids='+id, {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      this.productsCate[id] = response.data.data;
    },
    async limitShow() {
      this.limit = this.limit + 9;
      this.products = [];
      this.totalPages();
    },
    showCollapse() {
      if (document.querySelector("#collapse-step").style.display == "none") {
        document.querySelector("#collapse-step").style.display = "block";
      }
    }
  },
  directives: {mdbScrollSpy}
}
</script>

