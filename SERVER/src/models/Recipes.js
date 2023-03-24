import {Schema,model} from "mongoose";

const recipeSchema=Schema({
    name:{
        type:String,
        required:true
    },
    ingredients:[
            {
                type:String,
                required:true
            }
    ],
    instructions:{
            type:String,
            required:true
    },
    imageURL:[{
        type:String,
        required:true
    }],
    "cooking time":{
        
            type:Number,
            required:true
      
    },
    owner:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"users"
    }
},{timestamps:true});

export const recipeModel= model("recipe",recipeSchema);