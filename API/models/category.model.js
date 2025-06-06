import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";


const categorySchema =mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        require:[true,"Name is required"],
        trim:true,
        
    },
    caticonnm:{
        type:String,
        require:[true,"Name is required"],
        trim:true,
        lowercase:true,
    },
    info:String,
    });

    mongoose.plugin(mongooseUniqueValidator);

    const categorySchemaModel=mongoose.model('caegory_collection',categorySchema);

    export default categorySchemaModel;