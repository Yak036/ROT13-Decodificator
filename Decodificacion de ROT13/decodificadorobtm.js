//se crea una expresion para validar si tiene signos la palabra dada
const expresion = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/
function rot13(str) {
    //se hace un variable con todas las letras del abecedario
    const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //la palabra dada se separa en diferentes elementos de un array
    let palabra = str.split('')
//se hace un bucle for que recorra la longitud del array creado en base a la palabra dada
    for(i = 0;i<palabra.length;i++){
        //si la letra es diferente de un espacio vació pasa
         //si la letra es diferente de un signo pasa
        if(palabra[i]!=' ' && expresion.test(palabra[i])!=true){
            //variable de ubicacion que indica en que parte del array abecedario se ubica la letra de la palabra dada
            let ubicacion =abecedario.indexOf(palabra[i])
            //la letra es reemplazada por la letra del abecedario que este al sumarle 13 posiciones
            palabra.splice(i,1,abecedario[(ubicacion+13)%abecedario.length])
        
        }
    }
    palabra = palabra.join('')
    console.log(palabra)
    return palabra;
}

rot13("SERR PBQR PNZC...");