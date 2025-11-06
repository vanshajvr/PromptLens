# PromptLens
  See your prompts through the AI’s eyes.

## Overview
- PromptLens is a serverless AI-powered tool that analyzes and refines user prompts to help improve clarity, creativity, and response quality.
- Built with Gemma 3 and AI Studio, it acts as your personal prompt coach — evaluating tone, structure, and impact in real time.

## Features
- Prompt Analysis: Evaluate prompt clarity, tone, and creativity.
- Smart Suggestions: Get AI-powered recommendations for improvement.
- Gemma 3 Integration: Uses Google’s Gemma model via AI Studio.
- Serverless Architecture: Lightweight, fast, and fully client-side.
- Modern UI: Minimal, responsive design with smooth UX.

## Tech Stack
- Frontend: Next.js / React (Vite optional)
- Styling: Tailwind CSS
- AI Backend: Google AI Studio (Gemma 3 API)
- Deployment: Vercel / Netlify (serverless hosting)

## Getting Started
  1. Clone the Repository
     ~~~bash
     git clone https://github.com/vanshajvr/PromptLens.git
     cd PromptLens
     ~~~
  2. Install Dependencies
     ~~~bash
     npm install
     ~~~
  3. Add Environment Variables
      Create a .env file in the root directory and add your AI Studio API key:
      ~~~bash
      AI_STUDIO_API_KEY=your_key_here
      ~~~
  4. Run the app
     ~~~bash
     npm run dev
     ~~~
## How It Works
  1. User enters a prompt in the input field.
  2. AI Studio’s Gemma 3 model evaluates it on structure, intent, and creativity.
  3. PromptLens displays an analysis dashboard showing:
      - Quality score
      - Suggested improvements
      - Tone and emotion insights
  4. User can refine and re-run the prompt to compare versions.

## Future Enhancements
  - Add visual analytics with charts (prompt performance trend).
  - Include multiple model comparisons (Gemma, Gemini, GPT).
  - Add user session saving and history.
  - Multi-language prompt support.

## Hackathon Submission Notes
Built for Google AI Hackathon 2025, PromptLens demonstrates how AI can guide better human-AI communication.  
Created solo by [Vanshaj Verma](https://github.com/vanshajvr).

## Demo
  Video Link:
