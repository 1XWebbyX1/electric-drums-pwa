// External Depedencies
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
// Our Dependencies
import { expect } from '../utils/chai';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";
// Our Component
import PadStore from './PadStore';


configure({ adapter: new Adapter() });

describe('PadStore', () => {
  const updateTextMock = jest.fn();

  it("renders correctly", () => {
     const output = renderer.create(
         <PadStore updateText={updateTextMock}/>
   ).toJSON();
     expect(output).to.matchSnapshot(); //to check DrumPads are rendered correctly from data object
  });

  it('renders 9 Drum Pads', () => {
    let app = mount(
       <PadStore updateText={updateTextMock}/>
     );
    expect(app.find('DrumPad').length).to.equal(9);
    app.unmount();
  });

})
