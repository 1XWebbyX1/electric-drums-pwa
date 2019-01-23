import React from 'react'
import Svg from './SVG/Svg'
import PadStore from './PadStore/PadStore'

class Wrapper extends React.Component{

  render(){
    return(
      <div id='wrapper'>
        <Svg />
        <h3 className='display-text'></h3>
        <PadStore/>
      </div>
    )
  }
}

export default Wrapper;
