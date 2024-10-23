from fastapi import FastAPI

app = FastAPI()

@app.get("/hotelSuiza")
def read_hotelSuiza():
    return {
        "infohotel": ["nombre: Legendär Zermatt", "estrellas: 4", "rating: 4.5", "direccion: Schanze, Zermatt, Suiza"],
        "servicios": ["-----|Servicios|-----","wifi","piscina","gimnasio","restaurante","bar","transporte aeropuerto"],
        "habitaciones": ["-----|habitaciones|-----","Habitación Estándar", "Suite", "habitacion Familiar"],
        "politicas": ["-----|Politicas|-----","check_in: 14:00", "check_out: 12:00","cancelacion: Gratis hasta 24 horas antes del check-in","mascotas: No se permiten mascotas"] 
}
