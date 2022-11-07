//CAPTURANDO LOS ELEMENTOS

//CONSTANTES
//Se utiliza const debido a que los valores correspondientes no van a variar nunca sino que se van a mantener siempre igual siendo los valores constantes los números y los simbolos de operaciones matemáticas 
const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];

//VARIABLES
//Debido a que las variables identificadas con var pueder cambiar su resultado y a que los resultados que arrojen las operaciones realizadas con las constantes declaradas cambiarán según su utilización, se utiliza var para la generación del resultado variable
var result = document.getElementById("result");
var opeActual = "";
var opeAnterior ="";
var operacion = undefined;

//AGREGANDO EVENTOS A LOS BOTONES

//En esta parte se agrega el evento click mediante el método forEach() el cual ejecuta la función indicada una vez por cada elemento señalado, a la constante botonNumeros las cuales en el HTML corresponden al name "data-number" asignando así una función con el parámetro botón la cual al ejecutarse utiliza el .addEventListener.

//Frente a la utilización del .addEventListener podemos evidenciar que se realiza asignando el evento del click junto con la función de lo que debe pasar al realizar el click invocando en ella el innetText, el cual se encarga de mostrar el contenido señalado en el HTML del boton seleccionado.

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});
//El metodo en este caso es el agregarNumero funcion que fue creada más adelatne
botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        seleccionarOperacion(boton.innerText);
    })
});

//En estos siguientes casos como solo es 1 elemento no se debe usar el forEach al no tratarse de un array sino de un elemeto único
botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

modoOscuro.addEventListener('click', function(){
    cambioColor();
});

ultimoDelete.addEventListener('click', function(){
    eliminarUltimo();
    actualizarDisplay();
});

//IMPLEMENTACIÓN DE MÉTODOS O FUNCIONES

//PRIMER METODO: agregarNumero
//to string funcion que se aplica a las cadenas de texto para traer esa

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

//Se estaría inicializando las variables iniciales. cada vez que se refresque la página el input va a quedar vacio.

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}
//funcion DEL se indica que cuando se cliquee en la imagen con el evento onclick "del" se ejecute la función del, la cual posee una serie de variables en su interior a aplicar en diferentes partes del HTML por medio del CSS
function del() { 
    opeActual = opeActual.slice(0, -1);
};

del();
//funcion MODO OSCURO se indica que cuando se cliquee en la imagen con el evento onclick "cambiarModo"se ejecute la función cambiarModo, la cual posee una serie de variables en su interior a aplicar en diferentes partes del HTML por medio del CSS
function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 

    var calculadweb = document.getElementById("calcul"); 
    calculadweb.classList.toggle("botonesOscuros"); 
}


//MIN 28 si la operacion actual e sigual a vacio qu eno haga nada ypor ende salga de la operacion (no hay numero en la ope actual) si se le pregunta a la operacion anteiror es diferente a vacio se calcular. la operacion es igual a la op.tostring NO ENTENDI
function seleccionarOperacion(op){
    if (opeActual === '') return;
    if (opeActual !== ''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular (){
    var calculo
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}