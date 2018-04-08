<bt-icon>
	<svg class="elm-color-blue">
		<use xlink:href={ icon }></use>
	</svg>
	<script>
		const name = opts.icon || 'account-circle'
		const src = opts.src || '/icons/material-icons.svg'
		this.icon = src + "#" + name
	</script>
	<style>
        :scope {
            display: inline-block;
        }
    </style>
</bt-icon>
