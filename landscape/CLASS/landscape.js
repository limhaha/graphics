var gl;

window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );


        function random(){

        return Math.random()   ;
    }

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //  Configure WebGL

    gl.viewport( 0, 0, canvas.width, canvas.height);
    gl.clearColor( 0.2, 0.2, 0.2, 1 );

    //  Load shaders and initialize
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );

	gl.useProgram( program );

    // create a buffer on gpu and bind point
    var bufferId = gl.createBuffer();
    var bff = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bindBuffer( gl.ARRAY_BUFFER, bff);
    // Associate out shader variables with our data buffer
	// attribute variable
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray( vPosition );

	// uniform variable
	var fColor = gl.getUniformLocation(program, "fColor");

    gl.clear( gl.COLOR_BUFFER_BIT );



//house
    var leaf = new Float32Array([
      -0.7, 0.7 , -1, 0.4, -0.4, 0.4,
      -0.7, 0.7, -0.1, 0.7, -0.4, 0.4,
      -0.4, 0.4, -0.1, 0.7, 0.2, 0.4
      ]);
    gl.bufferData(gl.ARRAY_BUFFER, leaf , gl.STATIC_DRAW );

    // color
    gl.uniform4fv(fColor,[0.7,0,0.2,1]); // color (R,G,B,A)
    var first = 0 // the starting index in the array of vector points.
    var count = 9 // the number of indices to be rendered.
    render(first, count) // render function

    var body = new Float32Array([
      -0.7, 0.4, -0.7, 0, -0.1, 0.4,
      -0.1, 0.4, -0.7, 0, -0.1, 0
      ]);
    gl.bufferData(gl.ARRAY_BUFFER, body  , gl.STATIC_DRAW );

    // color
    gl.uniform4f(fColor, 0.4, 0.7, 0.9, 1); // color (R,G,B,A)
    var first = 0
    var count = 6
    render(first, count) // render functio

    //sun

    var sun = new Float32Array([
      1, 1 , 0.6, 1, 0.7, 0.8,
      0.7, 0.8, 1, 1, 0.8, 0.7,
      0.8, 0.7, 1, 1, 1, 0.7
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, sun , gl.STATIC_DRAW );

    // color
    gl.uniform4fv(fColor,[1,1,0,1]); // color (R,G,B,A)
    var first = 0 // the starting index in the array of vector points.
    var count = 9 // the number of indices to be rendered.
    render(first, count) // render function

    var gr = new Float32Array([
      -1.0, 0, -1.0, -1.0, 1.0, 0,
      1.0, 0, -1.0, -1.0, 1.0, -1.0
      ]);
    gl.bufferData(gl.ARRAY_BUFFER, gr  , gl.STATIC_DRAW );

    // color
    gl.uniform4f(fColor, 0.2, 0.6, 0, 0.9); // color (R,G,B,A)
    var first = 0
    var count = 6
    render(first, count) // render functio




for(var i =1 ; i <4 ; i++){

    var x = random();
	// clear buffer bit
//1
    var leaf = new Float32Array([
      0.9-x, 1-x, 0.8-x, 0.9-x, 1-x, 0.9-x,
      0.9-x, 0.9-x, 0.8-x, 0.8-x, 1-x, 0.8-x,
      0.9-x, 0.8-x, 0.8-x, 0.7-x, 1-x, 0.7-x
    ]);

  gl.bufferData(gl.ARRAY_BUFFER, leaf , gl.STATIC_DRAW );

  // color
  gl.uniform4fv(fColor,[0,1,0,1]); // color (R,G,B,A)
  var first = 0 // the starting index in the array of vector points.
  var count = 9 // the number of indices to be rendered.
  render(first, count) // render function

  var body = new Float32Array([
    0.87-x, 0.7-x, 0.87-x, 0.5-x, 0.93-x, 0.7-x,
    0.93-x, 0.7-x, 0.93-x, 0.5-x, 0.87-x, 0.5-x
    ]);

  gl.bufferData(gl.ARRAY_BUFFER, body , gl.STATIC_DRAW );

  // color
  gl.uniform4f(fColor, 0.5, 0.25, 0, 1); // color (R,G,B,A)
  var first = 0
  var count = 6
  render(first, count) // render function

}
//2
for(var i =1 ; i <4 ; i++){

    var x = random();
	// clear buffer bit

    var leaf = new Float32Array([
      0.9-x, 1-x, 0.7-x, 0.8-x, 1.1-x, 0.8-x,
      0.9-x, 0.8-x, 0.7-x, 0.6-x, 1.1-x, 0.6-x,
      0.9-x, 0.6-x, 0.7-x, 0.4-x, 1.1-x, 0.4-x
    ]);

  gl.bufferData(gl.ARRAY_BUFFER, leaf , gl.STATIC_DRAW );

  // color
  gl.uniform4fv(fColor,[0,1,0,1]); // color (R,G,B,A)
  var first = 0 // the starting index in the array of vector points.
  var count = 9 // the number of indices to be rendered.
  render(first, count) // render function

  var body = new Float32Array([
    0.8-x, 0.4-x, 0.8-x, 0.1-x, 1-x, 0.4-x,
    1-x, 0.4-x, 1-x, 0.1-x, 0.8-x, 0.1-x
    ]);

  gl.bufferData(gl.ARRAY_BUFFER, body , gl.STATIC_DRAW );

  // color
  gl.uniform4f(fColor, 0.5, 0.25, 0, 1); // color (R,G,B,A)
  var first = 0
  var count = 6
  render(first, count) // render function

}
//3
for(var i =1 ; i <4 ; i++){

    var x = random();
	// clear buffer bit
//1
    var leaf = new Float32Array([
      -0.9+x, 1-x, -0.8+x, 0.9-x, -1+x, 0.9-x,
      -0.9+x, 0.9-x, -0.8+x, 0.8-x, -1+x, 0.8-x,
      -0.9+x, 0.8-x, -0.8+x, 0.7-x, -1+x, 0.7-x
    ]);

  gl.bufferData(gl.ARRAY_BUFFER, leaf , gl.STATIC_DRAW );

  // color
  gl.uniform4fv(fColor,[0,1,0,1]); // color (R,G,B,A)
  var first = 0 // the starting index in the array of vector points.
  var count = 9 // the number of indices to be rendered.
  render(first, count) // render function

  var body = new Float32Array([
    -0.87+x, 0.7-x, -0.87+x, 0.5-x, -0.93+x, 0.7-x,
    -0.93+x, 0.7-x, -0.93+x, 0.5-x, -0.87+x, 0.5-x
    ]);

  gl.bufferData(gl.ARRAY_BUFFER, body , gl.STATIC_DRAW );

  // color
  gl.uniform4f(fColor, 0.5, 0.25, 0, 1); // color (R,G,B,A)
  var first = 0
  var count = 6
  render(first, count) // render function
}

//2
for(var i =1 ; i <4 ; i++){

    var x = random();
	// clear buffer bit

    var leaf = new Float32Array([
      -0.9+x, 1-x, -0.7+x, 0.8-x, -1.1+x, 0.8-x,
      -0.9+x, 0.8-x, -0.7+x, 0.6-x, -1.1+x, 0.6-x,
      -0.9+x, 0.6-x, -0.7+x, 0.4-x, -1.1+x, 0.4-x
    ]);

  gl.bufferData(gl.ARRAY_BUFFER, leaf , gl.STATIC_DRAW );

  // color
  gl.uniform4fv(fColor,[0,1,0,1]); // color (R,G,B,A)
  var first = 0 // the starting index in the array of vector points.
  var count = 9 // the number of indices to be rendered.
  render(first, count) // render function

  var body = new Float32Array([
    -0.8+x, 0.4-x, -0.8+x, 0.1-x, -1+x, 0.4-x,
    -1+x, 0.4-x, -1+x, 0.1-x, -0.8+x, 0.1-x
    ]);

  gl.bufferData(gl.ARRAY_BUFFER, body , gl.STATIC_DRAW );

  // color
  gl.uniform4f(fColor, 0.5, 0.25, 0, 1); // color (R,G,B,A)
  var first = 0
  var count = 6
  render(first, count) // render function

}

};

function render(first, count) {

	gl.drawArrays( gl.TRIANGLES, first, count );
}