const main = (params) => {
    //Primeiro definimos as funções e depois chamamos o fluxo principal

//lista de possíveis letras
const letras = 'abcdefghijklmnopqrstuvwxyz';

function CriaPalavra()
{
		let numeroLetras = 3 + 2*Math.round(Math.random()) // 0 ou 1 
    
    //debug
    //console.log(numeroLetras);
    
    let palavra = "";
 		     
    for ( let i = 0; i < numeroLetras; i++ ) 
    {
    		palavra += letras.charAt(Math.floor(Math.random() * letras.length));
    }
        
    //debug
    //console.log(palavra);    
    return palavra;
}

function CriaMatriz(){
	//matrix 2D trata-se de uma lista de listas

		let numeroLinhas = 10;
    let numeroColunas = 1000;

    let externa = [];

    for(let i=0; i<numeroLinhas; i++) //cria 10 listas
    {
        let interna = []
        for(let j=0; j<numeroColunas; j++) //cada lista com 1000 elementos
        {
            interna.push(CriaPalavra());
        }

        externa.push(interna);
    }

    //debug
    //console.log(externa);
    return externa;
}

function ContaPalindromes(matriz)
{
    let numeroPalindromes = 0;
       
    for(let i=0; i<matriz.length; i++)
    {
        for(let j=0; j<matriz[i].length; j++)
        {
        		let palavra = matriz[i][j];
            
            //debug
            //console.log(matriz[i][j]);
        
            if(palavra.length == 3 && palavra[0] == palavra[2])
            {
            		//debug
                //console.log("Palindrome: " + palavra);           
                numeroPalindromes += 1;
            }
            else if(palavra.length == 5 && palavra[0] == palavra[4] && palavra[1] == palavra[3])
            {
            		//debug
                //console.log("Palindrome: " + palavra);
            		numeroPalindromes += 1;
            }
        }
    }
    
    return numeroPalindromes;
}

//Fluxo principal
console.log("Criando matriz...");
let matriz = CriaMatriz();
console.log("Contando número de palavras Palíndromes...")
let numeroPalindromes = ContaPalindromes(matriz);
console.log("O número de palíndromes é: " + numeroPalindromes);
}