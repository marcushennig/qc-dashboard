from fastapi import FastAPI, Query
from math import cos

app = FastAPI()

@app.get("/cosine")
def cosine(x: float = Query(..., description="Input value for cosine calculation")) -> float:
    """
    Calculate the cosine of a given value.
    
    Args:
        x (float): The input value for which to calculate the cosine.
    
    Returns:
        float: The cosine of the input value.
    """
    return cos(x)