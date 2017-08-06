import React,{Component} from 'react';
import './styles.scss';
var Grid,gridList;
export class ProductGrid extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.fetchGridData();
       
    }
    render(){
           Grid=this.props.GridData;
        if(Grid!=undefined){
         gridList=Grid.res.map((data,index)=>{
            return <li key={index} ><img src={data.src} className='' alt={data.name}/><h1>{data.name}</h1><div className='description-div'>{data.description}</div></li>
        })
        }
        return( <div className='product-grid-div'>
                    <ul className='grid-list'>{gridList}</ul>
                </div>);
    }
}