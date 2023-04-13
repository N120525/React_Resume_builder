// import React from 'react';
// import {render,screen,fireEvent} from '@testing-library/react';
// import {Provider} from 'react-redux';
// import Profile from "../View/Form/profileForm"
// import configureStore from 'redux-mock-store';

// describe('Profile component', () => {
//     const initialState = {
//         profileData : {
//             data: {}
//          }
//     };
//     const mockStore = configureStore();
//     let store;
//         beforeEach(() => {
//           store = mockStore(initialState);
//           render(<Provider store={store} >
//                    <Profile />
//                </Provider>
//            );
//     })

//     it('contains "Add your profile details" text in dom', () => {
//         const addProfileText = screen.getByText('Add your profile details');
//         expect(addProfileText).toBeInTheDocument;
//     });

//     it('contains "First Name" as user enter text',()=>{
//         const firstNameText = screen.getByTestId('first-name')
//         fireEvent.change(firstNameText,{target: {defaultValue: 'Kevin Peter'}})
//         expect(firstNameText.defaultValue).toBe('Kevin Peter')
//     })

//     it('update the "Phone Number" as user enter text',()=>{
//         const phoneNumber = screen.getByTestId('phone-number')
//         fireEvent.change(phoneNumber,{target: {defaultValue: '9955123478'}})
//         expect(phoneNumber.defaultValue).toBe('9955123478')
//     })


// });

