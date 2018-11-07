enum LevelAccess {
	default = 0,
	manager,
	admin
}

export class Users {
	constructor(public id: number, public username: string, public level: LevelAccess, public email: string, public password: string) {}
}
