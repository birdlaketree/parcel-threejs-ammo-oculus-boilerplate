import { BoxGeometry, Mesh } from 'three';

const cube = (material, width, height, depth) => {
  const geometry = new BoxGeometry(width, height, depth);
  geometry.attributes.uv2 = geometry.attributes.uv;
  const mesh = new Mesh( geometry, material );

  return mesh;
}

export { cube };