import {configureStore} from "@reduxjs/toolkit";
import CounterReducer from './Counter'
import CardDetailsReducer from './CardDetails'

const Store = configureStore({
    reducer: {
        counter: CounterReducer,

    }
})

export default Store;