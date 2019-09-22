import React, { Component } from 'react';
import {recipe} from '../tempDetails.js'

class RecipeDetails extends Component {
    
       state = {
            recipe:{},
            url:`https://www.food2fork.com/api/get?key=42247b813686ec11f4b05eed7d0f1729&rId=${this.props.details_id}`   
        }
        
         
 
      async getRecipes(){
        try{
        const data = await fetch(this.state.url);
       const datajs = await data.json();
        
        this.setState({
          recipe:datajs.recipe
        });
         
        
        }
        catch (error){
          console.error('Somthing happen:', error)
        }
      }
      componentDidMount(){
       this.getRecipes();
      }
    render() {
      const {handleIndex}=this.props;
      console.log(this.state.url)
       const {image_url,
        ingredients, 
        publisher,
        publisher_url,
        source_url,
        title
        } = this.state.recipe;
        console.log(this.state.recipe)
        return (
           
           <React.Fragment>
                
               <div className="container">
                   <div className="row">
                       <div className="col-10 mx-auto col-md-6 my-3">
                           <button type="button" onClick={()=>handleIndex(0)} className="btn btn-warning text-capitalize mb-5">Back to List Shearch</button>
                           <img style={{border:" 1px solid #d8d8d8"}} src={image_url} className="d-block w-100" alt="recipe"/>
                       </div>
                       <div className="col-10 mx-auto col-md-6 my-3">
                           <h6 className="text-capitalize">{title}</h6>
                           <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
                           <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn  btn-warning text-capitalize">publisher webpage</a>
                           <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn mx-2 btn-success text-capitalize">recipe url</a>
                           <ul className="list-group mt-3">
                           <h2 className="mt-2 mb-4">Ingredients</h2>{
                             ingredients &&
                                ingredients.map((ingredient,index)=>{
                                   return (
                                       <li key={index} className="list-group-item text-slanted">{ingredient}</li>
                                   )
                               })
                           }
                           </ul>
                       </div>
                   </div>
               </div>
               
            </React.Fragment>
            
        );
    }
}

export default RecipeDetails;
