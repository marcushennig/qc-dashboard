import numpy as np
from math import cos

def calculate_cosine(x: float) -> float:
    return cos(x)

def generate_z_grid(size: int = 25, step: float = 0.2) -> list[list[float]]:
    x = np.arange(0, size * step, step)
    y = np.arange(0, size * step, step)
    xx, yy = np.meshgrid(x, y, indexing='ij')
    zz = np.sin(xx) * np.cos(yy)
    return zz.tolist()