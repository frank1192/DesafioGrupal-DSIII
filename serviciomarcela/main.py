from fastapi import FastAPI

app = FastAPI()

@app.get("/hotel")
def read_hotel_colombia():
    return {
        "nombre": "Cafetal Paradise",
        "ubicacion": "Quindío, Colombia (Eje Cafetero)",
        "habitaciones": 80,
        "estrellas": 4,
        "precios": ["$80", "$150", "$220"],
        "servicios": ["cafetería", "tour de café", "piscina", "restaurante", "parque de aventuras", "zona de juegos para niños"]
    }
