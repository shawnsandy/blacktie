<bt-btn-confirm>

	<a if={ urlLink } href={ urlLink } onclick={ handleClickActions } class={ elmClass }>
		{ buttonLabel }
	</a>

	<button if={ !urlLink } type={ opts.type || "submit" } class={ elmClass } onclick={ handleClickActions }>
		{ buttonLabel }
	</button>

	<style>
		:scope {
			display: inline-block
		}
	</style>

	<script src="./confirm.js"></script>
</bt-btn-confirm>
