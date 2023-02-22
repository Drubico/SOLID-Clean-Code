(() => {
	// aplicando el principio de responsabilidad unica
	// Priorizar la composicion frente a la herencia
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
		email: string;
		role: string;
	}

	// eliminando extend
	class User {
		public email: string;
		public lastAccess: Date;
		public role: string;

		constructor({ email, role }: UserProps) {
			this.lastAccess = new Date();
			this.email = email;
			this.role = role;
		}

		checkCredentials() {
			return true;
		}
	}

	interface SettingsProps {
		lastOpenFolder: string;
		workingDirectory: string;
	}

	class Settings {
		public lastOpenFolder: string;
		public workingDirectory: string;

		constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
			this.lastOpenFolder = lastOpenFolder;
			this.workingDirectory = workingDirectory;
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
	class UserSettings {
		public person: Person;
		public user: User;
		public settings: Settings;

		constructor({
			name,
			gender,
			birthdate,
			email,
			role,
			lastOpenFolder,
			workingDirectory,
		}: UserSettingsProps) {
			this.person = new Person({ name, gender, birthdate });
			this.user = new User({ email, role });
			this.settings = new Settings({ lastOpenFolder, workingDirectory });
		}
	}

	const userSettings = new UserSettings({
		birthdate: new Date("1985-10-21"),
		email: "fernando@google.com",
		gender: "M",
		lastOpenFolder: "home",
		name: "Fernando",
		role: "Admin",
		workingDirectory: "/usr/home",
	});

	console.log({ userSettings });
})();
