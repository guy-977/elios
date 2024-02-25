const token = process.env.HF_TOKEN;

export async function POST(request: Request){
    const requestBody = await request.json()
    const prompt = requestBody.prompt
    try{
        const response = await fetch(
            "https://api-inference.huggingface.co/models/openai-community/gpt2",
            {
                headers: { Authorization: `Bearer ${token}` },
                method: "POST",
                body: JSON.stringify({"inputs": prompt}),})
        const result = await response.json()
        const generated_text = result[0].generated_text
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