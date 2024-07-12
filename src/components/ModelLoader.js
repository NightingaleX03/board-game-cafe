import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ModelLoader = ({ path }) => {
  const obj = useLoader(OBJLoader, path);
  const ref = useRef();

  return <primitive object={obj} ref={ref} scale={[0.1, 0.1, 0.1]} />;
};

export default ModelLoader;
