import React, { Component } from 'react';

class Recipe extends Component {
    render() {
      
        const {
            recipe_id,
            image_url,
            publisher,
            source_url,
            title
        }=this.props.recipe;
        const {handleDetails}=this.props;
        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                     <img src={image_url}
                     className="img-card-top"
                     style={{height:"14rem"}} alt={title}/>
                     <div className="card-body text-capitalize">
                         <h6>{title}</h6>
                         <h6 className="text-warning text-slanted">
                             Provided by: {publisher}
                         </h6>
                         </div>
                         <div className="card-footer">
                             <button onClick={()=>handleDetails(recipe_id)}  className="btn btn-primary text-capitalize" type="button">
                                 Details</button>
                             <a href={source_url} className="btn btn-success text-capitalize mx-2"  target="_blank" rel="noopener noreferrer">Recipe url</a>
                            
                         </div>
                     
                 </div>
                 </div>
            </React.Fragment>
        );
    }
}

export default Recipe;


