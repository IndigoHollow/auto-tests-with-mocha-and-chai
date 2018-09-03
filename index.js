<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.js"></script>
  <!-- Test inicialization -->
  <script>
    mocha.setup('bdd');
  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/2.0.0/chai.js"></script>
  <!-- Bring asset into global area -->
  <script>
    var assert = chai.assert;
  </script>
</head>

<body>

  <!-- The function we want to test -->
  <script>
    function pow(x, n) {
      return x*n;
    }
  </script>

  <!-- Specifications (Specs) -->
  <script>
  	describe("pow", function() {

	 it("multiplication of two digits", function() {
	    assert.equal(pow(3, 3), 9);
	 });	

	});
  </script>

  <!-- Test results -->
  <div id="mocha"></div>

  <!-- Start tests -->
  <script>
    mocha.run();
  </script>
  
</body>

</html>
