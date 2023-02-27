export abstract class Vehicle {
	// getNumberOfSears(): number{
	//     throw new Error("Method not implemented");
	// }

	abstract getNumberOfSears(): number;
}

export class Tesla extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSears() {
		return this.numberOfSeats;
	}
}

export class Audi extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSears() {
		return this.numberOfSeats;
	}
}

export class Toyota extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSears() {
		return this.numberOfSeats;
	}
}

export class Honda extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSears() {
		return this.numberOfSeats;
	}
}

export class Volvo extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSears() {
		return this.numberOfSeats;
	}
}

export class Ford extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSears() {
		return this.numberOfSeats;
	}
}
