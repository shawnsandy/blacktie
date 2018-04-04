<bt-btn-confirm>

	<a if={ urlLink } href={ urlLink } onclick={ handleClickActions } class={ elmClass }>
		{ buttonLabel }
	</a>

	<button if={ !urlLink } type={ opts.type || "submit" } class={ elmClass } onclick={ handleClickActions }>
		{ buttonLabel }
	</button>

	<style>
		:scope {
			display: inline
		}
	</style>

	<script>
		const classes = opts.elmClass || "";

		this.urlLink = opts.url || "";
		this.buttonLabel = opts.label || "Delete";
		this.confirmation = opts.confirmation || "Confirm";
		this.timer = opts.timeout || 3000;
		this.elmClass = 'button ' + classes;

		handleClickActions(e) {
			const elm = e.target;

			if (this.confirmation === elm.textContent.trim()) {
				elm.textContent = this.buttonLabel;
			} else {

				elm.textContent = this.confirmation;
				setTimeout(() => {
					elm.textContent = this.buttonLabel;
				}, this.timer);
				e.preventDefault();
			}
		}

		this.on('mount', () => {

		});
	</script>
</bt-btn-confirm>
