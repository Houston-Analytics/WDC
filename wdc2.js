<script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
      ga('create', 'GOOGLE-UA-ID', 'auto');
      ga('require', 'spGaPlugin', { endpoint: 'https://collector.houston-analytics.com' });
      ga('require', 'ec');
      ga('send', 'pageview');
     </script>
     <script async src="https://s3.eu-central-1.amazonaws.com/snowplow-js-tracker/wdc-ga-plugin.js"></script>
    
<!-- Snowplow starts plowing -->
  
    <script type="text/javascript">
        ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
        p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
        };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
        n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//s3.eu-central-1.amazonaws.com/snowplow-js-tracker/wdc2.js","snowplow_1"));
        window.snowplow_1('newTracker', 'cf', 'collector.houston-analytics.com', { // Initialise a tracker
          encodeBase64: true, // Default is true
          appId: 'APPID', // Site ID can be anything you want. Set it if you're tracking more than one site in this account
          platform: 'web', // Change based on platform, usually web, mob, app
          forceSecureTracker: true,
          forceUnsecureTracker: false,
          contexts: {
            webPage: true,
            gaCookies: true,
            performanceTiming: false
          }
        });
        window.snowplow_1('enableActivityTracking', 10, 10); // Ping every 10 seconds after 10 seconds
        window.snowplow_1('trackPageView');
        window.snowplow_1('enableLinkClickTracking', {blacklist: ['barred']}, true); // Track clicks on links whose class is not "barred"
        window.snowplow_1('enableFormTracking', {
          forms: {
            whitelist: ['formclass']
          },
          fields: {
            blacklist: ['comments']
          }
        });
    </script>
