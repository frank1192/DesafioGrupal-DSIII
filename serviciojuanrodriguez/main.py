from fastapi import FastAPI

app = FastAPI()

@app.get("/hotel")
def get_hotel_info():
    return (
        "Hotel Caribe en Cartagena. Dirección: Bocagrande, Carrera 1 #2-87. "
        "Servicios: Wi-Fi gratuito, Piscina, Desayuno incluido, Spa y gimnasio, Bar y restaurante. "
        "Habitaciones estándar: 150000 COP por noche, capacidad 2. "
        "Suites: 300000 COP por noche, capacidad 4. "
        "Contacto: Teléfono +57 312 345 6789, Email: reservas@hotelcaribe.com"
    )
