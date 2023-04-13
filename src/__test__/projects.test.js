import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import Projects from "../View/Form/projects"
import configureStore from 'redux-mock-store';

describe('Projects component', () => {
    const initialState = {
        projectFormData :{
            data: [{projectName: null , techStack : null , description: null,projectDuration: null,teamSize: null} ],
            Count: 1
         }
    };
    const mockStore = configureStore();
    let store;
        beforeEach(() => {
          store = mockStore(initialState);
          render(<Provider store={store} >
                   <Projects />
               </Provider>
           );
    })

    it('contains "Add your Projects" text in dom', () => {
        const addProjectText = screen.getByText('Add your Projects');
        expect(addProjectText).toBeInTheDocument;
    });

    it('contains "Project Name" as user enter text',()=>{
        const projectNameId = screen.getByTestId('project-name')
        fireEvent.change(projectNameId,{target: {defaultValue: 'Connected-workspace'}})
        expect(projectNameId.defaultValue).toBe('Connected-workspace')
    })

});

