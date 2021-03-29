
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

    add(id) {
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
                    quantity: quantity + 1
                }];
                cart_data = cart_data.map(obj => data.find(o => o.id === obj.id) || obj);
            }
            else {
                var data = {
                    id: id,
                    quantity: 1
                };
                cart_data.push(data);
            }

            cart_data = JSON.stringify(cart_data);
            console.log(cart_data);
            document.cookie = `cart=${cart_data}`;

        } else {
            var cart_data = [
                {
                    id: id,
                    quantity: 1
                }
            ];
            cart_data = JSON.stringify(cart_data);
            document.cookie = `cart=${cart_data}`;
        }
    }

}

export default cart