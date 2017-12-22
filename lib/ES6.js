'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function Animal(props) {
    _classCallCheck(this, Animal);

    this.legs = props.legs;

    this.eyes = props.eyes;

    this.head = props.head;

    this.fingles = props.fingles;
};

var Cat = function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat(props) {
        _classCallCheck(this, Cat);

        var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, props));

        _this.ears = props.ears;

        _this.name = props.name;
        return _this;
    }

    return Cat;
}(Animal);

var myCat = new Cat({
    legs: 4,
    eyes: 2,
    head: 1,
    fingles: 10,
    ears: 2,
    name: 'little white'
});

var _ref = [1, 2],
    a = _ref[0],
    b = _ref[1],
    c = _ref[2];


console.log(a + '. I have a cat who name is ' + myCat.name + ',it has ' + myCat.ears + ' ears and ' + myCat.fingles + ' fingles\n' + b + '. waiting\n' + c + '. none');