import React, { Component } from 'react';


class RecipeSearch extends Component {
    render() {
        const {handleSubmit,handleChange,value}=this.props;
        return (
            <div className="row">
                <div className="col-10 mx-auto text-center col-md-8 mt-5 my-5"  >
                    <h1 className="text-slanted text-capitalize">
                    search for recipe with <strong className="text-danger">find@recipe</strong>
                    </h1>
                    <form className="" onSubmit={handleSubmit}>
                      
                        <label className="text-slanted text-capitalize" htmlFor="search">
                           type recipes sepperated by comma
                        </label>
                   
                    <div className="input-group">
                        <input type="text" className="form-control" 
                        onChange={handleChange} value={value} placeholder="chicken,onions,carrot.." name="recipeSearch"  />
                    <div className="input-group-append">
                        <button type="submit" className="btn input-group-text bg-primary text-white"><i className="fas fa-search"></i></button>
                    </div>
                    </div> 
                    </form>
                </div>
            </div>
        );
    }
}

export default RecipeSearch;