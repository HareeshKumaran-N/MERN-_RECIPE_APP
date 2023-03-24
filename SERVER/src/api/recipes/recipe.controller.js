import { recipeModel } from "../../models/Recipes.js";

export const getAllRecipes=async (req,res)=>{

 try {
    const response=await recipeModel.find({});
    console.log(response);
    // res.send(response);
 } catch (error) {
    res.send(error);  
 }

}

export const createRecipe=async (req,res)=>
{
    try {
          const dataPassed=req.body;
          const recipeInstance=new recipeModel(dataPassed);
          await recipeInstance.save();

          res.send({message:'Recipe Saved :)'})

    } catch (error) {
        res.send(error);
    }
} 