import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Loop } from './system/Loop.js';
import { createRenderer } from './system/renderer.js';
import { createScene } from './components/scene.js';
import { createCamera, createDolly } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createFloor } from './components/meshes/floor.js';
import { VrControls } from './system/VrControls.js';
import { hingeComposition } from './components/bodies/hingeComposition.js';
import { AmmoPhysics, PhysicsLoader } from '@enable3d/ammo-physics';

class World {
  constructor() {
    this.renderer = createRenderer();
    this.scene = createScene(this.renderer);
    this.camera = createCamera();
    this.lights = createLights(this.scene);
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.floorSize = 12;
    this.floor = createFloor(this.scene, this.floorSize, this.floorSize);

    const dolly = createDolly(this.camera, this.scene);
    dolly.position.set(0, 0, 0);
    const vrControls = new VrControls(this.renderer, dolly, this.camera);
    this.loop.updatables.push(vrControls);

    PhysicsLoader('static/ammo', () => this.ammoStart());  
  }

  ammoStart() {
    console.log('ammoStart.1');

    const physics = new AmmoPhysics(this.scene);
    // physics.debug.enable(true);
    this.loop.setPhysics(physics);

    const ground = physics.add.ground({ width: this.floorSize, height: this.floorSize, depth: 10, y:-5 });
    ground.visible = false;

    const nItems = 8;
    const spreadWidth = 10;
    const hue = Math.random();
    // const hue = 0.6;

    for (let i = 0; i < nItems; i++) {
      const hcp = {x: Math.random() * spreadWidth - spreadWidth/2, y:3, z:Math.random() * spreadWidth - spreadWidth/2};
      const hc = hingeComposition(hcp, hue, this.scene, this.loop, physics);
    }
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { World };