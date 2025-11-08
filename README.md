# API REST NODE.JS CRUD (AGENCIA DE VEHICULOS CON SUCURSALES)

## DESCRIPCION 

Esta API REST permite gestionar información de vehículos en una base de datos.
Ofrece endpoints para consultar, agregar, actualizar y eliminar registros, además de filtrar vehículos por ciudad de agencia, marca o rango de precios.

## instalacion

1. Clonar repositorio
2. Instalar dependencias

```bash
npm install
```

3. Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo .env con los valores correspondientes para tu entorno.

4. Ejecutar

```bash 
node index.js
```

## Documentacion de la API

### Obtener todos los vehiculos

- **GET** `/vehiculos`
- **Descripcion:** Devuelve la lista de todos los vehiculos
- **Respuesta ejemplo:**

```json
[
    {
        "id": 1,
        "marca": "Toyota",
        "modelo": "Corolla",
        "color": "Blanco",
        "precio": 20000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:20:28"
    },
    {
        "id": 2,
        "marca": "Toyota",
        "modelo": "Corolla",
        "color": "Blanco",
        "precio": 20000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 3,
        "marca": "Toyota",
        "modelo": "Hilux",
        "color": "Gris",
        "precio": 35000,
        "stock": 2,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 4,
        "marca": "Honda",
        "modelo": "Civic",
        "color": "Negro",
        "precio": 23000,
        "stock": 4,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 6,
        "marca": "Chevrolet",
        "modelo": "Spark",
        "color": "Azul",
        "precio": 18000,
        "stock": 5,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 7,
        "marca": "Chevrolet",
        "modelo": "Onix",
        "color": "Plata",
        "precio": 21000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    }
]
```

### Buscar vehiculos por id

- **GET** `/vehiculos`
- **Descripcion:** Devuelve el vehiculo con el id especifico
- **Ejemplo de uso:** /vehiculos/1
- **Respuesta ejemplo:**


```json 

[
    {
    "id": 1,
    "marca": "Toyota",
    "modelo": "Corolla",
    "color": "Blanco",
    "precio": 20000,
    "stock": 3,
    "agencia_id": 1,
    "creado_en": "2025-11-08 04:20:28"
}
]

```

### Buscar vehiculo por marca
- **GET** `/vehiculos`
- **Descripcion:** Devuelve el vehiculo con la marca especificada
- **Ejemplo de uso:** /vehiculos/marca/Toyota
- **Respuesta ejemplo:**

```json

    [
    {
        "id": 1,
        "marca": "Toyota",
        "modelo": "Corolla",
        "color": "Blanco",
        "precio": 20000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:20:28"
    },
    {
        "id": 2,
        "marca": "Toyota",
        "modelo": "Corolla",
        "color": "Blanco",
        "precio": 20000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 3,
        "marca": "Toyota",
        "modelo": "Hilux",
        "color": "Gris",
        "precio": 35000,
        "stock": 2,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    }
]

```
### Buscar vehiculo por agencia
- **GET** `/vehiculos`
- **Descripcion:** Devuelve el vehiculo con la agencia especificada
- **Ejemplo de uso:** /vehiculos/marca/Toyota
- **Respuesta ejemplo:**

```json

[
    {
        "id": 1,
        "marca": "Toyota",
        "modelo": "Corolla",
        "color": "Blanco",
        "precio": 20000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:20:28"
    },
    {
        "id": 2,
        "marca": "Toyota",
        "modelo": "Corolla",
        "color": "Blanco",
        "precio": 20000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 3,
        "marca": "Toyota",
        "modelo": "Hilux",
        "color": "Gris",
        "precio": 35000,
        "stock": 2,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 4,
        "marca": "Honda",
        "modelo": "Civic",
        "color": "Negro",
        "precio": 23000,
        "stock": 4,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 6,
        "marca": "Chevrolet",
        "modelo": "Spark",
        "color": "Azul",
        "precio": 18000,
        "stock": 5,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 7,
        "marca": "Chevrolet",
        "modelo": "Onix",
        "color": "Plata",
        "precio": 21000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 8,
        "marca": "Nissan",
        "modelo": "Versa",
        "color": "Blanco",
        "precio": 19000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 9,
        "marca": "Nissan",
        "modelo": "Sentra",
        "color": "Rojo",
        "precio": 22000,
        "stock": 2,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 10,
        "marca": "Ford",
        "modelo": "Fiesta",
        "color": "Negro",
        "precio": 17000,
        "stock": 4,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    }
]

```

### Buscar vehiculo por precio maximo
- **GET** `/vehiculos`
- **Descripcion:** Devuelve los vehiculos con un precio igual o mayor al especificado
- **Ejemplo de uso:** /vehiculos/precio/max/20000
- **Respuesta ejemplo:**

```json

[
    {
        "id": 1,
        "marca": "Toyota",
        "modelo": "Corolla",
        "color": "Blanco",
        "precio": 20000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:20:28"
    },
    {
        "id": 2,
        "marca": "Toyota",
        "modelo": "Corolla",
        "color": "Blanco",
        "precio": 20000,
        "stock": 3,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 6,
        "marca": "Chevrolet",
        "modelo": "Spark",
        "color": "Azul",
        "precio": 18000,
        "stock": 5,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    }
]

```

### Buscar vehiculo por precio minimo
- **GET** `/vehiculos`
- **Descripcion:** Devuelve los vehiculos con un precio igual o menor al especificado
- **Ejemplo de uso:** /vehiculos/precio/min/18000
- **Respuesta ejemplo:**

```json

[
    {
        "id": 6,
        "marca": "Chevrolet",
        "modelo": "Spark",
        "color": "Azul",
        "precio": 18000,
        "stock": 5,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 10,
        "marca": "Ford",
        "modelo": "Fiesta",
        "color": "Negro",
        "precio": 17000,
        "stock": 4,
        "agencia_id": 1,
        "creado_en": "2025-11-08 04:21:43"
    },
    {
        "id": 14,
        "marca": "Toyota",
        "modelo": "Yaris",
        "color": "Rojo",
        "precio": 18000,
        "stock": 4,
        "agencia_id": 2,
        "creado_en": "2025-11-08 04:22:23"
    }
]

```

### Anadir vehiculo
- **POST** `/vehiculos`
- **Descripcion:** Anade el vehiculo ingresado
- **Ejemplo de uso:** /vehiculos/
- **Body (JSON):**

```JSON

[
{
  "marca": "Chevrolet",
  "modelo": "Aveo",
  "color": "Rojo",
  "precio": 18000,
  "stock": 12,
  "agencia_id": 3
}
]

```

### Actualoizar vehiculo
- **PUT** `/vehiculos`
- **Descripcion:** Modifica el vehiculo especificado
- **Ejemplo de uso:** /vehiculos/1
- **Body (JSON):**

```json

{
  "marca": "Toyota",
  "modelo": "Corolla",
  "color": "Blanco",
  "precio": 10000,
  "stock": 3,
  "agencia_id": 1
}

```

### Borrar vehiculo
- **PUT** `/vehiculos`
- **Descripcion:** Elimina el vehiculo especificado
- **Ejemplo de uso:** /vehiculos/1