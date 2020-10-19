// Creating the scene
let scene = new THREE.Scene();

// Creating the Perspective camera
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Creating the renderer
let renderer = new THREE.WebGLRenderer({ antialias: true });

// Set size of renderer
renderer.setSize( window.innerWidth, window.innerHeight );

// add renderer to DOM
document.body.appendChild( renderer.domElement );

// Create cube geometry object
let geometry = new THREE.BoxGeometry( 2, 2, 2 );

// material that will appear on object
let material = new THREE.MeshBasicMaterial({ color: 0xffffff });

// create mesh
cube = new THREE.Mesh(geometry, material);

// add cube to scene
scene.add( cube );

// reposition camera
camera.position.z = 5;

// creates a loop that makes the renderer draw the scene everytime window is refreshed (typically 60fps on a regular monitor)

function animate(){

    // call animate function
    requestAnimationFrame(animate);
    
	// Rotate cube (Change values to change speed)
	cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    // render cube
	renderer.render(scene, camera);

}

// adjust canvas size when window is resized 
function onWindowResize(){
    // Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;
	// After making changes to aspect
	camera.updateProjectionMatrix();
	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);


// run animation function
animate();

// run onWindowResize function
onWindowResize()