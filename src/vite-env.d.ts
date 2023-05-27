interface ImportMetaEnv {
  readonly VITE_REACT_API_HOST: string;
  readonly VITE_REACT_API_KEY: string;

  readonly VITE_REACT_ALL_RECIPES: string;
  readonly VITE_REACT_FIND_INGREDIENTS: string;
  readonly VITE_REACT_ALL_INGREDIENTS: string;
  readonly VITE_REACT_DESCRIPTION: string;
  readonly VITE_REACT_TUTORIAL: string;
  readonly VITE_REACT_FILTER_BY_NUTRIENTS: string;
  readonly VITE_REACT_ALL_NUTRITION: string;
  readonly VITE_REACT_RANDOM_NUMBER: string;
  readonly VITE_REACT_RANDOM_TAGS: string;
  readonly VITE_REACT_RECIPE_INFORMATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
