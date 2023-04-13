import React from 'react';
import {render, fireEvent,screen} from '@testing-library/react'
import Dashboard from "../View/Dashboard/dashboard"
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import resume from './resume.json'

describe('Dashboard component', () => {
    const initialState = { };
    const mockStore = configureStore();
    // const history = createMemoryHistory();
    let store;
        beforeEach(() => {
          store = mockStore(initialState);
          render(
               <Provider store={store} >
                   <Dashboard />
               </Provider>
           );
    })
    
    it('contains "Resume Builder" text in dom', () => {
        const builderText = screen.getByText('Resume Builder');
        expect(builderText).toBeInTheDocument;
    });

    it('contains the "Continue" button to be disabled state',()=>{
      const continueText = screen.getByText('Continue')
       expect(continueText).toBeDisabled
    })

    it('should import the JSON file" and enable the "Continue" button',()=>{
      const inputFile = screen.getByTestId('file-json')
       fireEvent.change(inputFile,{
        target: {
          files: [new File([resume], 'resume.json', {type: 'application/json'})],
        },
      })
      const  continuebtn = screen.getByTestId("continue-btn")
      expect(continuebtn).toBeEnabled
     })

     it('should disabled the "Continue with manual entry" button',()=>{
      const inputFile = screen.getByTestId('file-json')
       fireEvent.change(inputFile,{
        target: {
          files: [new File([resume], 'resume.json', {type: 'application/json'})],
        },
      })
      const  manualbtn = screen.getByTestId("manual-entry")
      expect(manualbtn).toBeDisabled
     })

    //  it('should navigate to "user-info" component on click on "Continue with manual entry"',()=>{
    //   const manualEntryBtn = screen.getByTestId('manual-entry')
    //    fireEvent.click(manualEntryBtn)
    //    expect(window.location.pathname).toBe('/user-info')
 
    //  })
});

