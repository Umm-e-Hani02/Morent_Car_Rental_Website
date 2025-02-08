import { groq } from "next-sanity";

export const fourCars = groq `*[_type == 'car'][0...4]`;
export const sixCars = groq `*[_type == 'car'][5...13]`;
export const nineCars = groq `*[_type == 'car'][6...15]`;