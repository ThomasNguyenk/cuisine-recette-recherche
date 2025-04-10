
export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string;
  country: string;  // Pays d'origine de la recette
  flagUrl: string;  // URL du drapeau du pays
  category: string[];
  ingredients: string[];
  instructions: string[];
  image: string;
}
