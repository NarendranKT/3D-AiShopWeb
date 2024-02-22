import express from "express";
import * as dotenv from 'dotenv';
import { OpenAI } from "openai";
dotenv.config();
const router = express.Router();

// // secretKey = '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';


// const config = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

router.route('/').get((req, res) => {
    res.status(200).json({message: "Hi, Dall.E from dallerouter"})
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.images.generate({
            // model:'dall-e-3',
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
            
        });

        const image = aiResponse.data[0].b64_json;

        res.status(200).json({photo: image})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "something went wrong" });
    }
})






export default router;
