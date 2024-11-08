import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
          },
          name: { type: String, required: true },
          slug: { type: String, required: true },
          qty: { type: Number, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    shippingAddress: {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },    
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
}, {
    timestamps: true
})

const OrderModel = mongoose.models.Order || mongoose.model("Order", OrderSchema)
export default OrderModel

export type Order = mongoose.Document & {
    _id: string
    user: string
    items: []
    shippingAddress: {
        fullName: string
        address: string
        city: string
        postalCode: string
        country: string
    }
    paymentMethod: string
    itemsPrice: number
    shippingPrice: number
    taxPrice: number
    totalPrice: number
    isPaid: boolean
    paidAt: Date
    isDelivered: boolean
    deliveredAt: Date
}   

export type OrderItem = {
    product: string
    name: string
    slug: string
    qty: number
    image: string
    price: number
}

export type ShippingAddress = {
    fullName: string
    address: string
    city: string
    postalCode: string
    country: string
}