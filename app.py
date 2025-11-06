from flask import Flask, render_template, request
import google.generativeai as genai
import os

app = Flask(__name__)

# Configure Gemini API
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

@app.route("/", methods=["GET", "POST"])
def index():
    response_text = ""
    if request.method == "POST":
        user_prompt = request.form.get("prompt")
        if user_prompt:
            model = genai.GenerativeModel("gemini-1.5-flash")
            response = model.generate_content(f"Help me refine this prompt: {user_prompt}")
            response_text = response.text
    return render_template("index.html", response=response_text)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
