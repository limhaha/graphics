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
    gl.clearColor( 0,0, 0, 1 );

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


   for(var i =0 ; i <50 ; i++){
//house
var x = random();
var y = random();
var z = random();
    var leaf = new Float32Array([
    x-z,y-z , x-z,-y-z , -x-z,y-z,
    -x-z,y-z , -x-z,-y-z , x-z,-y-z
      ]);
    gl.bufferData(gl.ARRAY_BUFFER, leaf , gl.STATIC_DRAW );

    // color
    gl.uniform4fv(fColor,[x,y,z,1]); // color (R,G,B,A)
    var first = 0 // the starting index in the array of vector points.
    var count = 6 // the number of indices to be rendered.
    render(first, count) // render function


}
};

function render(first, count) {

	gl.drawArrays( gl.TRIANGLES, first, count );
}