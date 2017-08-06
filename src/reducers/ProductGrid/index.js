import {FETCH_GRID_DATA} from '../../constants/ProductGrid/productGrid.js';
export default function GridData (state={GridData:{}},action){
    switch(action.type){
        case FETCH_GRID_DATA: 
            return Object.assign({},state,{GridData:action.GridResponse});
        default: return state;
    }
    return state;
}