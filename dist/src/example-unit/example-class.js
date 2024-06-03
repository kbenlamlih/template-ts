var MyClass = /** @class */ (function () {
    function MyClass(aNumber) {
        this.aNumber = aNumber;
    }
    MyClass.prototype.get = function () {
        return this.aNumber;
    };
    return MyClass;
}());
export { MyClass };
