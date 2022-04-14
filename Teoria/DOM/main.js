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

primera.textContent = 'Primera Caja';