<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "site-content" div and all content after.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>

	<?php wp_footer(); ?>

	<!-- end seo_content -->
	</div>

	<?php
	// output Google Analytics on live site only
	if ($_SERVER['HTTP_HOST'] == 'radiomilwaukee.org'){
		?>
		<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-4343220-1', 'auto');
		// ga('send', 'pageview');
		</script>

		<!-- Chartbeat -->
		<script type="text/javascript"> 
		var sf_async_config={uid:12516,domain:"radiomilwaukee.org",useCanonical:true}; 
		(function(){ function loadChartbeat() { window.sf_endpt=(new Date()).getTime(); var e = document.createElement('script'); e.setAttribute('language', 'javascript'); e.setAttribute('type', 'text/javascript'); e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js'); document.body.appendChild(e); } var oldonload = window.onload; window.onload = (typeof window.onload != 'function') ? loadChartbeat : function() { oldonload(); loadChartbeat(); }; })();

		</script>

		

		<!-- Google Tag Manager -->
		<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TRP6N8"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-TRP6N8');</script>
		<!-- End Google Tag Manager -->

		

		<?php
	}
	?>
	<!-- IO Analytics -->
	<script async src="https://cdn.onthe.io/io.js/CG5mXzdvbAwG"></script>
	
	<script type="text/javascript">
	/* <![CDATA[ */
	var google_conversion_id = 964920380;
	var google_custom_params = window.google_tag_params;
	var google_remarketing_only = true;
	/* ]]> */
	</script>
	<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
	</script>
	<noscript>
	<div style="display:inline;">
	<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/964920380/?value=0&amp;guid=ON&amp;script=0"/>
	</div>
	</noscript>

	<script type="text/javascript">
	/* <![CDATA[ */
	var google_conversion_id = 994079846;
	var google_custom_params = window.google_tag_params;
	var google_remarketing_only = true;
	/* ]]> */
	</script>
	<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>

	<noscript>
	<div style="display:inline;">
	<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/994079846/?guid=ON&amp;script=0"/>
	</div>
	</noscript>
</body>
</html>