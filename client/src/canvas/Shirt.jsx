import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import state from '../store';
// import shirt from '../../public/shirt_baked.glb'

const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt_baked.gltf');
    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))
    
    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>  
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            >

                {snap.isFullTexture && (
                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                        map={fullTexture}
                        depthTest={false}
                        depthWrite={true}
                        mapAnisotropy={16}
                    />
                )}

                {snap.isLogoTexture && (
                    <Decal
                        position={[0, 0.02, 0.15]}
                        rotation={[0, 0, 0]}
                        scale={0.15}
                        map={logoTexture}
                        mapAnisotropy={16}
                        depthTest={false}
                        depthWrite={true}
                    />
                )}
                
            </mesh>
        </group>
    );
};

export default Shirt;
