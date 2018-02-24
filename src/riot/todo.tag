<todo>

  <p id="findMe">Do I even Exist?</p>
  <p>Is this real life?</p>
  <p>Or just fantasy?</p>
  <script>

  var test1 = document.getElementById('findMe')

  console.log('test1', test1)  // Fails

  this.on = (mount) => {
    console.log('before mount')
  }

  </script>
</todo>
