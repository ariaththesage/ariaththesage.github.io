var canvas;
var timeSpent = 0;
var gl;


function onLoad()
{
	canvas = document.getElementById("canvas");

	initWebGL(canvas);

	if (gl) {
		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);

		updateLoop();
		renderLoop();
	}
}


function Update ()
{
	console.log ("Ticking...");
}


function Render ()
{
	timeSpent += 1.0 / 60.0;

	var factor = (Math.sin(timeSpent) + 1) * 0.5;

	gl.clearColor(factor * 0.7 + 0.3, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}


// ---------------------------------------------------------------
// All code below this line is considered INTERNAL.
// Please: DO NO TOUCH IT IF YOU ARE NOT SURE WHAT ARE YOU DOING!
// ---------------------------------------------------------------


function initWebGL(canvas)
{
	gl = canvas.getContext("webgl");

	if (!gl)
	{
		alert("Unable to initialize WebGL. Your browser may not support it.");
	}
}


function updateLoop ()
{
	Update ();
	window.setTimeout (updateLoop, (1000/60));
}


function renderLoop() {
	Render();
	window.setTimeout(renderLoop, (1000 / 60));
}