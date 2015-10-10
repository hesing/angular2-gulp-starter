import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'app'
})

@View({
	template: `
		<div class="container">
			<h1>Hello Wo - {{ title }}</h1>
		</div>
	`
})

class AppComponent {
	title: String;

	constructor() {
		this.title = 'Hello PPAAA 1';
	}
}

bootstrap(AppComponent);
