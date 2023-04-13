import React from 'react';
import {render,screen} from '@testing-library/react'
import ResumePreview from "../View/ResumePreview/index"
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('ResumePreview component', () => {
    const initialState = { };
    const mockStore = configureStore();
    let store;
        beforeEach(() => {
          store = mockStore(initialState);
          render(
               <Provider store={store} >
                   <ResumePreview />
                </Provider>
           );
    })
    
    it('contains "Reset" text in dom', () => {
        const resetText = screen.getByText('Reset');
        expect(resetText).toBeInTheDocument;
    });

});

