
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface FilterBarProps {
  categories: string[];
  cuisines: string[];
  selectedCategory: string;
  selectedCuisine: string;
  onCategoryChange: (category: string) => void;
  onCuisineChange: (cuisine: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  cuisines,
  selectedCategory,
  selectedCuisine,
  onCategoryChange,
  onCuisineChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1 flex flex-col md:flex-row gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="justify-between w-full md:w-48">
              {selectedCategory ? `Catégorie: ${selectedCategory}` : 'Toutes les catégories'}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full md:w-48">
            <DropdownMenuRadioGroup value={selectedCategory} onValueChange={onCategoryChange}>
              <DropdownMenuRadioItem value="">Toutes les catégories</DropdownMenuRadioItem>
              {categories.map(category => (
                <DropdownMenuRadioItem key={category} value={category} className="capitalize">
                  {category}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="justify-between w-full md:w-48">
              {selectedCuisine ? `Cuisine: ${selectedCuisine}` : 'Toutes les cuisines'}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full md:w-48">
            <DropdownMenuRadioGroup value={selectedCuisine} onValueChange={onCuisineChange}>
              <DropdownMenuRadioItem value="">Toutes les cuisines</DropdownMenuRadioItem>
              {cuisines.map(cuisine => (
                <DropdownMenuRadioItem key={cuisine} value={cuisine} className="capitalize">
                  {cuisine}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FilterBar;
