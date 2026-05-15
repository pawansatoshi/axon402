import { NextResponse } from "next/server"

const MODELS = [
  "moonshotai/kimi-k2:free",
  "openai/gpt-oss-20b:free",
  "deepseek/deepseek-chat-v3-0324:free",
  "google/gemma-2-9b-it:free"
]

async function tryModel(model: string, message: string) {

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization:
          `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    }
  )

  const data = await response.json()

  if (data?.choices?.[0]?.message?.content) {
    return {
      ok: true,
      reply: data.choices[0].message.content,
      model,
    }
  }

  return {
    ok: false,
  }
}

export async function POST(req: Request) {

  try {

    const { message } = await req.json()

    for (const model of MODELS) {

      const result = await tryModel(
        model,
        message
      )

      if (result.ok) {

        return NextResponse.json({
          reply: result.reply,
          model: result.model,
        })

      }

    }

    return NextResponse.json({
      reply: "All AI servers busy right now."
    })

  } catch (error: any) {

    return NextResponse.json({
      reply: error.message
    })

  }

}
