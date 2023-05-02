import  {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    id: 0,
    firstName: " ",
    lastName: " ",
    maidenName: " ",
    age: 0,
    gender: " ",
    email: "",
    phoneNumber: 0,
    username: "",
    password: ""
}

export const CardDetailsSlice = createSlice({
    name: 'cardDetails',
    initialState: initialValue,
    reducers: {
        addFirstName:(state, action)=> {
            state.firstName =action.payload
        },
        addLastName:(state, action)=> {
            state.lastName =action.payload
        },


    },
})

export const{addFirstName, addLastName } = CardDetailsSlice.actions

export default CardDetailsSlice.reducer