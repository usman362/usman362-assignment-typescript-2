var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.rented) {
            console.log("".concat(this.make, " ").concat(this.model, " is already rented."));
        }
        else {
            this.rented = true;
            console.log("".concat(this.make, " ").concat(this.model, " is now rented."));
        }
    };
    Vehicle.prototype.returnVehicle = function () {
        if (this.rented) {
            this.rented = false;
            console.log("".concat(this.make, " ").concat(this.model, " has been returned."));
        }
        else {
            console.log("".concat(this.make, " ").concat(this.model, " is not rented."));
        }
    };
    return Vehicle;
}());
