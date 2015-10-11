export class BookService {
	details: any[];

	constructor() {
		this.details = [
			{ title: '1st Book', msg: 'Lorem ipsum dolor sit amet.' },
			{ title: '2nd Book', msg: 'Lorem ipsum dolor sit amet.' },
			{ title: '3rd Book', msg: 'Lorem ipsum dolor sit amet.' },
			{ title: '4th Book', msg: 'Lorem ipsum dolor sit amet.' },
			{ title: '5th Book', msg: 'Lorem ipsum dolor sit amet.' }
		];
	}

	// addTitle(obj){
	// 	this.details.push(obj);
	// 	console.log(obj);
	// }

	// getAllBooks(){
	// 	return this.details;
	// }
}