import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SubCategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"Category name is required"],

    trim: true
  },
  subcatnm: {
    type: String,
    required: [true,"Sub Category name is required"],
    unique: true,
    trim: true
  },
  subcaticonnm: {
    type: String,
    required: [true,"Sub Category icon name is required"],
    trim: true
  },
  price:Number,
  discount:{
    type:String
  },
  rating:Number
});

// Apply the uniqueValidator plugin to UserSchema.
SubCategorySchema.plugin(uniqueValidator);

// compile schema to model
const SubCategorySchemaModel = mongoose.model('subcategory_collection',SubCategorySchema);

export default SubCategorySchemaModel