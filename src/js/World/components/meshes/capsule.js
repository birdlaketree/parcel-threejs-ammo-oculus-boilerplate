import { CapsuleGeometry, Mesh } from 'three';

const capsule = (material, length, radius) => {
  const geometry = new CapsuleGeometry(radius, length);
  const mesh = new Mesh( geometry, material );
  // const speed = Math.random() + 0.4;

  mesh.tick = (delta) => {
    // mesh.rotation.x += delta * speed;
    // mesh.rotation.y += delta * speed;
  };

  return mesh;
}

export { capsule };