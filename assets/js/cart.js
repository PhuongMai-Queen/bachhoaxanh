
const cart = {
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },

    add(id, price) {
        var cart_data = this.getCookie("cart");
        if (cart_data) {
            // console.log(cookie);
            cart_data = JSON.parse(cart_data);
            // console.log(typeof cookie);
            // console.log(cookie);
            var cart_product = cart_data.find(productId => productId.id == id);
            if (cart_product) {
                var quantity = cart_product.quantity;
                var data = [{
                    id: id,
                    quantity: quantity + 1,
                    price: price,
                }];
                cart_data = cart_data.map(obj => data.find(o => o.id === obj.id) || obj);
            }
            else {
                var data = {
                    id: id,
                    quantity: 1,
                    price: price,

                };
                cart_data.push(data);
            }

            cart_data = JSON.stringify(cart_data);
            console.log(cart_data);
            document.cookie = `cart=${cart_data}; path=/`;

        } else {
            var cart_data = [
                {
                    id: id,
                    quantity: 1,
                    price: price,

                }
            ];
            cart_data = JSON.stringify(cart_data);
            document.cookie = `cart=${cart_data}; path=/`;
        }
    },

    plus(id, price) {
        var cart_data = this.getCookie("cart");
        if (cart_data) {
            cart_data = JSON.parse(cart_data);
            var cart_product = cart_data.find(productId => productId.id == id);
            if (cart_product) {
                var quantity = cart_product.quantity;
                var data = [
                    {
                        id: id,
                        quantity: quantity + 1,
                        price: price,

                    }
                ];
                cart_data = cart_data.map(
                    obj => data.find(o => o.id === obj.id) || obj
                );
                cart_data = JSON.stringify(cart_data);
                console.log(cart_data);
                document.cookie = `cart=${cart_data}; path=/`;
                // return quantity;

            }
        }
    },

    minus(id, price) {
        var cart_data = this.getCookie("cart");
        if (cart_data) {
            cart_data = JSON.parse(cart_data);
            var cart_product = cart_data.find(productId => productId.id == id);
            if (cart_product) {
                var quantity = cart_product.quantity;
                if (quantity <= 1) {
                    var index = cart_data.findIndex(x => x.id === id);
                    // console.log(index);
                    if (index > -1) {
                        cart_data.splice(index, 1);
                    }
                }
                else {
                    var data = [
                        {
                            id: id,
                            quantity: quantity - 1,
                            price: price,

                        }
                    ];
                    cart_data = cart_data.map(
                        obj => data.find(o => o.id === obj.id) || obj
                    );
                }
                cart_data = JSON.stringify(cart_data);
                console.log(cart_data);
                document.cookie = `cart=${cart_data}; path=/`;
                // return quantity;

            }
        }

    },
    remove(id) {
        var cart_data = this.getCookie("cart");
        if (cart_data) {
            cart_data = JSON.parse(cart_data);
            var index = cart_data.findIndex(x => x.id === id);
            console.log(index);
            if (index > -1) {
                cart_data.splice(index, 1);
                cart_data = JSON.stringify(cart_data);
                console.log(cart_data);
                document.cookie = `cart=${cart_data}; path=/`;
            }

        }
    },
    delete() {
        document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }



}

export default cart
