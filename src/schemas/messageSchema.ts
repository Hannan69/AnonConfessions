import {z} from "zod"


export const messageSchema = z.object ({
    content: z
    .string()
    .min(10,{message: "Content must be of 10 characteres"})
    .max(300, {message: "Must not exceed 300 characters"})
})