<bt-image>
	<figure class={ "figure-elm " + elmClass }>
		<img src={ opts.src || src } alt={ opts.alt } class="img-elm">
		<figcaption class={ captionStyle }>
			<yield></yield>
		</figcaption>
	</figure>

	<script>
		const classes = opts.elmClass || "";
		this.captionStyle = opts.captionStyle || 'bottom-right';
		this.elmClass = classes
		this.src = '//source.unsplash.com/collection/1278495/1300x400';
		this.styles = {
			height: opts.height || "400px",
			width: opts.width || "100%"
		};
	</script>

	<style type="text/scss">
		@import './img.scss';
	</style>
</bt-image>
