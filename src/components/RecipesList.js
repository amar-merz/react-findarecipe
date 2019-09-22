import React, { Component } from 'react';
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch';

class RecipesList extends Component {
    render() {
            const {handleDetails,
            handleChange,
            handleSubmit,
            value,
            recipes,
            error}=this.props;
          
        
        return (
                      
            <div className="container">
            <RecipeSearch handleSubmit={handleSubmit} handleChange={handleChange} value={value}/>
              <div className="row">
                  <div className="col-10 mx-auto col-md-6 col-lg
                   text-center mb-3 text-uppercase" >
                       <h1 className="text-slanted">Recipes List</h1></div>
              </div>
              <div className="row">
                {   
                    error?<h1 className="text-danger  text-center mx-auto">{error}
                    </h1>:recipes.map(recipe=>{
                            return(
                               <Recipe key={recipe.recipe_id} recipe_id={recipe.recipe_id} 
                                handleDetails={handleDetails} recipe={recipe}/>
                            )}
                           )
                     
                }
              </div>
            </div>
                
           
        );
    }
}

export default RecipesList;
