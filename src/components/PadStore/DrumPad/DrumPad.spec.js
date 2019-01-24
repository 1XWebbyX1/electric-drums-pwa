// External Depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';
// Our Dependencies
import { expect } from '../../utils/chai';
import sinon from 'sinon'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Our Component
import DrumPad from './DrumPad';


configure({ adapter: new Adapter() });


describe('DrumPad', () => {
  var spy;
  var output;
  const mockFunc = jest.fn();

  beforeEach(() => {
   output = shallow(
      <DrumPad id="Q" text="Q" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" keyCode={81} display="mockText" updateText={mockFunc}/>
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
        <DrumPad id="Q" text="Q" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" keyCode={81} display="mockText" updateText={mockFunc}/>
      );
    })

    afterEach(() => {
      spy.restore();
      output.unmount();
      mockFunc.mockClear();
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

  describe('when a drum pad is clicked', () => {
    beforeEach(() => {
     output = mount(
        <DrumPad id="Q" text="Q" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" keyCode={81} display="mockText" updateText={mockFunc}/>
      );
    })

    afterEach(() => {
      output.unmount();
      mockFunc.mockClear();
    });

    it('should call mock updateText function once', () => {
      output.simulate('click');
      expect(mockFunc.mock.calls.length).to.equal(1);
    })

    it('should add and remove float class', () => {
      expect(output).to.not.have.className('float');
      output.simulate('click');
      expect(output).to.have.className('float');
    })

  })


})
