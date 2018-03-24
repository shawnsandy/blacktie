<bt-todo>

  <p id="findMe" class="title is-1">Do I even Exist? {opts.hello}</p>

  <script>

   this.on('mount', function() {
    var test3 = document.getElementById('findMe')
    console.log('mount...', test3, opts.hello)
  })


  </script>
  <style type="text/scss">

    #findMe {
      color: blue;

      &.title {
        text-transform: uppercase;
      }
    }

  </style>

</bt-todo>
