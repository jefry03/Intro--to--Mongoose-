const mongoose = require('mongoose')
const Recipe = require("./models/Recipe")



async function connectToDB(){ //connection to the database
    try{
        await mongoose.connect("mongodb://localhost:27017/recipes")
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}
connectToDB() // connect to database
   

async function createRecipe(newRecipe) {
    try {
        const recipe = await Recipe.create(newRecipe)
        console.log(recipe)
    } catch (error) {
        console.log("Failed to create recipe.")
    }
}
const newRecipe = {
 name: "Um Ali",
 instructions: "bake at 180C",
 prepTime: 120,
 difficulty: "Medium"
}
//createRecipe(newRecipe)
async function getAllRecipes(){
  const allRecipes = await Recipe.find();
    console.log(allRecipes)

}


async function getRecipeById(id) {
    const foundRecipe = await Recipe.findById(id)
     
    if (foundRecipe) {
        console.log(foundRecipe)
    } else {
        console.log("No recipe with this ID exists.")
    }
}
 async function updateRecipe(recipeId, newRecipeData) {
     const updateRecipe = await Recipe.findByIdAndUpdate(recipeId , newRecipeData ,{new:true})
        console.log(updateRecipe)
 }
    
async function deleteRecipe(recipeId) {
    const deleteRecipe = await Recipe.findByIdAndDelete(recipeId)
    console.log(deleteRecipe)
}


