"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
    width?: number;
    height?: number;
  }

const ThreeScene: React.FC<ThreeSceneProps> = ({width, height}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width ?? window.innerWidth, height ?? window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;
  
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
    
      const renderScene = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
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


  return <div ref={containerRef}/>;
};
export default ThreeScene;