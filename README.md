# Inmobiliaria Cartagena del Sol

Sitio web inmobiliario para mostrar propiedades destacadas en Cartagena de Indias, consultar el detalle de cada inmueble y agendar visitas desde un formulario sencillo.

El proyecto esta construido como una aplicacion web estatica con HTML, CSS y JavaScript, usando Vite como servidor de desarrollo.

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Vista General

**Cartagena del Sol** presenta un catalogo de propiedades en venta y arriendo ubicadas en zonas como Bocagrande, Centro Historico, Manga, Manzanillo del Mar, Castillogrande y Getsemani.

La experiencia incluye:

- Pagina principal con banner, navegacion y propiedades destacadas.
- Tarjetas de propiedades generadas dinamicamente con JavaScript.
- Pagina de detalle con galeria, precio, caracteristicas y opciones para compartir.
- Formulario para agendar visitas con seleccion de propiedad, fecha y hora.
- Diseno responsive con menu movil.
- Imagenes externas cargadas desde Pexels.

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Tecnologias Utilizadas

- **HTML5** para la estructura de las paginas.
- **CSS3** para estilos, diseno responsive y componentes visuales.
- **JavaScript** para renderizado dinamico, navegacion, galeria y formulario.
- **Vite** como entorno de desarrollo y build.

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Estructura Del Proyecto

```text
inmoviliaria-cartagena/
|-- index.html          # Pagina principal y listado de propiedades
|-- detalle.html        # Vista de detalle de cada propiedad
|-- agendar.html        # Formulario para agendar visitas
|-- style.css           # Estilos generales del sitio
|-- script.js           # Datos, logica dinamica e interacciones
|-- package.json        # Scripts y dependencias del proyecto
|-- package-lock.json   # Versiones bloqueadas de dependencias
|-- public/             # Archivos publicos
`-- README.md           # Documentacion del proyecto
```

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Funcionalidades Principales

### Catalogo De Propiedades

La pagina principal carga las propiedades desde el arreglo `properties` definido en `script.js`. Cada propiedad incluye informacion como:

- Nombre.
- Ubicacion.
- Precio en COP y USD.
- Habitaciones.
- Banos.
- Area.
- Imagen principal.
- Galeria.
- Descripcion.
- Caracteristicas.
- Tipo de operacion: venta o arriendo.

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


### Detalle De Propiedad

Al seleccionar una propiedad, el usuario es llevado a `detalle.html?id=ID`, donde se muestra informacion ampliada del inmueble:

- Galeria interactiva de imagenes.
- Descripcion completa.
- Lista de caracteristicas.
- Informacion de ubicacion.
- Precio.
- Boton para agendar visita.
- Botones para compartir por Facebook, X/Twitter, WhatsApp o email.

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


### Agendamiento De Visitas

La pagina `agendar.html` permite completar un formulario con:

- Nombre completo.
- Telefono.
- Correo electronico.
- Propiedad de interes.
- Fecha preferida.
- Hora preferida.
- Mensaje adicional.

Si el usuario llega desde una propiedad especifica, el formulario selecciona automaticamente ese inmueble usando el parametro de URL.

Ejemplo:

```text
agendar.html?property=3
```

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Instalacion Y Uso

### 1. Clonar O Descargar El Proyecto

```bash
git clone <url-del-repositorio>
cd inmoviliaria-cartagena
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar En Modo Desarrollo

```bash
npm run dev
```

Luego abre la URL que muestre Vite en la terminal. Normalmente sera:

```text
http://localhost:5173/
```

### 4. Generar Version De Produccion

```bash
npm run build
```

### 5. Previsualizar La Build

```bash
npm run preview
```

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Como Editar Las Propiedades

Para agregar, eliminar o modificar inmuebles, edita el arreglo `properties` dentro de `script.js`.

Ejemplo basico de una propiedad:

```js
{
    id: 1,
    title: "Apartamento Vista al Mar",
    location: "Bocagrande, Cartagena",
    price: "$850,000,000",
    priceUSD: "USD $220,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    image: "https://...",
    gallery: ["https://...", "https://..."],
    description: "Descripcion de la propiedad...",
    features: ["Vista al mar", "Piscina", "Seguridad 24/7"],
    type: "Venta"
}
```

> Importante: cada propiedad debe tener un `id` unico para que la navegacion al detalle y el formulario funcionen correctamente.

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Paginas Disponibles

| Pagina | Descripcion |
| --- | --- |
| `index.html` | Inicio del sitio y catalogo de propiedades |
| `detalle.html` | Informacion detallada de una propiedad |
| `agendar.html` | Formulario para programar una visita |

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Posibles Mejoras Futuras

- Conectar el formulario con un backend o servicio de email.
- Agregar filtros por precio, zona, tipo de operacion y numero de habitaciones.
- Implementar busqueda por texto.
- Guardar propiedades favoritas.
- Anadir panel administrativo para gestionar inmuebles.
- Optimizar imagenes locales para mejorar el rendimiento.
- Corregir textos con caracteres especiales si se detectan problemas de codificacion.

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Autor

Proyecto creado como una propuesta web para una inmobiliaria en Cartagena de Indias, Colombia.

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>


## Licencia

Este proyecto puede adaptarse libremente para fines educativos, personales o comerciales segun las necesidades tus necesidades, siempre y cuando se mantenga la atribucion al autor original 🤙.

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" alt="Bottom Line" width="100%" />
</div>

