import {
  MeshStandardMaterial,
  MeshPhysicalMaterial
} from 'three';

const colorStandardMaterial = (color) => {
  const parameters = {
    color: color,
    emissive: 0x000000,
    roughness: 0.8,
    metalness: 0.1,
  } 
  const material = new MeshStandardMaterial(parameters);
  return material;
}

const colorPhysicalMaterial = (color, envmap) => {
  console.log('envmap', envmap);

  const parameters = {
    color: color,
    emissive: 0x000000,
    roughness: 0,
    metalness: 1,
    envMap: envmap.texture
  } 
  const material = new MeshPhysicalMaterial(parameters);
  return material;
}

export {
  colorStandardMaterial,
  colorPhysicalMaterial
};