export interface IProduct {
  name: string,
  price: number,
  beforePrice?: number | null,
  categorie?: string,
  image: string,
  unid?: number
}

export interface IMenu {
  name: string,
  path: string,
}

