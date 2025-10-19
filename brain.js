const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

// Load brain model
const loader = new THREE.GLTFLoader();
loader.load('models/brain.glb', function(gltf) {
  const brain = gltf.scene;
  brain.scale.set(2, 2, 2);
  scene.add(brain);
  animate();
}, undefined, function(error) {
  console.error('Error loading model:', error);
});

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  scene.rotation.y += 0.005;
  renderer.render(scene, camera);
}
