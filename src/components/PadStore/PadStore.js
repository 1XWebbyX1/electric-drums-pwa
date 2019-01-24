import React from 'react'
import DrumPad from './DrumPad/DrumPad';
import store from '../../data/drumPadsData'


class PadStore extends React.Component {
  render() {
      var padStore = store.map( a =>
         <DrumPad id={a.key} text={a.key} src={a.audio} keyCode={a.keyCode} display={a.text} updateText={this.props.updateText}/>
    );

    return (
        <div class="pad-store">
           {padStore}
      </div>
    );
  }
}

export default PadStore;
