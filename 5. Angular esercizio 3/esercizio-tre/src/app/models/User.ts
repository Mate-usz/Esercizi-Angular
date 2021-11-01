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

export interface IUser{
  id: number,
  name: string,
  surname: string,
  age: number,
  dateOfBirth: string,
  address: IAddress,
  role: Role,
  username: string,
  profilePhotoUrl: string,
  companies?: ICompany[],
  gender: Gender
}
