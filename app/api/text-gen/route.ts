import Groq from "groq-sdk"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const token = process.env.HF_TOKEN;

export async function POST(request: Request){
    const requestBody = await request.json()
    const prompt = requestBody.prompt
    try{
        const response = await groq.chat.completions
        .create({
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          model: "mixtral-8x7b-32768",
        })
        const generated_text = await response.choices[0]?.message?.content
        return new Response(JSON.stringify({"generated_text": generated_text}),{
            status: 200,
            headers: {"Content-type": "application/json"}
        })
        
    } catch(err){
        console.log(err)
        return new Response(JSON.stringify({ error: 'Something bad happend!' }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })
    }
}