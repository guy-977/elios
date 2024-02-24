const token = process.env.HF_TOKEN;

export async function POST(request: Request){
    const requestBody = await request.json()
    const prompt = requestBody.prompt
    try{
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            {
                headers: { Authorization: `Bearer ${token}` },
                method: "POST",
                body: JSON.stringify({"inputs": prompt}),})
        const result = await response.json()
        const summary_text = result[0].summary_text
        return new Response(JSON.stringify({"summary_text": summary_text}),{
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