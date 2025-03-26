import { Message } from "@/models/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    // ?: means that it is optional
    isAcceptingMessage?: boolean;
    //API Response can include User messages
    messages?: Array <Message>
}