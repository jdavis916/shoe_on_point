import express from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
export const Contact = new Schema({
    id: Number,
    fname: String,
    lname: String,
    email: String,
    phone: String,
    msg: String
})

var ContactModel = mongoose.model("contacts", Contact);

module.exports = ContactModel;



/*
Contact schema:
{
 id: Number,
 fname: String,
 lname: String,
 email: String,
 phone: String,
 msg: String
}
*/