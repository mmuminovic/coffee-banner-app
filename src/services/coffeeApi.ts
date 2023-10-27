import axios from 'axios';
import { CoffeeType } from '../types/Coffee';

export const getCoffees = async (type: CoffeeType) => {
  try {
    const response = await axios.get(
      `https://api.sampleapis.com/coffee/${type}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Request failed');
  }
};
