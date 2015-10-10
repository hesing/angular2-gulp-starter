import {Component, View} from 'angular2/angular2';
import {Book} from 'components/book/books';

@Component({
	selector: 'app'
})

@View({
		templateUrl: './components/root/root.html',
		directives: [Book]
})

export class Root {
	title: string;

	constructor() {
		this.title = 'Hello PPAAA';
	}
}