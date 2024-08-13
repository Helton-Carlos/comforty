export interface IProduct {
  id?: number | any,
  name: string,
  price?: number,
  beforePrice?: number | null,
  categorie?: string,
  type: 'plastic' | 'tissue' | 'old',
  image: string,
  unid?: number
}

export interface IMenu {
  name: string,
  path: string,
}

export interface IDepositions {
  depositions: string,
  image: string,
  name: string,
  job: string
}

export interface IUser {
  name: string,
  email: string,
  password?: string,
  cart?: string[],
  card?: string[]
}

export interface IMessage {
  title: string;
  style: string;
}

export interface ILogin {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?:string;
} 

export interface ICart {
  id: number,
  amount: number
}


