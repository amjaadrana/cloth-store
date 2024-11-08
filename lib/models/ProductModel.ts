import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: {
        type: String,
        required: true,
    },
    slug: { type: String, required: true, unique: true },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    countInStock: {
        type: Number,
        default: 0,
    },                  
   
    // banner: type: String,
    
    
}, { timestamps: true });


const ProductModel = mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel


// export default ProdutModel = mongoose.models.Product || mongoose.model("Product", productSchema) 

export type Product = {
    _id?: string
  name: string
  slug: string
  image: string
  banner?: string
  price: number
  brand: string
  description: string
  category: string
  rating: number
  numReviews: number
  countInStock: number
  colors?: []
  sizes?: []
}
