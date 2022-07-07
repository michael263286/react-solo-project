import {createStore} from 'redux'
import { starterReducer } from "./starters/reducer";
import { devToolsEnhancer } from '@redux-devtools/extension'


export const store = createStore(starterReducer,devToolsEnhancer())

