import * as THREE from "./three.module.js";

// Scene
const scene = new THREE.Scene();

// Mesh
const material = new THREE.MeshBasicMaterial({color: "purple"});
const geometry = new THREE.BoxGeometry(1, 1, 1);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);


// Clock Class
const clock = new THREE.Clock()


// animate
const animate = () => {

    const elapsedTime = clock.getElapsedTime();
    mesh.rotation.x = elapsedTime * Math.PI;
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}
animate();