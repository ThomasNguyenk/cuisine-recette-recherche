
import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '@/types/recipe';

interface RecipeGridProps {
  recipes: Recipe[];
  emptyMessage?: string;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ 
  recipes, 
  emptyMessage = "Aucune recette trouvée" 
}) => {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;
