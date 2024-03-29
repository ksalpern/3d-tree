/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Tree.gltf 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/Tree.gltf");
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.1, 0.1, 0.1]}
      position={[0, 0.3, 0]}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Tree_lp_11_1.geometry}
          material={materials.Bark}
        />
        <mesh
          geometry={nodes.Tree_lp_11_2.geometry}
          material={materials.Tree}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Tree.gltf");
