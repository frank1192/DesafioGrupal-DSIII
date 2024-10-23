from fastapi import FastAPI

app = FastAPI()

@app.get("/menu")
def read_menu():
    return {
        "desayuno": ["|| DESAYUNO || ", "Omelette", "Pancakes con miel", "Tostadas francesas"],
        "almuerzo": ["|| ALMUERZO || ", "Hamburguesa clásica", "Sopa de Tomate", "Pasta a la Boloñesa"],
        "cena": ["|| CENA || ", "Ensalada Cesar", "Pescadoo al horno", "Rissoto"],
        }