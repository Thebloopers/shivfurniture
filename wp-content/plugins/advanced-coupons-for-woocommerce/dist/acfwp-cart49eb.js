!function(){"use strict";jQuery(document).ready((function(o){var c={applyNotificationCouponCart:function(){var e,t=null===(e=o(this).val())||void 0===e?void 0:e.toString().trim();c.block(o(".woocommerce-cart-form")),o.post(wc_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","apply_coupon"),{coupon_code:t,security:wc_cart_params.apply_coupon_nonce},(function(e){o(".woocommerce-error, .woocommerce-message, .woocommerce-info").remove(),o(document.body).trigger("applied_coupon",[t]),c.showNotice(e)})).always((function(){c.unblock(o(".woocommerce-cart-form")),o(document).trigger("wc_update_cart",!0)}))},applyNotificationCouponCheckout:function(){var e,t=null===(e=o(this).val())||void 0===e?void 0:e.toString().trim(),n=o("form.woocommerce-checkout");c.block(n),o.post(wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%","apply_coupon"),{coupon_code:t,security:wc_checkout_params.apply_coupon_nonce},(function(e){o(".woocommerce-error, .woocommerce-message").remove(),c.unblock(n),e&&(n.before(e),o(document.body).trigger("applied_coupon_in_checkout",[t]),o(document.body).trigger("update_checkout",{update_shipping_method:!1}))}))},showNotice:function(c,e){void 0===e&&(e=null),null!==e&&(e=o(".woocommerce-notices-wrapper:first")||o(".cart-empty").closest(".woocommerce")||o(".woocommerce-cart-form")),null==e||e.prepend(c)},block:function(o){o.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},unblock:function(o){o.removeClass("processing").unblock()},init:function(){o("body.woocommerce-cart").on("click","button.acfw_apply_notification",this.applyNotificationCouponCart),o("body.woocommerce-checkout").on("click","button.acfw_apply_notification",this.applyNotificationCouponCheckout)}};c.init()}))}();