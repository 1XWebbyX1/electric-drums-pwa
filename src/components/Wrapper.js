import React from 'react'
import Svg from './Svg'
import PadStore from './PadStore'

class Wrapper extends React.Component{
  render(){
    return(
      <div id='wrapper'>
        <Svg />
        <h3 class='display-text'></h3>
        <PadStore />
      </div>
    )
  }
}

export default Wrapper;
