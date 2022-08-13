import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import './Loader.css';
function Loader() {
  const { progress } = useProgress()
return(
<Html>{progress.toFixed()}% loaded...</Html>
)}

export default Loader;