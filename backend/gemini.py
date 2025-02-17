import google.generativeai as genai

import os

from flask import Flask, request, jsonify
from flask_cors import CORS
# import json
import pandas as pd
import uuid

import os

api_key = "AIzaSyBQCWfNkClY6nXpKNCBsGGJx3ajUBsW8XQ"
genai.configure(api_key=api_key)

generation_config = {
    "temperature": 0.9,
    "top_p": 0.5,  # Focus on high probability words, but allow some variation
    "top_k": 5,     # Consider top 5 most probable words at each step
    "max_output_tokens": 2048,  # Maximum number of tokens to generate
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

chat = None

def get_chatbot_response1(userText):
    model = genai.GenerativeModel(model_name="gemini-pro",
                                  generation_config=generation_config,
                                  safety_settings=safety_settings)
    global chat

  
    chat = model.start_chat()
    response = chat.send_message("""Give Reply to this """ + userText)
    return response.text


app = Flask(__name__) 
CORS(app)


@app.route('/chatbot', methods=['POST'])
def chatbot_endpoint():
    try:
        data = request.get_json()
        if 'userPrompt' not in data:
            return jsonify({"error": "userPrompt is required"}), 400
        
        user_prompt = data['userPrompt']
        chatbot_response = get_chatbot_response1(user_prompt)

        return jsonify({"response": chatbot_response})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

if __name__ == '__main__':
    app.run(debug=True)