import * as THREE from "./three.module.js";

// Scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, aspect.width/aspect.height, 1, 2000);
camera.position.z = 4;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera)


// Objects

// Renderer (must use canvas)
const canvas = document.querySelector(".draw"); // select the canvas element
const render = new THREE.WebGLRenderer({ canvas }); // add the webGL renderer
render.setSize(aspect.width, aspect.height); // Render the size
render.render(scene, camera); // display what current camera is capturing