// External Depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';
// Our Dependencies
import { expect } from '../../utils/chai';
import sinon from 'sinon'
import renderer from "react-test-renderer";

// Our Component
import DrumPad from './DrumPad';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('DrumPad', () => {

  it("renders correctly", () => {
    const output = renderer.create(
        <DrumPad id="Q" text="Q" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" keyCode={81} display="mockText" />
  ).toJSON();

    expect(output).to.matchSnapshot();
  });

  describe('when a key is pressed', () => {
    var spy;
    var output;

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
