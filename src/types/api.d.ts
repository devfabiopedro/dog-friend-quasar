export interface Breed {
  weight: { imperial: string; metric: string };
  height: { imperial: string; metric: string };
  id: number;
  name: string;
  bred_for: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  image: { url: string };
  liked: boolean;
}

export type BreedResult = Breed[];
