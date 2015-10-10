import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'app'
})

@View({
		templateUrl: './components/root/root.html'
})

export class Root {
	title: string;

	constructor() {
		this.title = 'Hello PPAAA';
	}
}