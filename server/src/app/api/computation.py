from fastapi import APIRouter,  Query
from app.services.computation_service import generate_z_grid, calculate_cosine

router = APIRouter()

@router.get("/api/cosine")
def get_cosine(x: float = Query(..., description="Input value for cosine calculation")) -> float:
    return calculate_cosine(x)

@router.get("/api/surface", response_model=list[list[float]])
def get_surface():
    return generate_z_grid()