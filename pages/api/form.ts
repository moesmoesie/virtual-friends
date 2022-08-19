import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from "@sendgrid/mail";
// HELPERS

// TYPES
type Error = {
    [key: string]: string[],
}

type ResponseTyoe = {
  errors: Error
}

// CONSTANTS
if(process.env.HCAPTCHA_SECRET_KEY === undefined){
    throw new Error("HCAPTCHA_SECRET_KEY not found!");
}

const VERIFY_URL = "https://hcaptcha.com/siteverify"
const SECRET_KEY = process.env.HCAPTCHA_SECRET_KEY
sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseTyoe>
) {
    let errors : Error = {}

    const addToErrors = (name: string, message : string) => {
        if(errors[name]){
            errors[name].push(message)
        }else{
            errors[name] = [message]
        }
    }

    const {token,name,email,message,catagory} = JSON.parse(req.body)

    // START hChaptcha VALIDATION

    if(token === undefined){
        addToErrors('hChaptcha','No hChaptcha token provided!')
        return res.status(402).json({errors})
    }

    const parameters = new URLSearchParams({
        secret: SECRET_KEY,
        response: token
    })

    const url = `${VERIFY_URL}?${parameters}`

    const response = await fetch(url,{
        method: 'POST',
    })

    const responseData = await response.json()

    if(responseData?.success === false){
        addToErrors('hChaptcha','The hChaptcha validation was no success!')
        return res.status(402).json({ errors})
    }

    // START FIELD VALIDATION

    if(name === undefined){
        addToErrors('name','This field is required!')
    }

    if(email === undefined){
        addToErrors('email','This field is required!')

    }

    if(message === undefined){
        addToErrors('message','This field is required!')
    }

    if(Object.keys(errors).length > 0){
        return res.status(402).json({errors})
    }

    try {
        await sendgrid.send({
        to: "mdarwesh@virtualfriends.dev",
        from: "mdarwesh@virtualfriends.dev",
        subject: `WEBSITE FORM | ${name} - ${email} - ${catagory}` ,
        html: `
        <div>
            name : ${name}
            email: ${email}
            catagory: ${catagory}
            message: ${message}
        </div>`,
        });
    } catch (error) { 
        addToErrors("form", "Unable to proccess email.")
        return res.status(500).json({errors});
    }

    res.status(200).json({ errors })
}
