(() => {
	// No aplicando el principio de responsabilidad unica
	type Gender = "M" | "F";

	interface PersonProps {
		birthdate: Date;
		gender: Gender;
		name: string;
	}

	class Person {
		public birthdate: Date;
		public gender: Gender;
		public name: string;

		constructor({ name, gender, birthdate }: PersonProps) {
			this.birthdate = birthdate;
			this.gender = gender;
			this.name = name;
		}
	}

	// const newPerson = new Person("Fernando", "M", new Date("1985-10-21"));
	// console.log({ newPerson });

	interface UserProps {
		birthdate: Date;
		email: string;
		gender: Gender;
		name: string;
		role: string;
	}

	class User extends Person {
		public lastAccess: Date;
		public email: string;
		public role: string;

		constructor({ birthdate, email, gender, name, role }: UserProps) {
			super({ name, gender, birthdate });
			this.lastAccess = new Date();
			this.email = email;
			this.role = role;
		}

		checkCredentials() {
			return true;
		}
	}

	interface UserSettingsProps {
		lastOpenFolder: string;
		birthdate: Date;
		email: string;
		gender: Gender;
		name: string;
		role: string;
		workingDirectory: string;
	}

	class UserSettings extends User {
		public workingDirectory: string;
		public lastOpenFolder: string;

		constructor({
			workingDirectory,
			lastOpenFolder,
			email,
			role,
			name,
			gender,
			birthdate,
		}: UserSettingsProps) {
			super({ email, role, name, gender, birthdate });
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const userSettings = new UserSettings({
		workingDirectory: "/usr/home",
		lastOpenFolder: "home",
		email: "fernando@google.com",
		role: "Admin",
		name: "Fernando",
		gender: "M",
		birthdate: new Date("1985-10-21"),
	});

	console.log({ userSettings });
})();
