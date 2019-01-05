import React from 'react'
import $ from 'jquery'
import asyncComponent from './asyncComponent/async';


const PadStore = asyncComponent(() =>
      import('./PadStore').then(module => module.default)
  );
  const Svg = asyncComponent(() =>
        import('./Svg').then(module => module.default)
    );


class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.start = false;
  }

  handleClick(){
  recordAudio();
  }

  render(){
    return(
      <div id='wrapper'>
        <Svg />
        <article class="clip">
  <audio id='audio' controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
        <h3 class='display-text'></h3>
        <button class='record' onClick={this.handleClick}> Record Session</button>
        <button class='stop' onClick={this.handleClick}>  Session</button>
        <PadStore />
      </div>
    )
  }
}


const recordAudio = () => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
   //console.log('getUserMedia supported.');
   navigator.mediaDevices.getUserMedia ({ audio: true})
      .then(function(stream) {
          var record = $('.record');
          var stop = $('.stop');
          var mediaRecorder = new MediaRecorder(stream);
          $('.record').click(function() {
          mediaRecorder.start();
        });
            var chunks = [];

          mediaRecorder.addEventListener('dataavailable', function(e) {
            console.log('log' + mediaRecorder.state);
          chunks.push(e.data);
        });
          $('.stop').click(function() {
          //mediaRecorder.stop();
        //  console.log(mediaRecorder.state);
          //console.log("recorder stopped");
          console.log("recorder stopped");
          var audio = $('#audio');
          var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
          chunks = [];

          var audioURL = window.URL.createObjectURL(blob);
          audio.attr('src', audioURL);
          console.log();
        });
      })

      .catch(function(err) {
         console.log('The following getUserMedia error occured: ' + err);
      }
   );
} else {
   console.log('getUserMedia not supported on your browser!');
}
}

export default Wrapper;
