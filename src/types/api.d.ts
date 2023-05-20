export interface Breed {
  weight: [];
  height: [];
  id: number;
  name: string;
  bred_for: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: [];
}

export type BreedResult = Breed[];
