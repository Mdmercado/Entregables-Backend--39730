## Instrucciones de uso

1. Clonar el repositorio con la consola de comandos usando el comando `git clone [url del repositiorio]`.
2. Navegar a la carpeta del repositorio clonado con el comando `cd Entregable_5`.
3. En la consola una vez parado en el directorio correr el comando `npm install`.
4. Ejecutar el archivo `index.js` con el comando `node src/app.js`.

> **Nota:** Una vez que hayas iniciado el servidor, abre tu navegador web y dirígete a `http://localhost:8080/views` para acceder a la página principal de la aplicación.

## Endpoints de utilidad para la consigna

- `path "/"`: Ruta raíz que muestra la plantilla index.
- `path "/home"`: Ruta que muestra la plantilla de todos los productos llamada `home.handlebars`.
- `path "/realtimeproducts"`: Ruta que muestra la plantilla con la consigna que utiliza web sockets.
