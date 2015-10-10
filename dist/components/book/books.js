var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var compose_1 = require('components/compose/compose');
var Book = (function () {
    function Book() {
        this.bookTitle = 'All Books';
        this.details = [
            { title: '1st Book', msg: 'Lorem ipsum dolor sit amet.' },
            { title: '2nd Book', msg: 'Lorem ipsum dolor sit amet.' },
            { title: '3rd Book', msg: 'Lorem ipsum dolor sit amet.' },
            { title: '4th Book', msg: 'Lorem ipsum dolor sit amet.' },
            { title: '5th Book', msg: 'Lorem ipsum dolor sit amet.' }
        ];
        this.grade = 1;
    }
    Book = __decorate([
        angular2_1.Component({
            selector: 'books'
        }),
        angular2_1.View({
            templateUrl: './components/book/books.html',
            directives: [angular2_1.NgFor, compose_1.Compose]
        }), 
        __metadata('design:paramtypes', [])
    ], Book);
    return Book;
})();
exports.Book = Book;

//# sourceMappingURL=books.js.map
