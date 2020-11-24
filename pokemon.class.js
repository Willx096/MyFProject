//para crear una classe, 
//una classe es como un molde en una fabrica, 
//la idea es poder crear tantas pokedex como queramos
class Pokemon{
  id = 0;
  num = '';
  name = '';
  imag = '';
  type = [];
  height = '';
  weight = '';
  candy = 0;
  spawn_chance = 0;
  avg_spawns = 0;
  spawn_time = '';
  multipliers = [];
  weakness = [];
  next_evolution = [];
    



	//es un metodo que se ejecuta por defecto 
	//cuando creamos un objeto de esta clse
	constructor(idd,num,name,img,type,height,weight,cnd,hv,sc,avg,st,mult,wk,nextevol){
    this.id = idd || 0;
    this.number = num || '';
    this.name = name || '';
    this.imagen = img || '';
    this.type = type || [] ; 
    this.height = height || '';
    this.weight = weight || '';
    this.candy = cnd || 0;
    this.egg = hv || '';
    this.spawn_chance = sc || 0;
    this.avg_spawns =  avg || 0;
    this.spawn_time = st || '';
    this.multipliers = mult || [];
    this.weakness = wk || [];
    this.next_evolution = nextevol || [];
    
		
    console.log('constructor');
    console.log('id:' + this.id);
    console.log('number:' + this.number);
		console.log('name:' + this.name);
    console.log('imagen:' + this.imagen);
    console.log('type:' + this.type);
    console.log('height:' + this.height);
    console.log('weight:' + this.weight);
    console.log('candy:' + this.candy);
    console.log('egg:' + this.egg);
    
    console.log('spawn_chance = spawn_chance:' + this.spawn_chance);
    console.log('avg_spawns:' + this.avg_spawns);
    console.log('spawn_time:' + this.spawn_time);
    console.log('multipliers:' + this.multipliers);
    console.log('weakness:' + this.weakness);
    console.log('next_evolution:' + this.next_evolution);

	}


	load(){
		console.log('loading Pokemon');
	}
}
