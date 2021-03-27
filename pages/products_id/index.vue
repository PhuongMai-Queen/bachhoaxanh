<template>
  <div v-if="$device.isDesktop">
    Content Desktop
  </div>
  <div v-else-if="$device.isTablet">
    Content Tablet
  </div>
  <div v-else class="mobile_content">
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
      </b-container>
    </div>
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
    }
  }
}
</script>

