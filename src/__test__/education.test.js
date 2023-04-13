import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import Education from "../View/Form/education"
import configureStore from 'redux-mock-store';

describe('Education component', () => {
    const initialState = {
        Education : {
            data: [{courseName: null , completionYear: null, college: null , percentage: null }],
            Count: 1
         }
    };
    const mockStore = configureStore();
    let store;
        beforeEach(() => {
          store = mockStore(initialState);
          render(<Provider store={store} >
                   <Education />
               </Provider>
           );
    })

    it('contains "Add your Education Details" text in dom', () => {
        const addEducationText = screen.getByText('Add your Education Details');
        expect(addEducationText).toBeInTheDocument;
    });

    it('contains "Course Name" as user enter text',()=>{
        const courseNameLable = screen.getByTestId('course-name')
        fireEvent.change(courseNameLable,{target: {defaultValue: 'ECE'}})
        expect(courseNameLable.defaultValue).toBe('ECE')
    })
    it('update the "Completion Year" as user enter text',()=>{
        const completionYear = screen.getByTestId('completion-year')
        fireEvent.change(completionYear,{target: {defaultValue: '2018'}})
        expect(completionYear.defaultValue).toBe('2018')
    })
   
});

