import {resend} from '@/lib/resend'
import VerificationEmail from '../../../../emails/VerificationEmails'
import { ApiResponse } from '@/types/ApiResponse'


export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
): Promise <ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification Code',
            react: VerificationEmail({username,otp : verifyCode})
          });
        return {success:true, message: "Verification sent succesfully"}
    } catch (emailError) {
        console.error('Error sending Email Verification',emailError)
        return {success:false, message:'Failed to send Email'}
    }
}
