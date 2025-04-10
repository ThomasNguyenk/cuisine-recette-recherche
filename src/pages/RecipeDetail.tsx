
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeById } from '@/data/recipes';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = id ? getRecipeById(id) : undefined;

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Recette non trouvée</h1>
          <p className="mb-8">Désolé, nous n'avons pas pu trouver cette recette.</p>
          <Button asChild>
            <Link to="/">Retour aux recettes</Link>
          </Button>
        </div>
      </div>
    );
  }

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-cuisine-burgundy/10 py-4">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-2">
            <Link to="/" className="flex items-center gap-1 text-cuisine-burgundy">
              <ArrowLeft className="h-4 w-4" />
              Retour aux recettes
            </Link>
          </Button>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Recipe Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full rounded-lg shadow-md aspect-[4/3] object-cover"
              />
              
              <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4">Informations</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-cuisine-burgundy" />
                    <div>
                      <p className="text-sm text-gray-500">Préparation</p>
                      <p className="font-medium">{recipe.prepTime} min</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <ChefHat className="h-5 w-5 text-cuisine-burgundy" />
                    <div>
                      <p className="text-sm text-gray-500">Cuisson</p>
                      <p className="font-medium">{recipe.cookTime} min</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-cuisine-burgundy" />
                    <div>
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="font-medium">{totalTime} min</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-cuisine-burgundy" />
                    <div>
                      <p className="text-sm text-gray-500">Portions</p>
                      <p className="font-medium">{recipe.servings}</p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <p className="text-sm text-gray-500">Difficulté</p>
                  <p className="font-medium capitalize">{recipe.difficulty}</p>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <p className="text-sm text-gray-500">Cuisine</p>
                  <p className="font-medium capitalize">{recipe.cuisine}</p>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <p className="text-sm text-gray-500">Catégories</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {recipe.category.map((cat) => (
                      <span 
                        key={cat} 
                        className="px-3 py-1 bg-cuisine-beige text-cuisine-burgundy rounded-full text-xs font-medium capitalize"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Recipe Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-cuisine-burgundy mb-4 font-playfair">
              {recipe.title}
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">{recipe.description}</p>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-cuisine-burgundy mb-4 font-playfair">
                Ingrédients
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-cuisine-burgundy mb-4 font-playfair">
                Instructions
              </h2>
              <ol className="list-decimal pl-6 space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-700">
                    <p>{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-cuisine-burgundy text-white py-8 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 GourmeTrouve - Toutes les meilleures recettes à portée de main</p>
        </div>
      </footer>
    </div>
  );
};

export default RecipeDetail;
