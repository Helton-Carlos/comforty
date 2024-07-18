import type { IProduct } from '~/types/types';
import { postgresClient } from '../utils';

const { client } = postgresClient;

export const getProducts = async () => {
  const result = await client.query("SELECT * FROM products");

  return result.rows as IProduct[]
};