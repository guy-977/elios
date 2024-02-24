const token = process.env.HF_TOKEN;

export async function POST(request: Request){
    const requestBody = await request.json()
    const prompt = requestBody.prompt
    let image;

    try {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
        {
            headers: { Authorization: `Bearer ${token}` },
            method: "POST",
            body: JSON.stringify({'inputs': prompt}),
        }
    );
    const resultBlob = await response.blob();

        // Return the Blob directly without wrapping it in another Response
        return new Response(resultBlob, {
            status: 200,
            headers: { "Content-Type": "image/jpeg" },
        });

    }
    catch(e){
        console.log(e)
        return new Response(JSON.stringify({ error: 'Something bad happend!' }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })
    }
}