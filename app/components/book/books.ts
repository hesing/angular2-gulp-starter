import {Component, View, NgFor} from 'angular2/angular2';
import {Compose} from 'components/compose/compose';

@Component({
	selector: 'books'
})

@View({
	templateUrl: './components/book/books.html',
	directives: [NgFor, Compose]
})

export class Book {
	bookTitle: string;
	details: any[];
	grade: number;

	constructor() {
		this.bookTitle = 'All Books';
		this.details = [
			{title: '1st Book', msg: 'Lorem ipsum dolor sit amet.'},
			{title: '2nd Book', msg: 'Lorem ipsum dolor sit amet.'},
			{title: '3rd Book', msg: 'Lorem ipsum dolor sit amet.'},
			{title: '4th Book', msg: 'Lorem ipsum dolor sit amet.'},
			{title: '5th Book', msg: 'Lorem ipsum dolor sit amet.'}
		];
		this.grade = 1;
	}
}