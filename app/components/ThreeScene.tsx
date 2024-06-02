"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface ThreeSceneProps {
    width?: number;
    height?: number;
  }

const ThreeScene: React.FC<ThreeSceneProps> = ({width, height}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const loader = new GLTFLoader();

  useEffect(() => {
    if (typeof window !== 'undefined') {

      loader.loadAsync('./models/scene.gltf').then((gltf) => {
        const model = gltf.scene;
        console.log(model);
        
        model.scale.set(1, 1, 1);
        model.position.set(0, -0.9, 0);
        model.rotateY(0.01 * Math.PI);
        model.rotateX(0.10 * Math.PI);
        

        model.traverse((node:any) => {
            if (node.isMesh) {
              node.material.roughness = -1; // Adjust as needed
              node.material.metalness = -1; // Adjust as needed
            }
          });


        scene.add( gltf.scene );
      });

      const scene = new THREE.Scene();

      // Lumière ambiante pour un éclairage global doux
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      // Lumière directionnelle pour des reflets intenses et des ombres nettes
      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
      directionalLight1.position.set(10, 10, 10);
      scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight2.position.set(-10, 10, -10);
      scene.add(directionalLight2);

      // Lumière ponctuelle pour des reflets brillants spécifiques
      const pointLight = new THREE.PointLight(0xffffff, 2, 50);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      

    //   const g = new THREE.PlaneGeometry( 900, 900 );
    //   const m = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
    //   const plane = new THREE.Mesh( g, m );
    //   plane.position.set(0, 0, -2);
    //   scene.add( plane );
 
      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);


      const renderer = new THREE.WebGLRenderer({alpha:true, antialias: true});
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
        // renderer.outputEncoding = THREE.sRGBEncoding;
      const controls = new OrbitControls( camera, renderer.domElement );
      //controls.enableDamping = true;
      controls.enabled = false; // Disable controls for now

      renderer.setSize(width ?? window.innerWidth, height ?? window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 2.7;
      //controls.update() must be called after any manual changes to the camera's transform
      controls.update();
  
    //   const geometry = new THREE.BoxGeometry();
    //   const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    //   const cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);
    
      const renderScene = () => {
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };
  
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Call the renderScene function to start the animation loop
      renderScene();
  
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        // Optionally dispose of Three.js resources
        renderer.dispose();
      };
    }
  }, []);


  return <div ref={containerRef} >
      {/*className="relative w-full h-full"> */}
          {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                <div className="p-4 bg-white rounded shadow-lg pointer-events-auto">
                <h1 className="text-xl font-bold">Overlay Card</h1>
                <p className="mt-2">This is a card overlaying the Three.js scene.</p>
                </div>
            </div> */}
  </div>;
};
export default ThreeScene;