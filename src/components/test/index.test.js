import fetch from 'isomorphic-fetch';
import React from "react";
import * as Enzyme from "enzyme";
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {aboutStore, AboutStore} from "../../stores/aboutStore";
import About from "../Home/About";
import {Provider} from "mobx-react";

configure({adapter: new Adapter()});
const flushPromises = () => new Promise(setImmediate);
Enzyme.configure({adapter: new Adapter()});

test('fake', () => {
    expect(true);
});

test('simple test accessibility of the main page', (done) => {
    function onSuccess(response) {
        return response.text();
    }

    function onError(error) {
        throw new Error(error);
    }

    const baseUrl = 'http://localhost:3000/#';
    fetch(baseUrl + '/').then(onSuccess, onError).then(function (response) {
        document.body.innerHTML = response;
        expect(document.body.innerHTML).toContain('My projects, portfolio, cv');
        //await expect(document.body.innerHTML).toContain('Deutsch');
        done();
    });
});

test('my comp', () => {
    const aboutStore = new aboutStore();
    const component = shallow(
        <Provider aboutStore={aboutStore}>
            <About/>
        </Provider>
    )
});

/*
it('is an example using flushPromises', async () => {
    const wrapper = mount(<App/>);
    await flushPromises();
    wrapper.update(); // In my experience, Enzyme didn't always facilitate component updates based on state changes resulting from Promises -- hence this forced re-render

    // make assertions
});
*/
/*

it('renders correctly', () => {
    const tree = renderer
        .create(<Link page="http://www.facebook.com">Facebook</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});*/
