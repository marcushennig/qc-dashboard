FROM python:3.13-slim

# Install system dependencies (for numpy and other scientific packages)
RUN apt-get update && apt-get install -y --no-install-recommends build-essential && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy only requirements first for better build caching
COPY pyproject.toml poetry.lock ./

# Upgrade pip and install poetry
RUN pip install --upgrade pip && pip install poetry

# Install dependencies (no dev dependencies for production)
RUN poetry config virtualenvs.create false && poetry install --no-root --only main

# Copy the application code
COPY src ./src

# Set PYTHONPATH so imports work
ENV PYTHONPATH=/app/src

EXPOSE 8000

CMD ["uvicorn", "src.app.main:app", "--host", "0.0.0.0", "--port", "8000"]