import {Component, View} from 'angular2/angular2';
// import {RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';

// import { About } from 'components/about/about';
import {Book} from 'components/book/books';
import {MyForm} from 'components/form/form';

@Component({
	selector: 'app'
})

@View({
		templateUrl: './components/root/root.html',
		directives: [Book, MyForm]
		// directives: [Book, RouterOutlet, RouterLink]
})

// @RouteConfig([
// 	{ path: "/book", component: Book, as: 'book' },
// 	{ path: "/about", component: About, as: 'about' },
// ])

export class Root {
	title: string;

	constructor() {
		this.title = 'Hello PPAAA';
	}
}