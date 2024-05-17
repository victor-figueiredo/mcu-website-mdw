/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";

export type ButtonProps = {
  label?: string;
  type?: string;
  onClick?: () => void;
  buttonType: string;
};

export type CharacterCardProps = {
  character: {
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export type HQCardProps = {
  hq: {
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    textObjects: {
      text: string;
    }[];
  };
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export type MovieCardProps = {
  movie: {
    title: string;
    overview: string;
    poster_path: string;
  };
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  urls: {
    type: string;
    url: string;
  }[];
}

export type CharacterDetails = {
  data: Character;
  direction: string;
};

export type CardDetailPositions = {
  x: number;
  y: number;
};

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  resourceURI: string;
  textObjects: {
    text: string;
  }[];
  urls: {
    type: string;
    url: string;
  }[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: {
    resourceURI: string;
    name: string;
  }[];
  collections: any[]; // Assuming this can be any type
  collectedIssues: any[]; // Assuming this can be any type
  dates: {
    type: string;
    date: string;
  }[];
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: any[]; // Assuming this can be any type
  creators: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      role: string;
    }[];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: any[]; // Assuming this can be any type
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: any[]; // Assuming this can be any type
    returned: number;
  };
}

export type ComicDetails = {
  data: Comic;
  direction: string;
};

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type MovieDetails = {
  data: Movie;
  direction: string;
};

export interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  label: string;
  disabled?: boolean;
}

export type CardDetailProps = {
  type: string;
  position: CardDetailPositions;
  details: {
    data: Character | Comic | Movie;
    direction: string;
  };
  onClose: () => void;
};

export type InputProps = {
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id?: string;
  isError?: boolean;
  errorData?: {
    error: string | null;
    message: string;
  };
};

export type SelectProps = {
  onChange: (newValue: any) => void;
  selectedOption: string;
};

export type SliderProps = {
  children: React.ReactNode;
  onSlideChange: (swiper: any) => void;
};
