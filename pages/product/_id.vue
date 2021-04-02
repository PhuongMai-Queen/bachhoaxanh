<template>
  <div v-if="$device.isDesktop">
    Content Desktop
  </div>
  <div v-else-if="$device.isTablet">
    Content Tablet
  </div>
  <div v-else class="mobile_product">
    <div class="product_slide">
      <img :src="product.thumbnail" class='zoom' data-zoom-image="" style="width: 100%;">
    </div>
    <div class="group-info">
      <div class="info-product">
        <p class="description">
          <span class="product-name">
            {{product.name}}
          </span>
          <span class="product-details">
            {{product.short_description}}
          </span>
          <span class="show-details">
            Xem chi tiết
          </span>
        </p>
      </div>
      <div class="boxbuy-area">
        <div class="group-price">
          {{product.price_formatted}}
        </div>
        <nuxt-link to="#" class="choosebuy">MUA NGAY</nuxt-link>
      </div>
    </div>
    <div class="group_product-item">
      <div class="cate cateproduct">
        <h3 class="titledt">Sản phẩm liên quan</h3>
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
        </div>
      </div>
    </div>
    <div class="product_banner">
      <nuxt-link to="#">
        <img src="https://cdn.tgdd.vn/bachhoaxanh/banners/2516/rau-an-toan-4k-farm-tang-0303202114485.jpg">
      </nuxt-link>
    </div>
    <div class="product_comment">
      <div class="comment-rating">
        <div class="boxrating">
          <div class="ratingbox">
            <div>
              <span class="title">Có 2 đánh giá về sản phẩm</span>
              <div class="block-totalstar active">
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-starblack medium"/>
                <span>5.0</span>
              </div>
            </div>
          </div>
        </div>
        <div id="comment-list1" class="comment-list child">
          <div class="item first-item">
            <b>
              Đỗ Thị Phượng Mai
              <span class="liststar">
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-star"/>
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-star"/>
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-star"/>
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-star"/>
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-star"/>
              </span>
            </b>
            <div class="rating-content">Giá tốt, rau củ quả sạch, an toàn</div>
            <div>
              <nuxt-link to="#">Trả lời</nuxt-link>
              <span class="com-dot"></span>
              <nuxt-link to="#">
                <font-awesome-icon :icon="['far', 'thumbs-up']"  class="bhx-p-like"/>
                <span>
                  <b>1</b>
              </span> Thích
              </nuxt-link>
              <span class="comment-time">
                <span class="com-dot"></span>
                16 ngày trước
              </span>
            </div>
          </div>
          <div class="item first-item">
            <b>
              Nguyễn Phương Bình
              <span class="liststar">
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-star"/>
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-star"/>
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-star"/>
                <font-awesome-icon :icon="['fas', 'star']"  class="bhx-star"/>
              </span>
            </b>
            <div class="rating-content">rau ngon, giá tốt nhưng bảo quản không được lâu</div>
            <div>
              <nuxt-link to="#">Thảo Luận</nuxt-link>
              <span class="com-dot"></span>
              <nuxt-link to="#">
                <font-awesome-icon :icon="['far', 'thumbs-up']"  class="bhx-p-like"/>
                <span>
                  <b>1</b>
              </span> Thích
              </nuxt-link>
              <span class="comment-time">
                <span class="com-dot"></span>
                16 ngày trước
              </span>
            </div>
          </div>
          <div class="row-addrating">
            <div></div>
            <div class="addrating" id="show-btn" @click="$bvModal.show('bv-modal-example')">
              <font-awesome-icon :icon="['far', 'plus-square']"  />
                Thêm đánh giá
              <b-modal id="bv-modal-example" hide-footer centered>
                <template #modal-title>
                  <span>Đánh giá</span>
                  <div class="rating-form">
                    <b-form-rating v-model="value" class="rating-color"></b-form-rating>
                  </div>
                </template>

                <form action="#">
                  <div class="row">
                    <div class="form-group col-12">
                      <textarea class="form-control" rows="3" placeholder="Mời bạn đánh giá về sản phẩm"></textarea>
                    </div>
                  </div>
                  <div class="row gendercomment">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="exampleRadios">Anh
                      </label>
                      <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="exampleRadios">Chị
                      </label>
                    </div>
                    <div class="icon-color">
                      <font-awesome-icon :icon="['fas', 'camera']"/>
                      Thêm hình ảnh
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-12">
                      <input type="text" class="form-control" placeholder="Họ tên(bắt buộc)">
                    </div>
                    <div class="form-group col-12">
                      <input type="text" class="form-control" placeholder="SĐT(bắt buộc)">
                    </div>
                    <div class="form-group col-12">
                      <input type="text" class="form-control" placeholder="Email">
                    </div>
                  </div>
                </form>

                <b-button variant="success" block @click="$bvModal.hide('bv-modal-example')">
                  Gửi Đánh Giá
                </b-button>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-list">
        <div class="topcmt">
          <h4 class="cmttitle">
            Có 8 hỏi đáp về sản phẩm
          </h4>
        </div>
        <div class="cmt-form">
          <!-- Using collaps-2 -->
          <form action="#">
            <div class="row">
              <div class="form-group col-12">
                <b-textarea v-b-toggle.collapse-2 class="form-control" rows="3" placeholder="Mời bạn đánh giá về sản phẩm"></b-textarea>
              </div>
            </div>
            <b-collapse id="collapse-2">
              <div class="row gendercomment">
              <div class="form-check">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="exampleRadios">Anh
                </label>
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="exampleRadios">Chị
                </label>
              </div>
              <div class="icon-color">
                <font-awesome-icon :icon="['fas', 'camera']"/>
                Thêm hình ảnh
              </div>
            </div>
            <div class="row">
              <div class="form-group col-12">
                <input type="text" class="form-control" placeholder="Họ tên(bắt buộc)">
              </div>
              <div class="form-group col-12">
                <input type="text" class="form-control" placeholder="SĐT(bắt buộc)">
              </div>
              <div class="form-group col-12">
                <input type="text" class="form-control" placeholder="Email">
              </div>
              <div class="form-group col-12">
                <button type="button" class="btn btn-success btn-sm btn-block">Gửi Đánh Giá</button>
              </div>
            </div>
            </b-collapse>
          </form>
        </div>
        <div class="cmt-content">
          <div id="comment-list1" class="comment-list child">
            <div class="item first-item">
              <b>
                Lệ Chi
              </b>
              <div class="rating-content">
                Rau của bhx rất tươi xanh minh mua lần nào cũng ngon bhx lên bán thêm các loại nấm và củ quả cho khách hàng dễ dàng chọn lựa
              </div>
              <div>
                <nuxt-link to="#">Trả lời</nuxt-link>
                <span class="com-dot"></span>
                <nuxt-link to="#">
                  <font-awesome-icon :icon="['far', 'thumbs-up']"  class="bhx-p-like"/>
                  <span>
                    <b>1</b>
                </span> Thích
                </nuxt-link>
                <span class="comment-time">
                  <span class="com-dot"></span>
                  9 ngày trước
                </span>
              </div>
            </div>
            <div class="rep-cmt">
              <div class="item first-item " id="first-item">
                <b>
                  <font-awesome-icon :icon="['fas', 'user-shield']"  />
                  Amin Bách Hoá Xanh
                </b>
                <div class="rating-content">
                  Chào bạn <b>Lệ Chi</b>,<br>
                  Dạ không biết bạn không hài lòng về sản phẩm khi mua trực tiếp tại cửa hàng hay BÁCH HÓA XANH online ạ. Rất mong nhận được phản hồi từ bạn để ghi nhận thông tin góp ý và cải thiện ngày một tốt hơn ạ
                </div>
                <div id="nuxt-link-cmt">
                  <nuxt-link to="#">Trả lời</nuxt-link>
                  <span class="com-dot"></span>
                  <nuxt-link to="#">
                    <font-awesome-icon :icon="['far', 'thumbs-up']"  class="bhx-p-like"/>
                    <span>
                      <b>2</b>
                  </span> Thích
                  </nuxt-link>
                  <span class="comment-time">
                    <span class="com-dot"></span>
                    9 ngày trước
                  </span>
                </div>
              </div>
            </div>
            <div class="item first-item">
              <b>
                Trần Quốc Toản
              </b>
              <div class="rating-content">
                đặt 1 đơn hàng online  mới nhận xong, giao khung giờ 2 tiếng mà nhận rau thì bị úng, hư, thối có mùi luôn, đây là lần thứ 2 được khuyến mãi rau 2 lần, cải bẹ xanh và cải thìa về đều không ăn được, mà không dám cho ai luôn
              </div>
              <div>
                <nuxt-link to="#">Trả lời</nuxt-link>
                <span class="com-dot"></span>
                <nuxt-link to="#">
                  <font-awesome-icon :icon="['far', 'thumbs-up']"  class="bhx-p-like"/>
                  <span>
                    <b>1</b>
                </span> Thích
                </nuxt-link>
                <span class="comment-time">
                  <span class="com-dot"></span>
                  16 ngày trước
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- backtotop -->

  </div>
</template>

// raiting

<script>
import axios from "~/node_modules/axios";
export default {
  async asyncData ({ params }) {
    let { data } = await axios.get(`http://api.tvtp.vn/v0/product-detail/${params.id}`, {
      headers: {
        Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
      }

    })
    return {
      product: data.data
    }
  }
}
</script>
