//para crear una classe, 
//una classe es como un molde en una fabrica, 
//la idea es poder crear tantas pokedex como queramos
class Pokedex{
	listaPokemon = null;
	paginacion = 12;
	columnas = 4;


	//es un metodo que se ejecuta por defecto 
	//cuando creamos un objeto de esta clse
	constructor(pag,col){
		this.paginacion = pag || 12;
		this.columnas = col || 4;
		console.log('constructor');
		console.log('paginacion:' + this.paginacion);
		console.log('columnas:' + this.columnas);
	}


	load(){
		console.log('loading Pokemon');
	}
}