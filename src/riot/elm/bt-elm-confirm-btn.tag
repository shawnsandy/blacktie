<bt-elm-confirm-btn>

	<div class="elm-inline" if={ urlLink }>
		<a href={ urlLink } onclick={ handleClickActions } class={ elmClass }>
			{ buttonLabel }
		</a>
	</div>

	<div class="elm-inline" if={ !urlLink }>
		<button type={ opts.type || "submit" } class={ elmClass } onclick={ handleClickActions }>
			{ buttonLabel }
		</button>
	</div>

	<script>
		const url = opts.url;
		const label = opts.label || "Delete";
		const confirmLabel = opts.confirmation || "Confirm";
		const timeout = opts.timeout || 3000;
		const classes = opts.elmClass || "";
		const buttonClass = opts.buttonClass || "";
		const buttonType = opts.buttonType || "submit";

		this.urlLink = url;
		this.buttonLabel = label;
		this.confirmation = confirmLabel;
		this.timer = timeout;
		this.elmClass = 'button ' + classes;

		handleClickActions(e)
		{
			const elm = e.target;

			if (this.confirmation === elm.innerHTML.trim()) {
				elm.innerHTML = this.buttonLabel;
				console.log("confirmed");

			} else {
				console.log('unconfirmed');
				elm.innerHTML = this.confirmation;
				setTimeout(() => {
					elm.innerHTML = this.buttonLabel;
				}, this.timer);
				e.preventDefault();
			}
		}

		this.on('mount', () => {

		});
	</script>

</bt-elm-confirm-btn>
