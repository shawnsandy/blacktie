<bt-elm-truncate>
	<span class="truncate">
		<yield></yield>
		</div>
		<style>
		:scope {
			display: inline;
		}
		</style>
		<script>
			this.on('mount', function() {

				const content = this.root.querySelector('.truncate');
				const limit = opts.limit || 30;
				const after = opts.after || '...';

				truncate(content, limit, after);

			})

			const truncate = function (elm, limit, after = "...") {
				if(!elm || !limit) return;
				 let truncated = elm.textContent.trim()
				 truncated = truncated.split(' ').slice(0, limit);
				 truncated = truncated.join(' ') + (after ? after : " ");
				 elm.textContent = truncated;
			}
		</script>
</bt-elm-truncate>
