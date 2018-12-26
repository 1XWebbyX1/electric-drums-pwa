import React from 'react'
import asyncComponent from './asyncComponent/async';
import store from '../data/drumPadsData'


class PadStore extends React.Component {
  render() { //dynamic import for drum pads
    const DrumPad = asyncComponent(() =>
    	    import('./DrumPad').then(module => module.default)
    	);

      var padStore = store.map( a => {
      return (
         <DrumPad id={a.key} text={a.key} src={a.audio} keyCode={a.keyCode} color={a.color} display={a.text}/>
      );
    });

    return (
        <div class="pad-store">
           {padStore}
      </div>
    );
  }
}

export default PadStore;
