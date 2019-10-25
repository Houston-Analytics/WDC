# WDC
Snowplow open source part setup scripts for WDC ( Web Data Collector ). This documentation uses Google Tag Manager for examples in site integration.

WDC Snowplow collector setup consists of 3 separate elements:
1. Basic tracker ( wdc2.js )
2. Enhanced ecommerce extension
3. Custom events tracker

## Basic tracker ( wdc2.js )

Set up WDC in GTM with the following steps:
1. create new "custom HTLM" tag
2. copy the wdc2.js content and change the following in code to suit your needs
  - appID = "any name you wish"
  - platform = "web" ( can be mobile, app, ... )
  - instructions: https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker#initialisation
3. define the tag to trigger on "all pages" and/or if single page app on "global.historychange"

WDC uses Snowplow tracking scripts. More information of the Snowplow tracking can be found here:
https://github.com/snowplow/snowplow/wiki/Javascript-Tracker#overview 

## Enhanced ecommerce extension

Data and event grabber from Google Analytics enchanced ecommerce to WDC.

Set up enhanced ecommerce in GTM with the following steps:
1. create new "custom HTLM" tag
2. copy the enhanced-ecommerce.js content and change the following in code to suit your needs
  - appID = "any name you wish"
  - cookieID = same as appID
  - instructions: https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker#initialisation
3. define the tag to trigger on "WDC enhanced ecommerce" ( trigger to be created )

4. create the trigger "WDC enhanced ecommerce" as "custom event"
5. set event name to trigger from as "gtm.dom|checkout|checkoutOption|productClick|addToCart|removeFromCart|promotionClick|purchase"
6. select "use regex matching" for the above
7. set to trigger on "All custom events"

# WDC custom events example for Ecommerce // Google Tag Manager

Setting up custom data trackers for events = track anything.

https://github.com/snowplow/snowplow/wiki/Integrating-javascript-tags-with-Google-Tag-Manager#events

This example is to highlight how to track ecommerce events without using Google Enhanced Ecommerce.

Prerequisite:
WDC.js tag is already in place and working as it should ( this is the website activity tracking ). The following things will need to be set up to get ecommerce web activity events for models.

### overview of what needs to be done for each "event" we want to track

1. Set up a tag that injects the data to WDC
2. Set up a GTM trigger that fires the tag ( step 1 ) when a desired event happens
3. Have GTM variables available with the data we want and set it to the tag ( step 1 )

### Part 1 - the tag ( event we want to get data from )

The {{VARIABLE-NAME}} are variables from GTM and are replaced by the content. We will create one tag for each event we want to track, and the tags we will create are:
- WDC product view ( when visiting a product page, example of code below )
- WDC product add to basket
- WDC product remove from basket
- WDC checkout success ( purchase made )

<!-- WDC product view info tag -->
<script type="text/javascript">
window.snowplow_1("trackStructEvent", "product", "productView", {{PRODUCT_ID}}, {{PRODUCT_NAME}}, {{PRODUCT_PRICE}});
</script>

### Part 2 - the trigger

Triggers are events that fire the desired tag, so we need to have a trigger for each event ( or use existing triggers ). The following user actions need to have triggers:

- when user visits a product page ( fire "WDC product view" )
- when user adds a product to the shopping cart ( fire "WDC product add to basket" )
- when user removes a product from basket ( fire "WDC product remove from basket" )
- when a purchase is successful ( fire "WDC checkout success" )

### Part 3 - the variables

The variables are linked to the page/view that the user is interacting with, and contain the desired data from the page/view.

We would need to have at least the following variables:
- PRODUCT_ID ( get the product ID from the page that is triggered )
- CART_ID ( get the active shopping cart ID )

Optional/additional:
- PRODUCT_NAME
- PRODUCT_PRICE
- CART_SUM ( total sum of shopping cart )
- CART_ITEMS ( array of product id's in the cart )
- ...

