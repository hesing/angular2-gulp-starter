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
var BookService_1 = require('components/book/BookService');
var FriendsService = (function () {
    function FriendsService() {
        this.names = ['Alice', 'Aarav', 'Martín', 'Shannon', 'Ariana', 'Kai'];
    }
    return FriendsService;
})();
var Book = (function () {
    function Book(bookService) {
        this.bookTitle = 'All Books';
        this.details = bookService.details;
        this.grade = 1;
    }
    Book = __decorate([
        angular2_1.Component({
            selector: 'books',
            bindings: [BookService_1.BookService]
        }),
        angular2_1.View({
            templateUrl: './components/book/books.html',
            directives: [angular2_1.NgFor, compose_1.Compose]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof BookService_1.BookService !== 'undefined' && BookService_1.BookService) === 'function' && _a) || Object])
    ], Book);
    return Book;
    var _a;
})();
exports.Book = Book;

//# sourceMappingURL=books.js.map
