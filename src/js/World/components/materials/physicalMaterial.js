import {
  Vector2,
  MeshPhysicalMaterial,
  DoubleSide
} from 'three';
import { textureHandler } from '../../system/textureHandler';

// const physicalMaterial_mapUrl                = new URL('/assets/textures/Concrete_Damaged_tfvfdacn_2K_surface_ms/tfvfdacn_2K_Albedo.jpg', import.meta.url);
// const physicalMaterial_aoMapUrl              = new URL('/assets/textures/noise-roughness.png', import.meta.url);
// const physicalMaterial_displacementMapUrl    = new URL('/assets/textures/Concrete_Damaged_tfvfdacn_2K_surface_ms/tfvfdacn_2K_Displacement.jpg', import.meta.url);
const physicalMaterial_normalMapUrl          = new URL('/assets/textures/noise-normal.png', import.meta.url);
const physicalMaterial_clearcoatNormalMapUrl = new URL('/assets/textures/Scratched_gold_01_1K_Normal.png', import.meta.url);
// const physicalMaterial_roughnessMapUrl       = new URL('/assets/textures/noise-roughness.png', import.meta.url);

const frostedPlastic_aoMapUrl           = new URL('/assets/textures/noise-roughness.png', import.meta.url);
const frostedPlastic_normalMapUrl       = new URL('/assets/textures/noise-normal.png', import.meta.url);
const frostedPlastic_roughnessMapUrl    = new URL('/assets/textures/noise-roughness.png', import.meta.url);

const shinyNoiseMetal_normalMapUrl       = new URL('/assets/textures/rmpkcg0p_4K_Normal.jpg', import.meta.url);
const shinyNoiseMetal_roughnessMapUrl    = new URL('/assets/textures/rmpkcg0p_4K_Roughness.jpg', import.meta.url);
const shinyNoiseMetal_metalnessMapUrl    = new URL('/assets/textures/rmpkcg0p_4K_Metalness.jpg', import.meta.url);
const shinyNoiseMetal_aoMapUrl    = new URL('/assets/textures/rmpkcg0p_4K_ao.jpg', import.meta.url);

const plasticColor = (color, envmap) => {
  // const mapTexture = textureHandler(mapUrl);
  // const aoTexture = textureHandler(aoMapUrl);
  // const displacementTexture = textureHandler(displacementMapUrl);
  const normalMap = textureHandler(physicalMaterial_normalMapUrl);
  const clearcoatNormalMap = textureHandler(physicalMaterial_clearcoatNormalMapUrl);
  // const roughnessTexture = textureHandler(roughnessMapUrl);

  const parameters = {
    envMap: envmap.texture,
    envMapIntensity: 0.9,

    clearcoat: 0,
		metalness: 0.1,
    roughness: 0.9,
    color: color,
    // emissive: 0x000000,

    // map: mapTexture,
    // aoMap: aoTexture,
    // displacementMap: displacementTexture,
    // displacementScale: 1,
    // displacementBias: -0.5,
    // roughnessMap: roughnessTexture,

    normalMap: normalMap,
		normalScale: new Vector2( 0.02, 0.02 ),
		// clearcoatNormalMap: clearcoatNormalMap,
		// clearcoatNormalScale: new Vector2( 2.0, 2.0 )
    // clearcoatNormalScale: new Vector2( 1, 1 )
  }
  const material = new MeshPhysicalMaterial(parameters);
  return material;
}

const shinyNoiseMetal = (color, envmap) => {
  // const mapTexture = textureHandler(mapUrl);
  const aoTexture = textureHandler(shinyNoiseMetal_aoMapUrl);
  // const displacementTexture = textureHandler(displacementMapUrl);
  const normalMap = textureHandler(shinyNoiseMetal_normalMapUrl);
  const clearcoatNormalMap = textureHandler(physicalMaterial_clearcoatNormalMapUrl);
  const roughnessTexture = textureHandler(shinyNoiseMetal_roughnessMapUrl);
  const metalnessMap = textureHandler(shinyNoiseMetal_metalnessMapUrl);

  const parameters = {
    envMap: envmap.texture,
    envMapIntensity: 0.9,

    clearcoat: 0,
    color: color,
    // emissive: 0x000000,

    // map: mapTexture,
    aoMap: aoTexture,

    // displacementMap: displacementTexture,
    // displacementScale: 1,
    // displacementBias: -0.5,

    roughnessMap: roughnessTexture,
    roughness: 0.3,

    normalMap: normalMap,
		normalScale: new Vector2( 0.1, 0.1 ),

		// clearcoatNormalMap: clearcoatNormalMap,
		// clearcoatNormalScale: new Vector2( 2.0, - 2.0 )

    metalnessMap: metalnessMap,
    metalness: 0.98
  }
  const material = new MeshPhysicalMaterial(parameters);
  return material;
}

const matteFrostedPlastics = (color, envmap) => {
  const repeat = 1;
  // const mapTexture = textureHandler(mapUrl, repeat);
  const aoTexture = textureHandler(frostedPlastic_aoMapUrl, repeat);
  // const displacementTexture = textureHandler(displacementMapUrl, repeat);
  const normalMap = textureHandler(frostedPlastic_normalMapUrl, repeat);
  const clearcoatNormalMap = textureHandler(frostedPlastic_normalMapUrl, repeat);
  const roughnessTexture = textureHandler(frostedPlastic_roughnessMapUrl, repeat);

  const parameters = {
    envMap: envmap.texture,
    envMapIntensity: 0.8,

    clearcoat: 0.1,
    clearcoatRoughness: 0.8,
		metalness: 0,
    roughness: 0.1,
    color: color,
    // color: 0xdddff,
    // emissive: 0x000000,

    transmission: 0.2,
    reflectivity: 0,
    ior: 2.1, // from 1.0 to 2.333
    specularIntensity: 0.2,
    // thickness: 0.0001,
    thickness: 0.04,

    sheen: 0,

    // side: DoubleSide,
    // opacity: 0.90,
		// transparent: false,

    // map: roughnessTexture,
    aoMap: aoTexture,
    // displacementMap: displacementTexture,
    // displacementScale: 1,
    // displacementBias: -0.5,
    // roughnessMap: roughnessTexture,

    normalMap: normalMap,
		normalScale: new Vector2(0.02, 0.02),
		clearcoatNormalMap: clearcoatNormalMap,
    // clearcoatNormalScale: new Vector2(0.4, 0.4)
  }
  const material = new MeshPhysicalMaterial(parameters);
  return material;
}

const physicalMaterialShinyMetal = (color, envmap) => {
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
  plasticColor,
  shinyNoiseMetal,
  matteFrostedPlastics,
  physicalMaterialShinyMetal
};