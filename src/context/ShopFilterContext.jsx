import { createContext, useState, useMemo } from 'react';
import data from '../data.json'
const ShopFilterContext = createContext();

export function ShopFilterProvider ({ children }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const allPlants = useMemo(() => Object.values(data.plantsData).flat(), []);
    
    const filteredPlants = useMemo(() => {
        return selectedCategory === "All" ? allPlants : data.plantsData[selectedCategory.toLowerCase()];
    }, [selectedCategory, allPlants]);

    return (
        <ShopFilterContext.Provider value={{ filteredPlants, setSelectedCategory, selectedCategory }}>
            {children}
        </ShopFilterContext.Provider>
    )

}

export default ShopFilterContext;