import { NextResponse } from 'next/server'


const TOKEN= process.env.APPLICATION_TOKEN
const BASE_API_URL = process.env.BASE_API_URL_
const LANGFLOW_ID = process.env.LANGFLOW_ID_
const FLOW_ID = process.env.FLOW_ID_

export async function POST(req) {
  try {
    const { message } = await req.json()
    if (!message) {
      return NextResponse.json({ error: "Empty message" }, { status: 400 })
    }

    const url = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${FLOW_ID}`
    const headers = {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json"
    }
    const payload = {
      input_value: message,
      output_type: "chat",
      input_type: "chat"
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })

    if (response.ok) {
      const responseData = await response.json()
      try {
        const messageText = responseData.outputs[0].outputs[0].results.message.text
        return NextResponse.json({ response: messageText })
      } catch (e) {
        return NextResponse.json({
          error: "Response Processing Error",
          details: `Could not extract message from API response: ${e}`
        }, { status: 500 })
      }
    } else {
      return NextResponse.json({
        error: "API Error",
        details: `Error ${response.status}: ${await response.text()}`
      }, { status: response.status })
    }
  } catch (e) {
    return NextResponse.json({
      error: "Server Error",
      details: `${e}`
    }, { status: 500 })
  }
}