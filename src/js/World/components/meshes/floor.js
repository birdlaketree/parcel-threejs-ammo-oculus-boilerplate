import {Math, PlaneGeometry, MeshStandardMaterial, Mesh, DoubleSide } from 'three';

const createFloor = (scene, width = 20, height = 20) => {
  const geometry = new PlaneGeometry(width, height, 20, 20);
  const parameters = {
    color: 0xffffff,
    side: DoubleSide,
    emissive: 0x333333,
    roughness: 0.8,
    metalness: 0.1
  } 
  const material = new MeshStandardMaterial(parameters);
  const mesh = new Mesh( geometry, material );
  mesh.receiveShadow = true;
  mesh.rotation.x = Math.degToRad(90);
  scene.add(mesh)
  return mesh;
}

export { createFloor };