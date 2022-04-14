//alert('Hola!');
/**DOM Manipular el documento HTML
 * a travez de JS
 */
let cajas = document.getElementsByClassName('caja');
//cajas[0].innerHTML = '<h1> Caja </h1>'; // incrusta codigo HTML
//cajas[2].textContent = 'Tercera Caja'; // solo texto
/**Si realizo ls cambios en consola en navegador los cambios
 * son temporales, mientras que en code no es así.
 */

let divs = document.getElementsByTagName('div');

let primera = document.getElementById('primera');
// primera.textContent = 'Primera Caja';
// CREAR UN NODO
// 1. Crear el elemento

var caja = document.createElement('div');

// 2. Crear un nodo de texto

var contenido = document.createTextNode('Hola Mundo');

// 3. Añadir el nodo de texto al elemento

caja.appendChild(contenido);

// 4. Añadir propiedades

//caja.setAttribute('class', 'caja naranja');

// 5. Agregar el elemento al documento HTML

var contenedor = document.getElementById('contenedor');
//contenedor.appendChild(caja);

// cajas[2].innerHTML = '<ul><li>UNO</li></ul>';

// Modificar la calse del elemento

caja.className = 'caja naranja';
caja.id = 'miCaja';

//var padre = document.getElementsByTagName('section');
let padre = cajas[0].parentNode;

// metodo parentNode para saber el padre o 
//el contenedor Padre

//padre.insertBefore(caja, cajas[0]);

//padre.insertBefore(caja, primera);

// Reemplazar 

padre.replaceChild(caja, cajas[1]);

// Eliminar 

padre.removeChild(cajas[2]);