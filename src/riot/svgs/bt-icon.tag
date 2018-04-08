<bt-icon>
	<svg class={ elmClass }>
		<use xlink:href={ icon }></use>
	</svg>
	<script>
		const name = opts.icon || 'account-circle'
		const src = opts.srcFile || '/icons/material-icons.svg'
		const elmClass = opts.iconClass || ''
		this.icon = src + "#" + name
		this.elmClass = 'bt-icon ' + elmClass
	</script>
	<style>

        :scope {
            display: inline-flex;
        }

		.bt-icon {
			width: 16px;
			height: 16px;
			stroke-width: 2px;
		}

		.bt-icon-sm {
			width: 24px;
			height: 24px;
		}

		.bt-icon-md {
			width: 48px;
			height: 48px;
		}

		.bt-icon-lg {
			width: 64px;
			height: 64px;
		}

    </style>
</bt-icon>
