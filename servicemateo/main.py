from fastapi import FastAPI

app = FastAPI()

@app.get("/hotel")
def read_menu():
    return {
        "nombre": ["Swizs Dreams"],
        "ubicacion": ["St. Moritz, Suiza"],
        "habitaciones": "150",
        "estrellas": "5",
        "precios": ["$100", "$200", "$300"],
        "servicios": ["spa", "piscina", "restaurante", "bar", "gimnasio", "jacuzzi"]
    }