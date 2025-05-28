import os
from fastapi import FastAPI
from app.api import computation
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()  # Load variables from .env

def parse_bool(val):
    return val.lower() in ("true", "1", "yes")

# Parse CORS settings from environment variables
origins = os.getenv("CORS_ALLOW_ORIGINS", "").split(",")
methods = os.getenv("CORS_ALLOW_METHODS", "*").split(",")
headers = os.getenv("CORS_ALLOW_HEADERS", "*").split(",")
credentials = parse_bool(os.getenv("CORS_ALLOW_CREDENTIALS", "True"))

# Create FastAPI app instance with CORS middleware
app = FastAPI()

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=credentials,
    allow_methods=methods,
    allow_headers=headers,
)

# Include the computation router
app.include_router(computation.router)