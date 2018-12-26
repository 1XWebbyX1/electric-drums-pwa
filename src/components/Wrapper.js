import React from 'react'
import asyncComponent from './asyncComponent/async';


const PadStore = asyncComponent(() =>
      import('./PadStore').then(module => module.default)
  );
  const Svg = asyncComponent(() =>
        import('./Svg').then(module => module.default)
    );


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
