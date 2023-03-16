// / <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_REACT_API_HOST: string
	readonly VITE_REACT_API_KEY: string

	readonly VITE_REACT_ALL_RECIPES: string
	readonly VITE_REACT_FIND_INGREDIENTS: string
	readonly VITE_REACT_ALL_INGREDIENTS: string
	readonly VITE_REACT_DESCRIPTION: string
	readonly VITE_REACT_TUTORIAL: string
	readonly VITE_REACT_FILTER_BY_NUTRIENTS: string
	// more env variables...
 }
 
 interface ImportMeta {
	readonly env: ImportMetaEnv
 }