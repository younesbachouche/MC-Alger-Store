
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Filter, Search, ChevronDown } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("featured");

  // Extract unique categories from products
  const categories = ["all", ...new Set(products.map(p => p.category))];
  
  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    if (sortOrder === "newest") return a.isNew ? -1 : b.isNew ? 1 : 0;
    // Default: featured
    return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
  });

  return (
    <div className="min-h-screen flex flex-col bg-mcalger-bg-light">
      <Header />
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-mcalger-green">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Produits Officiels</h1>
          <div className="flex items-center text-white/80">
            <a href="/" className="hover:text-white">Accueil</a>
            <span className="mx-2">/</span>
            <span>Produits</span>
          </div>
        </div>
      </div>
      
      {/* Filter Section */}
      <div className="sticky top-16 bg-white z-30 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Rechercher des produits..." 
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-200 w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-mcalger-green/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="w-40">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="capitalize">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="capitalize">
                        {category === "all" ? "Toutes les catégories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-mcalger-text-light">
                {filteredProducts.length} produits
              </span>
              
              <div className="w-44">
                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger>
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Produits vedettes</SelectItem>
                    <SelectItem value="newest">Nouveautés</SelectItem>
                    <SelectItem value="price-asc">Prix (croissant)</SelectItem>
                    <SelectItem value="price-desc">Prix (décroissant)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium text-mcalger-text mb-2">Aucun produit trouvé</h3>
              <p className="text-mcalger-text-light mb-4">
                Essayez d'ajuster vos filtres ou recherchez autre chose.
              </p>
              <button 
                onClick={() => { setSearchTerm(""); setCategoryFilter("all"); }}
                className="px-4 py-2 text-sm font-medium text-mcalger-green border border-mcalger-green rounded-md hover:bg-mcalger-green/5"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
