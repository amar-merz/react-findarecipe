import React from 'react';
import RecipeDetails from './components/RecipeDetails'
import './App.css';
import RecipesList from './components/RecipesList';

class App extends React.Component {
  state = {
    recipes : [],
    error:'',
    details_id:'',
    pageIndex:0,
    searchQuery:'',
    operator:'&q=',
    base_url:'https://www.food2fork.com/api/search?key=db458674b83e9806a64cf6ca9f19c8b8',
    url:'https://www.food2fork.com/api/search?key=db458674b83e9806a64cf6ca9f19c8b8'
    
  }

  //Choose what page(component) shoud be rendered
  handlePage=(index)=>{
    switch(index){
      case 0:
        return (
         <RecipesList recipes={this.state.recipes} 
            handleDetails = {this.handleDetails} handleIndex={this.handleIndex}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.searchQuery}
            error={this.state.error}/> 
        ) 
     case 1:
       return (
        <RecipeDetails details_id={this.state.details_id}
            handleDetails = {this.handleDetails} handleIndex={this.handleIndex}/>
       )
     default:
       break;
    }
   }

   //Setting up the pageIndex property  depends on which button was clicked (back to List Button 'index=0' or Recipe Details Button 'index=1' )
   handleIndex=(index)=>{
     this.setState(
        {
         pageIndex:index
        }
     )
   }

   //What recipe  is clicked to see details
   handleDetails =(id)=>{
     console.log(id);
     this.setState({
       details_id:id,
       pageIndex:1 //1 is set to render the 'recipedetails' component
     })
   }

   //Get the input entered by the user on the search field      
   handleChange=(e)=>{
    this.setState({
      searchQuery:e.target.value});
   }

   //handle the submited form
   handleSubmit=(e)=>{
     e.preventDefault();

     const {base_url,operator,searchQuery} = this.state;
     this.setState(
        ()=>{
          return {
            url:`${base_url}${operator}${searchQuery}`,searchQuery:'' ,error:''   
          }
        },
        ()=>{
          this.getRecipes();
        }
     )

   }
   //Fetch the recipes from food2fork api
  async getRecipes(){
    try{
      const data = await fetch(this.state.url);
      const datajson = await data.json();
      if(datajson.recipes.length===0){
        this.setState({
          error:'Sorry, but your search did not return any results',
        })
      }
      else{
      this.setState({
        recipes:datajson.recipes
      });
    }
    }
    catch (error){
      console.error('Somthing happen:', error)
    }
  }
  componentDidMount(){
   this.getRecipes();
  
  
  }


  
  render(){
  
   //console.log(this.state.details_id)
   console.log(this.state.recipes)
   
   
  return (
    <React.Fragment>  
     {this.handlePage(this.state.pageIndex)}
    </React.Fragment>
    
  );
  }
}

export default App;
