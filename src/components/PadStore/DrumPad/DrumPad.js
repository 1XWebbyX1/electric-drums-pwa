import React from 'react'
import $ from 'jquery'

class DrumPad extends React.Component {
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.pad = React.createRef();
    this.audio = React.createRef();
  }

  //adding event listener _______________________________________
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    $('.display-text').text('Electric drums');
  }

  //removing event listener________________________________________
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
     this.handleClick();
    }
  }

  handleClick() {
     //playing audio for a key
     const audio = this.audio.current;
     audio.currentTime = 0;
     audio.play();
     //----------------------

      //adding animation for current pressed key
      const node = this.pad.current;
      node.classList.add('float');
      setTimeout(function() {
        node.classList.remove('float');
      }, 1000);
      //--------------------------------------

      $('.display-text').animate(
        { opacity: 0.5 },
        100,
        function() {
         $('.display-text').animate({ opacity: 1}, 100);
       });

      //update text content
      $('.display-text').text(this.props.display);

  }


  render() {
    return(
      <div id={'div-' + this.props.id} className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress} ref={this.pad}>
        <h3 id={'h3-' + this.props.id}>{this.props.text}</h3>
        <audio id={this.props.id} className="clip" src={this.props.src} ref={this.audio}></audio>
      </div>
    )
  }
}

export default DrumPad;
