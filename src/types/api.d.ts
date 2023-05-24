export interface Breed {
  weight: { imperial: string; metric: string };
  height: { imperial: string; metric: string };
  id: number;
  name: string;
  bred_for: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: { id: string; width: number; height: number; url: string };
}

export type BreedResult = Breed[];
