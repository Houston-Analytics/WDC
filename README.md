# WDC
Snowplow open source part setup scripts for WDC ( Web Data Collector ). This documentation uses Google Tag Manager for examples in site integration.

WDC Snowplow collector setup consists of 3 separate elements:
1. Basic tracker ( wdc2.js )
2. Enhanced ecommerce extension
3. Custom events tracker

## Basic tracker ( wdc2.js )

WDC uses Snowplow tracking scripts, which can be found here:

https://github.com/snowplow/snowplow/wiki/Javascript-Tracker#overview 

Set up WDC in GTM with the following steps:
1. create new "custom HTLM" tag
2. copy the wdc2.js content and change the following in code to suit your needs
  - appID = "any name you wish"
  - platform = "web" ( can be mobile, app, ... )
  - instructions: https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker#initialisation
3. define the tag to trigger on "all pages" and/or if single page app on "global.historychange"

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

## Custom events tracker 

Setting up custom data trackers for events = track anything.

https://github.com/snowplow/snowplow/wiki/Integrating-javascript-tags-with-Google-Tag-Manager#events
