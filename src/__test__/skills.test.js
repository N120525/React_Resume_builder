import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import Skills from "../View/Form/skills"
import configureStore from 'redux-mock-store';

describe('Skills component', () => {
    const initialState = {
        SkillsFormData : {
            data: [],
            Count: 1
         }
    };
    const mockStore = configureStore();
    let store;
        beforeEach(() => {
          store = mockStore(initialState);
          render(<Provider store={store} >
                   <Skills />
               </Provider>
           );
    })

    it('contains "Add your Skills" text in dom', () => {
        const addSkillText = screen.getByText('Add your Skills');
        expect(addSkillText).toBeInTheDocument;
    });

    it('contains "Skill" as user enter text',()=>{
        const skillFiledId = screen.getByTestId('skill-filed')
        fireEvent.change(skillFiledId,{target: {defaultValue: 'React Js'}})
        expect(skillFiledId.defaultValue).toBe('React Js')
    })

});

