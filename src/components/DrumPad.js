import React from 'react'
import $ from 'jquery';


class DrumPad extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: ''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //adding event listener _______________________________________
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    $('.display-text').text('Electric Drums')
  }
  //-------------------------------------------------------------

  //removing event listener________________________________________
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  //-----------------------------------------------------------------

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
     this.handleClick();
    }
  }

  handleClick() {
     //playing audio for a key
     const audio = document.getElementById(this.props.id);
      audio.currentTime = 0;
      audio.play();
     //----------------------

      //adding animation for current pressed key
      var str = 'div-' + this.props.id;
      $('#' + str).addClass('float');
      setTimeout(function() {
        $('#' + str).removeClass('float');
      }, 1000);
      //--------------------------------------


      //animations for display text
      $('.display-text').animate(
      { opacity: 0.5 },
      100,
      function() {
       $('.display-text').animate({ opacity: 1}, 100);
    }
  );
       $('.display-text').text(this.props.display);
       //--------------------------------
  }


  render() {
    return(
      <div id={'div-' + this.props.id} className="drum-pad" onClick={this.handleClick}>
        <h3 id={'h3-' + this.props.id}>{this.props.text}</h3>
        <audio id={this.props.id} className="clip" src={this.props.src}></audio>
      </div>
    )
  }
}

export default DrumPad;
