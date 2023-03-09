# DESAFÍO ENTREGABLE - PROCESO DE TESTING

## Manejo de archivos

1. Se creará una instancia de la clase `ProductManager`.

2. Se llamará al método `getProducts` recién creada la instancia, debe devolver un arreglo vacío `[]`.

3. Se llamará al método `addProduct` con los campos:

   - title: “producto prueba”
   - description:”Este es un producto prueba”
   - price: 200
   - thumbnail: ”Sin imagen”
   - code: ”abc123”
   - stock: 25

   El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE.

4. Se llamará el método `getProducts` nuevamente, esta vez debe aparecer el producto recién agregado.

5. Se llamará al método `getProductById` y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.

6. Se llamará al método `updateProduct` y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.

7. Se llamará al método `deleteProduct`, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.

## Instrucciones de uso

1. Clonar el repositorio con la consola de comandos usando el comando `git clone [url del repositiorio]`.

2. Navegar a la carpeta del repositorio clonado con el comando `cd Entregable_2`.

3. Ejecutar el archivo `index.js` con el comando `node index.js`.
