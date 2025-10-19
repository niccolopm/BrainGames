const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Load model
const loader = new THREE.GLTFLoader();
loader.load('models/brain_project.glb', function(gltf) {
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
  controls.update();
  renderer.render(scene, camera);
}
