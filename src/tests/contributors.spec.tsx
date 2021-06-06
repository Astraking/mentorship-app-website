import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { Contributors, GitHubProfile } from '../components/contributors';

Enzyme.configure({ adapter: new Adapter() });

describe('Contributors', () => {
    it('should render correctly', () => {
        const wrapper = Enzyme.shallow(<Contributors />);
        expect(wrapper.text()).toContain('Contributors');
    });
    it('should display GitHubProfiles', () => {
        const wrapper = Enzyme.shallow(
            <GitHubProfile role={'Director'} userName={'ademola'} />
        );
        expect(wrapper.find('.contibutor-profile-link').prop('href')).toEqual(
            'https://github.com/ademola'
        );
        expect(wrapper.find('.contibutor-profile-image').prop('src')).toEqual(
            'https://github.com/ademola.png?size=200'
        );
    });
});
