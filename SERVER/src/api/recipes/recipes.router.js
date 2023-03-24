import { Router } from "express";
import { getAllRecipes,createRecipe } from "./recipe.controller.js";
export const recipeRouter= Router();

recipeRouter.get('/',getAllRecipes);

recipeRouter.post('/',createRecipe);
