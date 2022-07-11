'use strict';

console.log('app is ok');

const loadApp = () => {
  let selected = document.querySelectorAll('.hecta');
  selected.forEach((element) => element.classList.add('active'));
};

let calcular = () => {
  let formu = document.forms['formulario'];
  let dato = formu['dato'];
  let resultado = '';
  let mostrar = false;

  let selector = document.getElementById('opcion');
  if (dato.value > 0) {
    switch (selector.value) {
      case 'hectareas': {
        resultado = `
        ${formatNumber((dato.value * 10000) / 6400)} Cuadras <br> 
        ${formatNumber(dato.value * 10000)} Metros`;
        mostrar = true;
        break;
      }
      case 'metros': {
        resultado = `
        ${formatNumber(dato.value / 10000)} Hectareas <br>
        ${formatNumber(dato.value / 6400)} Cuadras`;
        mostrar = true;
        break;
      }
      case 'cuadras': {
        resultado = `
        ${formatNumber((dato.value * 6400) / 10000)} Hectareas <br>
        ${formatNumber(dato.value * 6400)} Metros`;
        mostrar = true;
      }
    }
  }

  if (mostrar) {
    document.getElementById('neo').classList.add('transition');
    let info = `
                   <div>
                   <h3>Resultado</h3>
                   <div>${resultado}</div>
                   </div>
                `;
    
    document.getElementById('valor').innerHTML = info;
    document.getElementById('resultado').style.visibility = 'visible';
  }
};

let limpiarActivo = () => {
  let clases = document.querySelectorAll('.active');

  for (let index = 0; index < clases.length; index++) {
    clases[index].classList.remove('active');
  }
};

let asignarActivo = (id) => {
  if (typeof id === 'string') {
    let clases = document.querySelectorAll(`${id}`);

    clases.forEach((element) => element.classList.add('active'));
  } else {
    console.log('Not String');
  }
};

let mostrarMetros = () => {
  limpiarActivo();
  asignarActivo('.metros');

  document.getElementById('opcion').value = 'metros';

  document.getElementById('subtitle').innerHTML = 'Metros cuadrados';
};

let mostrarCuadras = () => {
  limpiarActivo();

  asignarActivo('.cuadras');

  document.getElementById('opcion').value = 'cuadras';

  document.getElementById('subtitle').innerHTML = 'Cuadras';
};

let mostrarHectareas = () => {
  limpiarActivo();

  asignarActivo('.hecta');

  document.getElementById('opcion').value = 'hectareas';

  document.getElementById('subtitle').innerHTML = 'Hectareas';
};

const formatNumber = (number) => {
  let resultado = new Intl.NumberFormat('es-CO').format(number);
  return resultado;
};
