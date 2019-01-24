// External Depedencies
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
// Our Dependencies
import { expect } from './utils/chai';
import Adapter from 'enzyme-adapter-react-16';
// Our Component
import Wrapper from './Wrapper';


configure({ adapter: new Adapter() });


describe('Wrapper', () => {
  let app;

  beforeEach(() => {
   app = mount(
      <Wrapper />
    );
  })
  afterEach(() => {
    app.unmount();
  })
  it('renders nested components', () => {
    expect(app.find('Svg').length).to.equal(1);
    expect(app.find('PadStore').length).to.equal(1);
  });

  it('renders display text as Electric Drums', () => {
    const h3 = app.find('h3').first();
    expect(h3.text()).to.equal('Electric Drums');
  });

  it('on updateText changes text', () => {
   const drumpad = app.find('DrumPad').first();
   drumpad.props().updateText('mockText');
   app.update();
   const h3 = app.find('h3').first();
   expect(h3.text()).to.equal('mockText');
 });

})
