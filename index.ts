abstract class Vehicle {
  protected make: string;
  protected model: string;
  protected year: number;
  protected rented: boolean;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  isRented(): boolean {
    return this.rented;
  }

  setRented(rented: boolean): void {
    this.rented = rented;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (this.rented) {
      console.log(`${this.make} ${this.model} is already rented.`);
    } else {
      this.rented = true;
      console.log(`${this.make} ${this.model} is now rented.`);
    }
  }

  returnVehicle(): void {
    if (this.rented) {
      this.rented = false;
      console.log(`${this.make} ${this.model} has been returned.`);
    } else {
      console.log(`${this.make} ${this.model} is not rented.`);
    }
  }
}
