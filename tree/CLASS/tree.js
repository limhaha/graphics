
var gl;

window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height);
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );    

    //  Load shaders and initialize 
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );

	gl.useProgram( program );   

    // create a buffer on gpu and bind point    
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId ); 

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray( vPosition );


	var u_Color = gl.getUniformLocation(program, "u_Color");	

    gl.clear( gl.COLOR_BUFFER_BIT );

	//triangle
	var verticeTriangle = new Float32Array([
	
        0.0, 1.0,
        -0.5, 0.5,
        0.5, 0.5,

        0.0, 0.5,
        -0.5, 0.0,
        0.5, 0.0,

        0.0, 0.0,
        -0.5, -0.5,
        0.5, -0.5,
		]);

	gl.bufferData(gl.ARRAY_BUFFER, verticeTriangle, gl.STATIC_DRAW );	


	gl.uniform4fv(u_Color, [0.0, 1.0, 0.0, 1.0]); 	

	renderTriangle();


	//square
	var verticeSquare = new Float32Array([

		-0.15, -0.5,
        0.15, -0.5,
        -0.15, -1.0,
        0.15, -1.0    
		]);
	gl.bufferData(gl.ARRAY_BUFFER, verticeSquare, gl.STATIC_DRAW );

	// color
	gl.uniform4f(u_Color, 0.5, 0.3, 0.0, 1.0);
	
	renderSquare(); 

};

function renderTriangle() {
	gl.drawArrays( gl.TRIANGLES, 0, 9);
}

function renderSquare() {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

