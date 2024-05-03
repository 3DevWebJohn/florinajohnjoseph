"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Keyboard(props) {
  const { nodes, materials } = useGLTF("/webkeyboard.glb");

  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane061.geometry}
        material={materials.Material}
        position={[0, 0.538, 0]}
        scale={[2.173, 1.029, 0.916]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[-1.711, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.001"]}
        position={[-1.421, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.001"]}
        position={[-1.985, 0.587, -0.377]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.001"]}
        position={[-1.146, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.001"]}
        position={[-0.859, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.001"]}
        position={[-0.571, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Material.001"]}
        position={[-0.283, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["Material.001"]}
        position={[-0.004, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.001"]}
        position={[0.287, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials["Material.001"]}
        position={[0.566, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials["Material.001"]}
        position={[0.856, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials["Material.001"]}
        position={[1.135, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials["Material.001"]}
        position={[1.427, 0.587, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["Material.001"]}
        position={[1.838, 0.587, -0.377]}
        scale={[0.27, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.001"]}
        position={[-1.562, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials["Material.001"]}
        position={[-1.282, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials["Material.001"]}
        position={[-1.001, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials["Material.001"]}
        position={[-0.717, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials["Material.001"]}
        position={[-0.429, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={materials["Material.001"]}
        position={[-0.148, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials["Material.001"]}
        position={[0.14, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials["Material.001"]}
        position={[0.422, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials["Material.001"]}
        position={[0.703, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials["Material.001"]}
        position={[0.991, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={materials["Material.001"]}
        position={[1.273, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials["Material.001"]}
        position={[1.563, 0.587, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["Material.001"]}
        position={[1.91, 0.587, -0.091]}
        scale={[0.198, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials["Material.001"]}
        position={[-1.912, 0.587, -0.091]}
        scale={[0.2, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={materials["Material.001"]}
        position={[-1.489, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={materials["Material.001"]}
        position={[-1.212, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={materials["Material.001"]}
        position={[-0.925, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={materials["Material.001"]}
        position={[-0.641, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={materials["Material.001"]}
        position={[-0.357, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={materials["Material.001"]}
        position={[-0.07, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={materials["Material.001"]}
        position={[0.21, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane035.geometry}
        material={materials["Material.001"]}
        position={[0.497, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane036.geometry}
        material={materials["Material.001"]}
        position={[0.777, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={materials["Material.001"]}
        position={[1.064, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane038.geometry}
        material={materials["Material.001"]}
        position={[1.348, 0.587, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane039.geometry}
        material={materials["Material.001"]}
        position={[1.801, 0.587, 0.193]}
        scale={[0.305, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane040.geometry}
        material={materials["Material.001"]}
        position={[-1.88, 0.587, 0.193]}
        scale={[0.232, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={materials["Material.001"]}
        position={[-1.34, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane042.geometry}
        material={materials["Material.001"]}
        position={[-1.065, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane043.geometry}
        material={materials["Material.001"]}
        position={[-0.784, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane044.geometry}
        material={materials["Material.001"]}
        position={[-0.498, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane045.geometry}
        material={materials["Material.001"]}
        position={[-0.214, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane046.geometry}
        material={materials["Material.001"]}
        position={[0.068, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={materials["Material.001"]}
        position={[0.352, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={materials["Material.001"]}
        position={[0.637, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials["Material.001"]}
        position={[0.915, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane050.geometry}
        material={materials["Material.001"]}
        position={[1.2, 0.587, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane051.geometry}
        material={materials["Material.001"]}
        position={[1.725, 0.587, 0.477]}
        scale={[0.377, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane052.geometry}
        material={materials["Material.001"]}
        position={[-1.796, 0.587, 0.477]}
        scale={[0.31, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane053.geometry}
        material={materials["Material.001"]}
        position={[-1.243, 0.587, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane054.geometry}
        material={materials["Material.001"]}
        position={[-1.588, 0.587, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane055.geometry}
        material={materials["Material.001"]}
        position={[-1.939, 0.587, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane056.geometry}
        material={materials["Material.001"]}
        position={[0.875, 0.587, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane057.geometry}
        material={materials["Material.001"]}
        position={[1.239, 0.587, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane058.geometry}
        material={materials["Material.001"]}
        position={[1.589, 0.587, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane059.geometry}
        material={materials["Material.001"]}
        position={[1.928, 0.587, 0.745]}
        scale={[0.17, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane060.geometry}
        material={materials["Material.001"]}
        position={[-0.181, 0.587, 0.745]}
        scale={[0.859, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane115.geometry}
        material={nodes.Plane115.material}
        position={[-1.243, 0.049, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane116.geometry}
        material={nodes.Plane116.material}
        position={[-1.588, 0.049, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane117.geometry}
        material={nodes.Plane117.material}
        position={[-1.939, 0.049, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane118.geometry}
        material={nodes.Plane118.material}
        position={[0.875, 0.049, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane119.geometry}
        material={nodes.Plane119.material}
        position={[1.239, 0.049, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane120.geometry}
        material={nodes.Plane120.material}
        position={[1.589, 0.049, 0.745]}
        scale={[0.165, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane121.geometry}
        material={nodes.Plane121.material}
        position={[1.928, 0.049, 0.745]}
        scale={[0.17, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane122.geometry}
        material={nodes.Plane122.material}
        position={[-0.181, 0.049, 0.745]}
        scale={[0.859, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane103.geometry}
        material={nodes.Plane103.material}
        position={[-1.34, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane104.geometry}
        material={nodes.Plane104.material}
        position={[-1.065, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane105.geometry}
        material={nodes.Plane105.material}
        position={[-0.784, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane106.geometry}
        material={nodes.Plane106.material}
        position={[-0.498, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane107.geometry}
        material={nodes.Plane107.material}
        position={[-0.214, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane108.geometry}
        material={nodes.Plane108.material}
        position={[0.068, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane109.geometry}
        material={nodes.Plane109.material}
        position={[0.352, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane110.geometry}
        material={nodes.Plane110.material}
        position={[0.637, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane111.geometry}
        material={nodes.Plane111.material}
        position={[0.915, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane112.geometry}
        material={nodes.Plane112.material}
        position={[1.2, 0.049, 0.477]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane113.geometry}
        material={nodes.Plane113.material}
        position={[1.725, 0.049, 0.477]}
        scale={[0.377, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane114.geometry}
        material={nodes.Plane114.material}
        position={[-1.796, 0.049, 0.477]}
        scale={[0.31, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane090.geometry}
        material={nodes.Plane090.material}
        position={[-1.489, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane091.geometry}
        material={nodes.Plane091.material}
        position={[-1.212, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane092.geometry}
        material={nodes.Plane092.material}
        position={[-0.925, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane093.geometry}
        material={nodes.Plane093.material}
        position={[-0.641, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane094.geometry}
        material={nodes.Plane094.material}
        position={[-0.357, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane095.geometry}
        material={nodes.Plane095.material}
        position={[-0.07, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane096.geometry}
        material={nodes.Plane096.material}
        position={[0.21, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane097.geometry}
        material={nodes.Plane097.material}
        position={[0.497, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane098.geometry}
        material={nodes.Plane098.material}
        position={[0.777, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane099.geometry}
        material={nodes.Plane099.material}
        position={[1.064, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane100.geometry}
        material={nodes.Plane100.material}
        position={[1.348, 0.049, 0.193]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane101.geometry}
        material={nodes.Plane101.material}
        position={[1.801, 0.049, 0.193]}
        scale={[0.305, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane102.geometry}
        material={nodes.Plane102.material}
        position={[-1.88, 0.049, 0.193]}
        scale={[0.232, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane076.geometry}
        material={nodes.Plane076.material}
        position={[-1.562, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane077.geometry}
        material={nodes.Plane077.material}
        position={[-1.282, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane078.geometry}
        material={nodes.Plane078.material}
        position={[-1.001, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane079.geometry}
        material={nodes.Plane079.material}
        position={[-0.717, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane080.geometry}
        material={nodes.Plane080.material}
        position={[-0.429, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane081.geometry}
        material={nodes.Plane081.material}
        position={[-0.148, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane082.geometry}
        material={nodes.Plane082.material}
        position={[0.14, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane083.geometry}
        material={nodes.Plane083.material}
        position={[0.422, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane084.geometry}
        material={nodes.Plane084.material}
        position={[0.703, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane085.geometry}
        material={nodes.Plane085.material}
        position={[0.991, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane086.geometry}
        material={nodes.Plane086.material}
        position={[1.273, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane087.geometry}
        material={nodes.Plane087.material}
        position={[1.563, 0.049, -0.091]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane088.geometry}
        material={nodes.Plane088.material}
        position={[1.91, 0.049, -0.091]}
        scale={[0.198, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane089.geometry}
        material={nodes.Plane089.material}
        position={[-1.912, 0.049, -0.091]}
        scale={[0.2, 0.133, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane062.geometry}
        material={nodes.Plane062.material}
        position={[-1.711, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane063.geometry}
        material={nodes.Plane063.material}
        position={[-1.421, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane064.geometry}
        material={nodes.Plane064.material}
        position={[-1.985, 0.049, -0.377]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane065.geometry}
        material={nodes.Plane065.material}
        position={[-1.146, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane066.geometry}
        material={nodes.Plane066.material}
        position={[-0.859, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane067.geometry}
        material={nodes.Plane067.material}
        position={[-0.571, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane068.geometry}
        material={nodes.Plane068.material}
        position={[-0.283, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane069.geometry}
        material={nodes.Plane069.material}
        position={[-0.004, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane070.geometry}
        material={nodes.Plane070.material}
        position={[0.287, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane071.geometry}
        material={nodes.Plane071.material}
        position={[0.566, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane072.geometry}
        material={nodes.Plane072.material}
        position={[0.856, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane073.geometry}
        material={nodes.Plane073.material}
        position={[1.135, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane074.geometry}
        material={nodes.Plane074.material}
        position={[1.427, 0.049, -0.377]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane075.geometry}
        material={nodes.Plane075.material}
        position={[1.838, 0.049, -0.377]}
        scale={[0.27, 0.133, 0.133]}
      />
    </group>
  );
}

export default Keyboard;
useGLTF.preload("/webkeyboard.glb");
