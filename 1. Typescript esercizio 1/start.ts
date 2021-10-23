export enum Role { 
    staff = 'staff', 
    student = 'student', 
    manager = 'manager', 
    admin = 'admin'
}

export enum Gender {
    male = 'male', 
    female = 'female', 
    other = 'other'
}

export interface IAddress{
    city: string,
    street: string,
    postalCode: string
}

export interface ICompany{
    id: number,
    name: string,
    description: string,
    location: IAddress
}

export interface IObj{
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: IAddress,
    role: Role,
    username: string,
    profilePhotoUrl: string,
    companies: ICompany[],
    gender: Gender
}

const obj = {
	id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: Role.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
		{
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
	],
    gender: Gender.male // Generi possibili: 'male', 'female', 'other'
}

// CODE HERE