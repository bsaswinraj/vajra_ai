from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import ollama


app = FastAPI(title="VAJRA AI Backend")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: list[Message]


def select_model(message: str) -> str:
    """
    Select the most suitable local model for the user's request.
    """

    text = message.lower()

    coding_keywords = [
        "code",
        "coding",
        "program",
        "programming",
        "python",
        "javascript",
        "typescript",
        "java",
        "c++",
        "c programming",
        "debug",
        "bug",
        "function",
        "algorithm",
        "sql",
        "html",
        "css",
        "react",
        "next.js",
        "write a program",
    ]

    reasoning_keywords = [
        "analyse",
        "analyze",
        "analysis",
        "explain",
        "reason",
        "compare",
        "summarize",
        "summary",
        "report",
        "document",
        "inspection",
        "procedure",
        "sop",
        "policy",
        "calculate",
        "calculation",
        "technical",
    ]

    if any(keyword in text for keyword in coding_keywords):
        return "qwen2.5-coder:1.5b"

    if any(keyword in text for keyword in reasoning_keywords):
        return "qwen2.5:1.5b"

    return "llama3.2:1b"


@app.get("/")
def root():
    return {
        "status": "VAJRA backend is running"
    }


@app.post("/chat")
def chat(request: ChatRequest):

    if not request.messages:
        return {
            "response": "Please provide a message.",
            "model": None
        }

    latest_message = request.messages[-1].content

    selected_model = select_model(latest_message)

    messages = [
        {
            "role": message.role,
            "content": message.content
        }
        for message in request.messages
    ]

    response = ollama.chat(
        model=selected_model,
        messages=messages
    )

    return {
        "response": response["message"]["content"],
        "model": selected_model
    }