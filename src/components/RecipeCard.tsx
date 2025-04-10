
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Recipe } from '@/types/recipe';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <Card className="recipe-card overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="recipe-card-image w-full h-48 object-cover"
        />
        <CardContent className="pt-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold line-clamp-2">{recipe.title}</h3>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{recipe.description}</p>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <span className="bg-cuisine-muted px-2 py-1 rounded-md">{recipe.cuisine}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-0 pb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{totalTime} min</span>
          </div>
          <div className="flex items-center text-sm text-cuisine-burgundy font-semibold">
            <span className="capitalize">{recipe.difficulty}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;
