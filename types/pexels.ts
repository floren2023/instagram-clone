export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  src: {
    /* original: string;
    large: string; */
    medium: string;
    /* small: string;
    portrait: string;
    landscape: string; */
  };
}

export interface PexelsResponse {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page?: string;
}
