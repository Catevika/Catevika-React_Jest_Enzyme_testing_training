import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils/index';
import ListItem from './index';

describe('ListItem Component', () => {
	describe('Checking Proptypes', () => {
		it('Should NOT throw a warning', () => {
			const expectedProps = {
				title: 'Example Title',
				desc: 'Some Text'
			};
			const propsError = checkProps(ListItem, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});
	describe('Component renders', () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				title: 'Example Title',
				desc: 'Some Text'
			};
			wrapper = shallow(<ListItem {...props} />);
		});
		it('Should render without error', () => {
			const component = findByTestAttr(wrapper, 'listItemComponent');
			expect(component.length).toBe(1);
		});
		it('Should render a title', () => {
			const title = findByTestAttr(wrapper, 'componentTitle');
			expect(title.length).toBe(1);
		});
		it('Should render a desc', () => {
			const desc = findByTestAttr(wrapper, 'componentDesc');
			expect(desc.length).toBe(1);
		});
  });
  describe('Should NOT render', () => {
	let wrapper;
		beforeEach(() => {
			const props = {
				desc: 'Some Text'
			};
      wrapper = shallow(<ListItem {...props} />);
    });
    it('Should NOT render the component', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0)
    });
  });
});