from fastapi import FastAPI

app = FastAPI()

@app.get("/habitaciones")
def get_habitaciones():
        return (
                "Hola, solo tenemos siete habitaciones disponibles."
                "La primera es una suite con todos los lujos incluidos."
                "La segunda es penhouse con una maravillosa vista y todas las comodidades."
                "La última es una habitación en el séptimo piso con una maravillosa bañera."
)
