import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";


const Backdrop = () => {
  const shadows = useRef();

  return <AccumulativeShadows
    ref={shadows}
    position={[0, 0, -0.15]}
    temporal
    frames={60}
    alphaTest={0.85}
    scale={4}
    rotation={[Math.PI/2, 0, 0]}
  >
    <RandomizedLight
      amount={4}
      radius={9}
      intensity={3}
      ambient={0.25}
      position={[3, 5, -12]}
      
    />

    <RandomizedLight
      amount={4}
      radius={5}
      intensity={0.25}
      ambient={0.55}
      position={[-5, 5, 12]}
    />

  </AccumulativeShadows>
};

export default Backdrop;
