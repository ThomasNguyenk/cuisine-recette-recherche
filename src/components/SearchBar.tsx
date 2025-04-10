
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-3xl gap-2">
      <Input
        type="text"
        placeholder="Rechercher des recettes, ingrédients..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-white/90 border-0 focus-visible:ring-cuisine-burgundy"
      />
      <Button 
        type="submit" 
        className="bg-cuisine-burgundy hover:bg-cuisine-burgundy/90 text-white flex gap-2"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Rechercher</span>
      </Button>
    </form>
  );
};

export default SearchBar;
