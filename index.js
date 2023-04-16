/*iniciamos con .match*/
//.match() busca la palabra y nos  la devuelve.
let free = "freecodecamp";
let busqueda = /camp/;
//en la variable que contiene las palabras o los datos en donde queremos buscar, se le realiza la funcion test
let result = free.match(busqueda);
console.log(result + "  este es la busqueda con .macht()")
//podemos usar varias banderas o salvedades
//como la i = ignora si es mayusculas o minusculas y la g = que busca varias veces la palabra

let star = "twinkle, twinkle, little star"
let search = /Twinkle/gi;
let obtenido = star.match(search);
console.log(obtenido + "  este es con 'g' e 'i' y solo nos devuelve twinkle las veces que aparace")

//tabien podemos hacer busqueda de varios elementos a la vez
let string = "birds, cat, rabbit, horse, pony, dragon, siren, unicorn"
let busca = /birds|cat|dragon|unicorn/
let encontrado = string.match(busca);
console.log(encontrado + "  aca encontramos varios elementos utilizando el elemento 'or' simbolizado por '|' ")


//el . como un comodin que hace que las palabras parecidas aparascan
let strinG = "i ll hum a song";
let strnG = "bear hug";
let searcRegex = /hu./;
let busSt = strinG.match(searcRegex);
let Strong = strnG.match(searcRegex);
console.log(busSt +"  " +  Strong + "  estos es con el comodin del punto que devuelve lo mas parecido a la palabra buscada")


//con el guion - buscamos en rangos, tanto de numero como de letras
let alfanum = "este es una busqueda 123456789"
let busqueMOS = /[a-z3-8]/gi;
let encont = alfanum.match(busqueMOS)
console.log(encont + "   aca cada elemento se ve como un array dado que buscamos en un rango,  utilizando el - encontramos un rango de letras o de numeros.")


//con el ^ se niegan lo caracteres que le siguen
let negado = "este va a tener letras ?¿15646 !!;:;:;;;"
let negando = /[^aeiou1-9]/gi
let vamos = negado.match(negando)
console.log(vamos + "  aca negamos las vocales y los numeros")



//utilizamos el simbolo + para buscar repetidamente una letra
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Cambia esta línea
let result1 = difficultSpelling.match(myRegex);
console.log(result1)



//con * se busca cuando el elemento o dato, es repetido varias veces.
let speaking = "Aaaaaaalaaabaaamaaaaaaaa"
let counter = /Aa*/gi;
let res = speaking.match(counter);
console.log(res)