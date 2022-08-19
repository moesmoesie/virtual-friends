import type { NextApiRequest, NextApiResponse } from 'next'


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
        res.status(402).json({errors})
        return
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
        res.status(402).json({ errors})
        return
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
        res.status(402).json({errors})
        return
    }

    // START EMAIL SENDING

    res.status(200).json({ errors })
}
