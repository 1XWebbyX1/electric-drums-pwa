import React from 'react'
import DrumPad from './DrumPad/DrumPad';
import store from '../../data/drumPadsData'


class PadStore extends React.Component {
  render() {
      var padStore = store.map( a =>
         <DrumPad parentNode={this.props.parentNode} id={a.key} text={a.key} src={a.audio} keyCode={a.keyCode} display={a.text}/>
    );

    return (
        <div class="pad-store">
           {padStore}
      </div>
    );
  }
}

export default PadStore;
