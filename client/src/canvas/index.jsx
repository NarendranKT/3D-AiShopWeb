import { Canvas } from '@react-three/fiber';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import { Environment, Center } from '@react-three/drei'
import state from '../store';
import { useSnapshot } from 'valtio';


const CanvasModel = () => {
  const snap = useSnapshot(state)
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'
      
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city' blur={0.5}/>
      
      <CameraRig>
        <Backdrop/>
        <Center>
          <Shirt/>
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
