from fastapi import FastAPI

app = FastAPI()

@app.get("/eventos")
def read_eventos():
    return {
        "hotel": ["Hotel Paraíso", "Sede: Sede Central", "Ubicacion: Av. Las Palmeras 123, Ciudad del Sol", "Habitaciones disponibles: 150"],
        "conciertos": ["EVENTOS:", "Jazz en la Terraza", "2024-11-15", "20:00", "Lugar: Terraza del Hotel", "Artista: The Blue Notes"],
        "obras": ["OBRAS:", "El Fantasma de la Ópera", "2024-12-20", "19:00", "Lugar: Teatro del Hotel", "Director: Jorge Salinas"],
        "torneos": ["TORNEOS", "Torneo de Póker", "2024-12-02", "20:00", "Lugar: Casino del Hotel", "Premio: 2000 USD"],
    }
