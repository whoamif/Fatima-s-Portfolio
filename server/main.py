from fastapi import FastAPI, HTTPException
from pydantic import BaseModel,ValidationError 
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from fastapi.middleware.cors import CORSMiddleware
from google.oauth2 import service_account
from google.auth.transport.requests import Request

app = FastAPI()

# CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",  
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

class UserInfo(BaseModel):
    name: str
    email: str
    title: str


    

@app.post("/submit-form/")
async def submit_form(user_info: UserInfo):
    try:
        send_email(user_info)
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=str(e))

    return {"message": "Form submitted successfully"}

def send_email(user_info: UserInfo):
    smtp_host = 'smtp.gmail.com'
    smtp_port = 587
    smtp_user = 'adjissifatimaamina@gmail.com'
    smtp_pass = 'ltds owub ybol pwne'  
    sender_email = smtp_user
    receiver_email = 'adjissifatimaamina@gmail.com'  
    
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = 'New Form Submission'

    email_body = f"""
    New Form Submission:
    Name: {user_info.name}
    Email: {user_info.email}
    
    Title: {user_info.title}
    
    """

    message.attach(MIMEText(email_body, 'plain'))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.sendmail(sender_email, receiver_email, message.as_string())
