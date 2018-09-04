<script>
// If this tag fires more than once (e.g. page view followed by ecommerce action),
// we don't want to repeat the trackPageView here
if (!window.snowplow_2) {
	
;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//s3.eu-central-1.amazonaws.com/snowplow-js-tracker/wdc2.js","snowplow_2"));
 
 // Track page views, enable link clicks, and so on here
 snowplow_2("newTracker", "cfee", "collector.houston-analytics.com", {
	 appId: "APPID",
	 cookieName: "APPID"
	  });
	  
	 snowplow_2("enableActivityTracking", 10, 10);
	 snowplow_2("trackPageView");
	 
	 // !!! Customizable section ends
 }

var ecommerce = {{ecommerce}};

var actions = [
	"click",
	"detail",
	"add",
	"remove",
	"checkout",
	"checkout_option",
	"purchase",
	"refund",
	"promo_click",
	"view"
	];
	
if (ecommerce) {
	sendEnhancedEcommerceEvent(ecommerce);
}

function sendEnhancedEcommerceEvent(ecommerce) {
	var currencyCode = ecommerce.currencyCode;
	var relevantActions = [];

	for (var i = 0; i < actions.length; i++) {
		if (ecommerce[actions[i]]) {
			relevantActions.push(actions[i]);
		}
	}

	if (ecommerce.impressions) {
		for (var j = 0; j < ecommerce.impressions.length; j++) {
			var impression = ecommerce.impressions[j];
			snowplow_2("addEnhancedEcommerceImpressionContext",
			impression.id,
			impression.name,
			impression.list,
			impression.brand,
			impression.category,
			impression.variant,
			impression.position,
			impression.price,
			currencyCode
			);
		}
	}
		
	if (ecommerce.promoView) {
		for (var l = 0; l < ecommerce.promoView.promotions.length; l++) {
			var promo = ecommerce.promoView.promotions[l];
			snowplow_2("addEnhancedEcommercePromoContext",
			promo.id,
			promo.name,
			promo.creative,
			promo.position,
			currencyCode
			);
		}
	}

	if (relevantActions.length === 0) {
		snowplow_2("trackEnhancedEcommerceAction", "view");
	}
	else {
		for (var m = 0; m < relevantActions.length; m++) {
			var relevantAction = relevantActions[m];
			if (ecommerce[relevantAction].products) {
				for (var k = 0; k < ecommerce[relevantAction].products.length; k++) {
					var product = ecommerce[relevantAction].products[k];
					snowplow_2("addEnhancedEcommerceProductContext",
					product.id,
					product.name,
					product.list,
					product.brand,
					product.category,
					product.variant,
					product.price,
					product.quantity,
					product.coupon,
					product.position,
					currencyCode
					);
				}
			}

			if (ecommerce[relevantAction].actionField) {
				var actionObject = ecommerce[relevantAction].actionField;
				snowplow_2('addEnhancedEcommerceActionContext',
				actionObject.id,
				actionObject.affiliation,
				actionObject.revenue,
				actionObject.tax,
				actionObject.shipping,
				actionObject.coupon,
				actionObject.list,
				actionObject.step,
				actionObject.option,
				currencyCode
				);
			}

			snowplow_2('trackEnhancedEcommerceAction', relevantAction);
		}
	}
}
</script>
