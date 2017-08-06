import {FETCH_GRID_DATA} from './../../constants/ProductGrid/productGrid.js';
import {FETCH_GRID_DATA_URL} from './../../constants/ProductGrid/productGridURL.js';
import axios from 'axios';
export function fetchGridData(){
    return ((dispatch)=>{
        axios.get(FETCH_GRID_DATA_URL).then((GridResponse)=>{
            dispatch ({type:FETCH_GRID_DATA,GridResponse:GridResponse})
        }).catch((err)=>{
            console.log('The error is',err);
        })
    });
}