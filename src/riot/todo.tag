<btr-todo>

  <p id="findMe" class="title is-1">Do I even Exist? {opts.hello}</p>

  <script>

   this.on('mount', function() {
    var test3 = document.getElementById('findMe')
    console.log('mount...', test3, opts.hello)
  })


  </script>

</btr-todo>
