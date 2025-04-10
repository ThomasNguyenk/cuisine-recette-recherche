
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { BookOpen, Globe, ChefHat } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-10 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cuisine-burgundy text-center mb-8 font-playfair">
            À propos de GourmeTrouve
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6 text-center">
              Bienvenue sur GourmeTrouve, votre destination pour découvrir des recettes délicieuses du monde entier.
            </p>
            
            <div className="bg-cuisine-beige p-8 rounded-lg my-12">
              <h2 className="text-3xl font-bold text-cuisine-burgundy mb-6 text-center font-playfair">Notre mission</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full mb-4">
                    <BookOpen className="h-10 w-10 text-cuisine-burgundy" />
                  </div>
                  <h3 className="text-xl font-bold text-cuisine-burgundy mb-2">Partager</h3>
                  <p className="text-gray-600">Rassembler les meilleures recettes pour tous les amateurs de cuisine.</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full mb-4">
                    <Globe className="h-10 w-10 text-cuisine-burgundy" />
                  </div>
                  <h3 className="text-xl font-bold text-cuisine-burgundy mb-2">Explorer</h3>
                  <p className="text-gray-600">Faire découvrir des cuisines du monde entier et leurs traditions culinaires.</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full mb-4">
                    <ChefHat className="h-10 w-10 text-cuisine-burgundy" />
                  </div>
                  <h3 className="text-xl font-bold text-cuisine-burgundy mb-2">Inspirer</h3>
                  <p className="text-gray-600">Encourager la créativité et le plaisir de cuisiner à la maison.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-cuisine-burgundy mb-4 font-playfair">Notre histoire</h2>
            <p className="mb-4">
              GourmeTrouve est née de la passion pour la gastronomie et du désir de créer une plateforme permettant à chacun de découvrir et partager des recettes extraordinaires. Notre équipe est composée d'amateurs de cuisine, de chefs professionnels et de développeurs qui ont uni leurs forces pour créer cette expérience culinaire unique.
            </p>
            
            <p className="mb-4">
              Nous croyons que la cuisine est un art qui rassemble les gens et crée des moments de bonheur. C'est pourquoi nous avons conçu GourmeTrouve comme un espace où la diversité culinaire est célébrée et où chaque recette raconte une histoire.
            </p>
            
            <h2 className="text-3xl font-bold text-cuisine-burgundy mb-4 mt-8 font-playfair">Ce que nous offrons</h2>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Une collection diverse de recettes traditionnelles et modernes</li>
              <li>Des instructions détaillées et faciles à suivre</li>
              <li>Des filtres de recherche pour trouver rapidement ce que vous cherchez</li>
              <li>Des informations nutritionnelles et des conseils de préparation</li>
              <li>Une interface conviviale et responsive pour une expérience optimale sur tous les appareils</li>
            </ul>
            
            <div className="text-center mt-12 mb-8">
              <h2 className="text-3xl font-bold text-cuisine-burgundy mb-6 font-playfair">
                Prêt à découvrir de nouvelles saveurs?
              </h2>
              <Button asChild className="bg-cuisine-burgundy hover:bg-cuisine-burgundy/90">
                <Link to="/">Explorer nos recettes</Link>
              </Button>
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

export default About;
