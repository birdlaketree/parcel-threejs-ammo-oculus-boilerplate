import {MeshStandardMaterial} from 'three';

const colorStandardMaterial = color => {
  const parameters = {
    color: color,
    emissive: 0x000000,
    roughness: 0.3,
    metalness: 0.1
  } 
  const material = new MeshStandardMaterial(parameters);
  return material;
}

export { colorStandardMaterial };