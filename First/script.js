import * as THREE from "..three.module.js";

//Scene
const scene = new THREE.Scene();

//Group
const group = new THREE.Group();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 1;

// Mesh Two
const geometryT = new THREE.BoxGeometry(1, 1, 1)
const materialT = new THREE.MeshBasicMaterial({ color: "green" });
const meshT = new THREE.Mesh(geometryT, materialT);
mesh.position.y = 2;

// Adding both meshes inside group class
group.add(mesh, meshT);
group.position.x = 3;
scene.add(group);

// AxesHelper
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}
// near value is 1, and far value is 2000
const camera = new THREE.PerspectiveCamera(75, aspect.width/aspect.height, 1, 2000);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 5;
scene.add(camera);


// Objects

// Renderer (must use canvas)
const canvas = document.querySelector(".draw"); // select the canvas element
const render = new THREE.WebGLRenderer({ canvas }); // add the webGL renderer
render.setSize(aspect.width, aspect.height); // Render the size
render.render(scene, camera); // display what current camera is capturing