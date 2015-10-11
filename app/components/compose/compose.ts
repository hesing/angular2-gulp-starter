import {Component, View} from 'angular2/angular2';
// import {Parent} from 'angular2/annotations';
// import {BookService} from 'components/book/BookService';

@Component({
	selector: 'compose'
})

@View({
	templateUrl: 'components/compose/compose.html'
})

export class Compose {
	title: string;
	subtitle: string;

	constructor() {
		this.title = 'I am composing';
	}

	addSubtitle(elm) {
		this.subtitle = elm.value;
		//BookService.addTitle({ title: this.subtitle });
	}

	doneTyping($event) {
		if ($event.which === 13) {
			this.subtitle = $event.target.value;
			$event.target.value = null;
		}
	}
}