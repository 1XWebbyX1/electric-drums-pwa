import React from 'react'
import Svg from './SVG/Svg'
import PadStore from './PadStore/PadStore'

class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.text = React.createRef();
    this.updateText = this.updateText.bind(this);
  }

  updateText(text){
    const node = this.text.current;
    node.textContent = text;

    node.style.opacity = 0.5;
    setTimeout(function() {
      node.style.opacity = 1;
    }, 100);
  }


  render(){
    return(
      <div id='wrapper'>
        <Svg />
        <h3 className='display-text' ref={this.text}>Electric Drums</h3>
        <PadStore updateText={this.updateText}/>
      </div>
    )
  }
}

export default Wrapper;
