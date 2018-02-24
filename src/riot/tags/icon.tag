<bt-icon>
	<svg class={class }>

		<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href={ icon }></use>
	</svg>
	<script>
		this.url = opts.url || '/icons/bytesize-symbols.min.svg#'
		this.icon = this.url + opts.icon
		this.class = opts.classes || 'svg-elm-64 animated fadeIn'
	</script>
</bt-icon>
