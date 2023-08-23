//Puse los tres ejercicios juntos en este archivo profe solo es cosa de ejecutarlos en la consola
//ejercicio 1

function Count(value) {
    var contar = 0;
    var cadena = value;
    //siento que es muy sencilla pero es lo que se me ocurrio
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==mayusculas[i]){
                contar+=1;
            }
        }
    }
    return contar;
}

function CamelToSnake(key) {
   var result = key.replace( /([A-Z])/g, " $1" );
   //como la primera letra es mayuscula tambien se agrega un espacio al inicio por eso borro una posicion
   var result2 = result.slice(1); 
   return result2.split(' ').join('_');
}

console.log("Ejercicio 1: ");
console.log("Numero de palabras: " + Count('MateriaProgramacionMovilUnidad1') + "");
console.log("SnakeCase: " + CamelToSnake('MateriaProgramacionMovilUnidad1') + "");


//ejercicio 2

function generateCombinations(numbers) {
    const result = [];
    function backtrack(inicio = 0, currentCombo = []) {
        //esto me costo un poco pero lo que hago es utilizar el operador de "spread" para expandir los elementos de un arreglo en el otro 
        result.push([...currentCombo]);
        for (let i = inicio; i < numbers.length; i++) {
            currentCombo.push(numbers[i]);
            //estos son log de control porque queria ver que se avanzara y retrocediera cuando debia solo ignorelos
            //console.log("entra" + currentCombo);
            backtrack(i + 1, currentCombo);
            currentCombo.pop();
            //console.log("sale" + currentCombo);
        }
    }
    backtrack();
    return result;
}

// Puse los valores para modificarlos aqui en vez de recibirlos por el teclado me era mas facil asi al igual que en el ejercicio 1
const numArray = [1, 2, 3, 4];
const comb = generateCombinations(numArray);

console.log("Ejercicio 2: ");
console.log(comb);


//ejercicio 3

fetch('https://rickandmortyapi.com/api/character').then(data => console.log(data))

const getInfo = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();
    arreglo(results);
  };

const arreglo = (data) => {
    let newInfo = data.filter((item) => item.id % 2 === 0);
    newInfo.forEach((element) => {
      if (element.type === '') return (element.type = 'Programacion Movil');
    });
    const endData = newInfo.map((element) => {
      return {
        personaje: element.name,
        episodios: element.episode.length,
        masDeCincoEpisodios: element.episode.length > 5 ? 'Si' : 'No',
      };
    });
  
    console.log('Informacion:');
    console.log(endData);
  };
//creo que al hacer la conversion ya no se ve la parte donde se agrego programacion movil al string vacio no se porque
getInfo();
console.log("Ejercicio 3: ")