const {z} = require("zod");


//creating object schema
const signupSchema = z.object({
    username :z 
    .string ({required_error: "Name is required"})
    .trim()
    .min(3, { message : " Name must be atleat of 3 characters"})
    .max(255, {message :  "Name must not be more than 255 characters"}),

    email :z 
    .string ({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, { message : " email must be atleat of 3 characters"})
    .max(255, {message :  "email must not be more than 255 characters"}),

    phone:z 
    .string ({required_error: "Phone No. is required"})
    .trim()
    .min(10, { message : " phone No. must be atleat of 3 characters"})
    .max(20, {message :  "phone No. must not be more than 255 characters"}),

    password:z 
    .string ({required_error: "Password is required"})
    .min(7, { message : " Password must be atleat of 10 characters"})
    .max(1024,"Password can not be more than 1024 characters"),
});

module.exports=signupSchema;