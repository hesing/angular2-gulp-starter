import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'compose'
})

@View({
	templateUrl: 'components/compose/compose.html'
})

export class Compose {
	title: string;

	constructor() {
		this.title = 'I am composing';
	}
}