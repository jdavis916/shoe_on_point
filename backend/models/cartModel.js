import express from "express";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

//DEFINE SCHEMA BELOW

export const Cart = new Schema({
    id: Schema.Types.ObjectId,
    items: [{
        id: Number
    }],
    price: Number
})

var CartModel = mongoose.model("carts", Cart);

module.exports = CartModel;




/*Cart schema:
{
id: Number,
items: [
     {item_id: Shoe.id}
],
price: Number
}*/ 