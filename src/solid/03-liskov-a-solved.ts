import { Tesla, Audi, Toyota, Honda, Volvo, Ford } from "./03-liskov-b-solved";
import { Vehicle } from "./03-liskov-b-solved";

(() => {
	const printCarSeats = (cars: Vehicle[]) => {
		// for (const car of cars) {
		//     if( car instanceof Tesla ) {
		//         console.log( 'Tesla', car.getNumberOfSears() )
		//         continue;
		//     }
		//     if( car instanceof Audi ) {
		//         console.log( 'Audi', car.getNumberOfSears() )
		//         continue;
		//     }
		//     if( car instanceof Toyota ) {
		//         console.log( 'Toyota', car.getNumberOfSears() )
		//         continue;
		//     }
		//     if( car instanceof Honda ) {
		//         console.log( 'Honda', car.getNumberOfSears() )
		//         continue;
		//     }
		//     if( car instanceof Volvo ) {
		//         console.log( 'Volvo', car.getNumberOfSears() )
		//         continue;
		//     }
		//     if( car instanceof Ford ) {
		//         console.log( 'Ford', car.getNumberOfSears() )
		//         continue;
		//     }
		// }

		cars.forEach((car) => {
			console.log(car.constructor.name, car.getNumberOfSears());
		});
	};

	const cars = [
		new Tesla(7),
		new Audi(2),
		new Toyota(5),
		new Honda(5),
		new Volvo(2),
		new Ford(2),
	];

	printCarSeats(cars);
})();
