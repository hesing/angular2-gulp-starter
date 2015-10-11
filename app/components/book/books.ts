import {Component, View, NgFor} from 'angular2/angular2';
import {Compose} from 'components/compose/compose';
import {BookService} from 'components/book/BookService';


class FriendsService {
	names: Array<string>;
	constructor() {
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
	}
}

@Component({
	selector: 'books',
	bindings: [BookService]
})

@View({
	templateUrl: './components/book/books.html',
	directives: [NgFor, Compose]
})
export class Book {
	bookTitle: string;
	details: any[];
	grade: number;
	bookService: BookService;


	constructor(bookService: BookService) {
		this.bookTitle = 'All Books';
		this.details = bookService.details;
		this.grade = 1;
	}
}