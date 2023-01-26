import express from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
export const Shoe = new Schema({
    id: Number,
    brand: String,
    name: String,
    price: Number,
    stock: Number,
    img: String
})

var ShoeModel = mongoose.model("shoes", Shoe);

module.exports = ShoeModel;

/*
Shoe Schema:
{
id: Number
brand: String,
name: String,
price: Number,
stock: Number,
img: String
}
*/