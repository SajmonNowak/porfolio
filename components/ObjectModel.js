import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ObjectModel() {
  const { nodes, scene } = useLoader(GLTFLoader, "/objects/sajmon.glb")
  

  return (
      <primitive object={scene}/>
  )
}