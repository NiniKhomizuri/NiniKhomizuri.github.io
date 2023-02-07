var el = document.getElementById("element");
		var p = new PageScaleJs(el, {
      width: 1900,
      height: 1080,
      to: 599,
    });
		window.addEventListener("resize", update);
		update();
		function update() {
			var wel = document.getElementById("windowsize");
			if (wel) {
				wel.innerHTML = "" + window.innerWidth + "x" + window.innerHeight;
			}
		};