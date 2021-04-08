<template>
  <div v-if="$device.isDesktop">
    <div class="colcontent">
      <ul class="breadcrumb">
        <li>
          <a href="#">
            Trang Chủ
            <font-awesome-icon :icon="['fas', 'angle-right']"  class="breadcrumb__icon"/>
          </a>
        </li>
        <li>
          <a href="#">Sữa chua các loại</a>
        </li>
      </ul>
      <div class="rowdetail">
        <div class="product_img">
          <img :src="product.thumbnail" style="width: 415px; height: 375px">
        </div>
        <div class="product_info">
          <h1 class="nameproduct">{{product.name}}</h1>
          <div class="expireddate"></div>
          <div class="ratinglist-price">
            <div class="boxprice">
              <strong>{{product.price_formatted}}</strong>
            </div>
          </div>
          <a href="#" class="choosebuy">CHỌN MUA</a>
          <div class="shipping">
            <div>
              <font-awesome-icon :icon="['far', 'clock']"  class="bhx-sship"/>
              <span> Đặt online giao tận nhà ĐÚNG GIỜ (nếu trễ tặng PMH 50.000₫)</span>
            </div>
            <div>
              <font-awesome-icon :icon="['fas', 'redo']"  class="bhx-sship"/>
              <span> Đổi, trả sản phẩm trong 48 giờ </span>
              <a href="#" id="detailReturn">(Xem chi tiết)</a>
            </div>
          </div>
          <div class="product_info-banner">
            <a href="#" title="RAU AN TOÀN 4K FARM TẶNG">
              <img src="https://cdn.tgdd.vn/bachhoaxanh/banners/2516/rau-an-toan-4k-farm-tang-03032021143649.jpg">
            </a>
          </div>
        </div>
      </div>
      <div class="relative">
        <h3 class="titledt">Sản phẩm liên quan</h3>
      </div>
      <div class="rowinfo">
        <div class="leftcolrelate">
          <div class="details">
            <h2 class="textinfpro">
              Thông Tin Sản Phẩm
            </h2>
            <div class="short-description"></div>
            <ul class="infoproduct nospeci">
              <li>
                <span>Thương hiệu</span>
                <div>Juss ()</div>
              </li>
              <li>
                <span>Loại trái cây</span>
                <div>Lựu</div>
              </li>
              <li>
                <span>Thành phần</span>
                <div>Nước, nước ép lựu cô đặc, chất điều chỉnh acid, hương liệu lựu tự nhiên,..</div>
              </li>
              <li>
                <span>Thể tích</span>
                <div>1 lít</div>
              </li>
              <li>
                <span>Hướng dẫn sử dụng</span>
                <div>Lắc đều trước khi sử dụng. Ngon hơn khi uống lạnh. Bảo quản lạnh sau khi mở bao bì và sử dụng trong vòng 2 ngày. Sử dụng tốt nhất trước ngày hết hạn được ghi trên phần đầu của hộp</div>
              </li>
            </ul>
            <div class="vote-Product">
              <div class="main">
                <div class="messageConfirm">
                   Bạn có hài lòng với thông tin sản phẩm này không?
                </div>
                <div class="icon_Product">
                  <a href="#" class="bl-vote">
                    <font-awesome-icon :icon="['fas', 'thumbs-up']"  class="icon-smile-s"/>
                    Hài lòng
                  </a>
                  <a href="#" class="bl-vote">
                    <font-awesome-icon :icon="['fas', 'thumbs-down']"  class="icon-smile-s"/>
                    Không hài lòng
                  </a>
                </div>
              </div>
            </div>
            <div class="product_comment">
              <div class="comment-rating">
                <div class="boxrating">
                  <div class="title">
                    <h4>Đánh giá sản phẩm</h4>
                  </div>
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
          </div>
        </div>
        <div class="rightcolrelate">
          <div class="groupcate">
            <div class="namegroup">
              Nhóm hàng thường mua
            </div>
            <div class="listgroup">
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/2386/bhx/sua-tuoi-cac-loai-202103201452535875.jpg">
                <span>Sữa tươi các loại</span>
              </a>
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/2443/bhx/nuoc-ngot-cac-loai-202104010941200224.jpg">
                <span>Nước ngọt các loại</span>
              </a>
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/2565/bhx/mi-goi-an-lien-202101191033219269.png">
                <span>Mì gói ăn liền</span>
              </a>
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/2286/bhx/dau-an-cac-loai-202101191038388488.png">
                <span>Dầu ăn các loại</span>
              </a>
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/3003/bhx/khan-uot-cac-loai-202101191151358335.png">
                <span>Khăn ướt các loại</span>
              </a>
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/2483/bhx/dau-goi-cac-loai-202101191145083094.png">
                <span>Dầu gội các loại</span>
              </a>
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/2513/bhx/gao-ngon-cac-loai-202101191055092230.png">
                <span>Gạo ngon các loại</span>
              </a>
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/7172/bhx/thit-hai-san-dong-202101191135401545.png">
                <span>Thịt, hải sản đông</span>
              </a>
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/7578/bhx/trai-cay-nhap-khau-202101191124534951.png">
                <span>Trái cây nhập khẩu</span>
              </a>
              <a href="#">
                <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/2282/bhx/bia-nuoc-co-con-202103201503346998.jpg">
                <span>Bia, nước có cồn</span>
              </a>
            </div>
            <div class="homehews">
              <div class="bartitle">
                <span class="hometitle">Mẹo hay trong gia đình</span>
                <a href="#" class="viewother">Xem các tin bài khác »</a>
              </div>
              <a href="#" title="Bổ sung năng lượng ngày hè với các loại nước ép Zoi">
                <img width="65" height="40" src="https://cdn.tgdd.vn/Files/2021/04/05/1340946/bo-sung-nang-luong-ngay-he-voi-cac-loai-nuoc-ep-zoi-202104051630471039.jpg">
                <p>Bổ sung năng lượng ngày hè với các loại nước ép Zoi</p>
              </a>
              <a href="#" title="Hè thêm hứng khởi với nước ép trái cây nhiệt đới Juss">
                <img width="65" height="40" src="https://cdn.tgdd.vn/Files/2021/04/05/1340908/he-them-hung-khoi-voi-nuoc-ep-trai-cay-nhiet-doi-juss-202104051454576099.jpg">
                <p>Hè thêm hứng khởi với nước ép trái cây nhiệt đới Juss</p>
              </a>
              <a href="#" title="Thưởng thức nước ép táo có ga Eden thức uống tốt cho sức khỏe">
                <img width="65" height="40" src="https://cdn.tgdd.vn/Files/2021/03/18/1336224/thuong-thuc-nuoc-ep-tao-co-ga-eden-thuc-uong-tot-cho-suc-khoe-202103180944096156.jpg">
                <p>Thưởng thức nước ép táo có ga Eden thức uống tốt cho sức khỏe</p>
              </a>
              <a href="#" title="Rượu mơ có tác dụng gì? Cách ngâm rượu mơ chuẩn nhất">
                <img width="65" height="40" src="https://cdn.tgdd.vn/Files/2018/05/11/1087844/mo-ngam-ruou-mon-ngon-de-uong-giai-nhiet-mua-he1_760x367-300x200.jpg">
                <p>Rượu mơ có tác dụng gì? Cách ngâm rượu mơ chuẩn nhất </p>
              </a>
              <a href="#" title="2 cách làm nước ép bí đao giảm cân an toàn hiệu quả tại nhà">
                <img width="65" height="40" src="https://cdn.tgdd.vn/Files/2019/08/19/1189395/muon-giam-can-nhanh-va-an-toan-chon-ngay-nuoc-ep-bi-dao-201908191452054449.jpg">
                <p>2 cách làm nước ép bí đao giảm cân an toàn hiệu quả tại nhà  </p>
              </a>
              <a href="#" title="Sáng sớm thức dậy nên uống một cốc nước nhưng tuyệt đối đừng uống 4 loại này">
                <img width="65" height="40" src="https://cdn.tgdd.vn/Files/2021/02/08/1326623/sang-som-thuc-day-nen-uong-mot-coc-nuoc-nhung-tuyet-doi-dung-uong-4-loai-nay-202102081604282263.jpg">
                <p>Sáng sớm thức dậy nên uống một cốc nước nhưng tuyệt đối đừng uống 4 loại này</p>
              </a>
              <a href="#" title="Lấy lại vóc dáng sau Tết với các loại nước ép lựu thơm ngon, bổ dưỡng">
                <img width="65" height="40" src="https://cdn.tgdd.vn/Files/2021/02/06/1326094/lay-lai-voc-dang-sau-tet-voi-cac-loai-nuoc-ep-luu-thom-ngon-bo-duong-202102061139180370.jpg">
                <p>Lấy lại vóc dáng sau Tết với các loại nước ép lựu thơm ngon, bổ dưỡng</p>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div v-else class="mobile_product">
    <div class="bg-product_slide">
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
