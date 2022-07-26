import React, {useEffect} from 'react'
import { Html, useProgress } from '@react-three/drei'
import { useHistory} from 'react-router-dom'
import './Loader.css'
function Loader() {
  const { progress } = useProgress()
return(
<Html>{progress}% loaded...</Html>
)}

export default Loader;