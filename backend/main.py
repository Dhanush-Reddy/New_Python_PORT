from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from email_service import send_email

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
async def root():
    return {"message": "Portfolio Backend is running"}

@app.post("/contact")
async def contact(request: ContactRequest):
    try:
        success = await send_email(request.name, request.email, request.message)
        if success:
            return {"message": "Message sent successfully"}
        else:
            raise HTTPException(status_code=500, detail="Failed to send email")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
