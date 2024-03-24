//vertex shader
const vsSource =   `
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
`


const canvas = document.querySelector(".glcanvas");
const gl = canvas.getContext("webgl");
if(gl==null){
    alert("WebGL not supported.");
}
gl.clearColor(0.0,0.0,0.0,1.0);
gl.clear(gl.COLOR_BUFFER_BIT);