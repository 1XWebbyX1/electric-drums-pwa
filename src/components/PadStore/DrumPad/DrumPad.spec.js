// External Depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';
// Our Dependencies
import { expect } from '../../utils/chai';
import sinon from 'sinon'


// Our Component
import DrumPad from './DrumPad';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('DrumPad', () => {
  var spy;
  var output;

  beforeEach(() => {
   output = shallow(
      <DrumPad id="Q" text="Q" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" keyCode={81} display="mockText" />
    );
  })

  it('should set audio element id to Q', () => {
    const audio = output.find('audio');
    expect(audio.prop('id')).to.equal('Q');
  });

  it('should set div id to  div-Q', () => {
    const drumPad = output.find('div').first();
    expect(drumPad.prop('id')).to.equal('div-Q');
  });

  it('should set h3 element id to  h3-Q', () => {
    const h3 = output.find('h3');
    expect(h3.prop('id')).to.equal('h3-Q');
  });

  describe('when a key is pressed', () => {
    beforeEach(() => {
     spy = sinon.spy(DrumPad.prototype, 'handleClick');
     output = mount(
        <DrumPad id="Q" text="Q" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" keyCode={81} display="mockText" />
      );
    })

    afterEach(() => {
      spy.restore();
    });

    it('should call handleClick when props key equals pressed key', () => {
      output.simulate('keydown', {
        keyCode: 81
      });
      expect(spy.calledOnce).to.be.true;
    });

    it('should not call handleClick when props key not equals pressed key', () => {
      output.simulate('keydown', {
        keyCode: 69
      });
      expect(spy.notCalled).to.be.true;
    });
  })


})
