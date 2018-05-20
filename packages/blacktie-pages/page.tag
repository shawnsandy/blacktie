<bt-page>
	<main data-is={ page }></main>
	<script>
		import route from 'riot-route'
		var self = this;
		route.start(true);

		self.page = 'bt-landing-page';

		route('page', function () {

			console.log('routes')
			switchComponent()

		})

		function switchComponent(){
			self.page = 'bt-page-component'
			self.update()
		}
	</script>
</bt-page>
