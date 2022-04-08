var timeSpent = 0;
var gl;

function render() {
  timeSpent += 1.0 / 60.0;
	var factor = (Math.sin(timeSpent) + 1) * 0.5;
	gl.clearColor(factor * 0.7 + 0.3, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function renderLoop() {
	render();
	window.setTimeout(renderLoop, 1000 / 60);
}

function initWebGL(canvas) {
	gl = canvas.getContext("webgl");
	if (!gl) {
		alert("Unable to initialize WebGL. Your browser may not support it.");
	}
}

function onLoad() {
	var canvas = document.getElementById("canvas");
	initWebGL(canvas);
	if (gl) {
		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		renderLoop();
	}
}