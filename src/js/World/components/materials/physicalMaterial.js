import {
  Vector2,
  MeshPhysicalMaterial,
} from 'three';
import { textureHandler } from '../../system/textureHandler';

// const mapUrl             = new URL('/assets/textures/Concrete_Damaged_tfvfdacn_2K_surface_ms/tfvfdacn_2K_Albedo.jpg', import.meta.url);
// const aoMapUrl           = new URL('/assets/textures/Concrete_Damaged_tfvfdacn_2K_surface_ms/tfvfdacn_2K_AO.jpg', import.meta.url);
// const displacementMapUrl = new URL('/assets/textures/Concrete_Damaged_tfvfdacn_2K_surface_ms/tfvfdacn_2K_Displacement.jpg', import.meta.url);
const normalMapUrl       = new URL('/assets/textures/Water_1_M_Normal.jpg', import.meta.url);
const clearcoatNormalMapUrl       = new URL('/assets/textures/Scratched_gold_01_1K_Normal.png', import.meta.url);
// const roughnessMapUrl    = new URL('/assets/textures/Concrete_Damaged_tfvfdacn_2K_surface_ms/tfvfdacn_2K_Roughness.jpg', import.meta.url);

const colorPhysicalMaterialA = (color, envmap) => {
  // const mapTexture = textureHandler(mapUrl);
  // const aoTexture = textureHandler(aoMapUrl);
  // const displacementTexture = textureHandler(displacementMapUrl);
  const normalMap = textureHandler(normalMapUrl);
  const clearcoatNormalMap = textureHandler(clearcoatNormalMapUrl);
  // const roughnessTexture = textureHandler(roughnessMapUrl);

  const parameters = {
    envMap: envmap.texture,

    clearcoat: 0.4,
    cleacoatRoughness: 1,
		metalness: 0.1,
    roughness: 0.8,
    color: color,
    emissive: 0x000000,

    // map: mapTexture,
    // aoMap: aoTexture,
    // displacementMap: displacementTexture,
    // displacementScale: 1,
    // displacementBias: -0.5,
    // roughnessMap: roughnessTexture,

    normalMap: normalMap,
		normalScale: new Vector2( 0.02, 0.02 ),
		clearcoatNormalMap: clearcoatNormalMap,
		clearcoatNormalScale: new Vector2( 2.0, - 2.0 )
    // clearcoatNormalScale: new Vector2( 1, 1 )
  }
  const material = new MeshPhysicalMaterial(parameters);
  return material;
}

const colorPhysicalMaterialB = (color, envmap) => {
  // const mapTexture = textureHandler(mapUrl);
  // const aoTexture = textureHandler(aoMapUrl);
  // const displacementTexture = textureHandler(displacementMapUrl);
  const normalMap = textureHandler(normalMapUrl);
  const clearcoatNormalMap = textureHandler(clearcoatNormalMapUrl);
  // const roughnessTexture = textureHandler(roughnessMapUrl);

  const parameters = {
    envMap: envmap.texture,

    clearcoat: 0.2,
    cleacoatRoughness: 1,
		metalness: 0.1,
    roughness: 0.9,
    color: color,
    emissive: 0x000000,

    // map: mapTexture,
    // aoMap: aoTexture,
    // displacementMap: displacementTexture,
    // displacementScale: 1,
    // displacementBias: -0.5,
    // roughnessMap: roughnessTexture,

    // normalMap: normalMap,
		// normalScale: new Vector2( 0.02, 0.02 ),
		// clearcoatNormalMap: clearcoatNormalMap,
		// clearcoatNormalScale: new Vector2( 2.0, - 2.0 )
  }
  const material = new MeshPhysicalMaterial(parameters);
  return material;
}

export {
  colorPhysicalMaterialA,
  colorPhysicalMaterialB
};