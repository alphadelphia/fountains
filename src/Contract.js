class Fountain {
	constructor(name,dna){
		this.name = name;
		this.dna = dna;
	}
}

export class Contract
{
	
	fountains = [];

	createFountain = (name, dna) => {
		let fountain = new Fountain(name,dna);
		console.log(fountain);
		let id = this.fountains.push(fountain) - 1;
		console.log("New fountain, id: " + id +
			" name: " + fountain.name + 
			" dna: " + fountain.dna);
	}	

	generateRandomDna = (str) => {
		let rand = keccak256(str);
		return rand.slice(0,16);
	}

	createRandomFountain = (name) => {
		let randDna = this.generateRandomDna(name);
		this.createFountain(name, randDna);
	}
}

export let contract = new Contract();



