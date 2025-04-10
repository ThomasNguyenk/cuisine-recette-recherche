
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import RecipeGrid from '@/components/RecipeGrid';
import { recipes, categories, cuisines, searchRecipes, getRecipesByCategory, getRecipesByCuisine } from '@/data/recipes';
import { Recipe } from '@/types/recipe';

const Index = () => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    applyFilters(query, selectedCategory, selectedCuisine);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    applyFilters(searchQuery, category, selectedCuisine);
  };

  const handleCuisineChange = (cuisine: string) => {
    setSelectedCuisine(cuisine);
    applyFilters(searchQuery, selectedCategory, cuisine);
  };

  const applyFilters = (query: string, category: string, cuisine: string) => {
    let result = recipes;
    
    if (query) {
      result = searchRecipes(query);
    }
    
    if (category) {
      result = result.filter(recipe => recipe.category.includes(category));
    }
    
    if (cuisine) {
      result = result.filter(recipe => recipe.cuisine === cuisine);
    }
    
    setFilteredRecipes(result);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section w-full py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Découvrez des recettes délicieuses
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explorez notre collection de recettes du monde entier et trouvez votre prochain plat préféré.
          </p>
          <div className="flex justify-center">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 flex-1">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-cuisine-burgundy mb-2">Nos Recettes</h2>
          <p className="text-gray-600">
            {filteredRecipes.length} recette{filteredRecipes.length !== 1 ? 's' : ''} disponible{filteredRecipes.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        <FilterBar 
          categories={categories} 
          cuisines={cuisines}
          selectedCategory={selectedCategory}
          selectedCuisine={selectedCuisine}
          onCategoryChange={handleCategoryChange}
          onCuisineChange={handleCuisineChange}
        />
        
        <RecipeGrid 
          recipes={filteredRecipes} 
          emptyMessage="Aucune recette ne correspond à vos critères de recherche."
        />
      </main>
      
      {/* Footer */}
      <footer className="bg-cuisine-burgundy text-white py-8 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 GourmeTrouve - Toutes les meilleures recettes à portée de main</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
