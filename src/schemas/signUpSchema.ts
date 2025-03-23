import {object, z} from "zod"
//exporting so that userName validation can be used in other components

export const userNameValidation = z
    .string()
    .min(2,"Username must be of atleast 2 characters")
    .max(15,"No more than 15 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")  

export const signUpSchema = z.object(
    {
        username : userNameValidation,
        email : z.string().email({message:'Invalid Email'}),
        password: z.string().min(6,{message:'Password should contain more than 6 characters'})
    })
    