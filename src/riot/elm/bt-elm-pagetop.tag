<bt-elm-pagetop>
	<div>
		<a href="#body" data-scroll class={ toggleButton + " " + classes }>
			<yield></yield>
		</a>
	</div>
	<script>
		this.toggleButton = 'elm-hide'
		this.classes = opts.elmClass || "back-to-top animated bounceInUp"

		const screenH = window.innerHeight

		this.on('mount', () => {

			elm = document.querySelector('.back-to-top')

			window.addEventListener('scroll', (e) => {

				if (window.pageYOffset > screenH) {

					elm.classList.remove("elm-hide")
				} else {
					elm.classList.add("elm-hide")
				}

			})

		})
	</script>
</bt-elm-pagetop>
