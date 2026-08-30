export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { message } = req.body;
        if (!message || !message.trim()) {
            return res.status(400).json({ error: "Message is required" });
        }

        // Get API key from Vercel Environment Variable
        const API_KEY = process.env.OPENROUTER_API_KEY;
        if (!API_KEY) {
            return res.status(500).json({ error: "OPENROUTER_API_KEY is not configured" });
        }

        // System prompt for structured responses
        const systemPrompt =
            "You are BioGenius, a helpful biotech and coding assistant. " +
            "Always respond with numbered lists (1., 2., 3.) or bullet points for clarity. " +
            "Use **bold** for key terms and important points. " +
            "If the answer has multiple parts, list them. " +
            "Respond in the same language as the user (English or Hindi).";

        // Call OpenRouter
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`,
                "HTTP-Referer": "https://your-project.vercel.app", // change to your domain
                "X-Title": "BioGenius AI Chat"
            },
            body: JSON.stringify({
                model: "openrouter/free",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: message }
                ]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: data.error?.message || "OpenRouter API error"
            });
        }

        const reply = data.choices?.[0]?.message?.content;
        if (!reply) {
            return res.status(500).json({ error: "No response received from AI" });
        }

        return res.status(200).json({ reply });
    } catch (error) {
        console.error("Server error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
