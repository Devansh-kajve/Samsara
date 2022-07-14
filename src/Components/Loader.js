import React, {useEffect} from 'react'
import { useHistory} from 'react-router-dom'
import './Loader.css'
function Loader() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push('/play')
    }, 2000)
  }, [])
return(
   <div className='main'>
    <div>
        <pre>
          Please wait for all the models to load
          <br />
          WASD to move, space to jump
          <br />
        </pre>
      </div>
<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
</div>
)}

export default Loader;