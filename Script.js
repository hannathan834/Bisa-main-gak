import * as THREE from "three";

// ==========================
// SETUP
// ==========================

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x87ceeb);

scene.fog = new THREE.Fog(
  0x87ceeb,
  30,
  180
);

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  300
);

camera.position.set(0, 5, 9);
camera.lookAt(0, 2, -20);

const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.setSize(
  window.innerWidth,
  window.innerHeight
);

renderer.setPixelRatio(
  Math.min(window.devicePixelRatio, 2)
);

renderer.shadowMap.enabled = true;

document.body.appendChild(
  renderer.domElement
);


// ==========================
// LIGHT
// ==========================

const sunlight = new THREE.DirectionalLight(
  0xffffff,
  2
);
