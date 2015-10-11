import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'myform'
})

@View({
	templateUrl: './components/form/form.html',
	directives: [FORM_DIRECTIVES]
})

export class MyForm {
	onSubmit(value) {
	    console.log('you submitted value: ', value);
	}
}