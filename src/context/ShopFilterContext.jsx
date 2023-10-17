import { createContext, useState, useMemo } from 'react';
import PropTypes from "prop-types"
import data from '../data.json'
const ShopFilterContext = createContext();

export function ShopFilterProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceFilter, setPriceFilter] = useState(null);
    const allPlants = useMemo(() => Object.values(data.plantsData).flat(), []);
  
    const filteredPlants = useMemo(() => {
      let plantsToDisplay = selectedCategory === "All" ? allPlants : data.plantsData[selectedCategory.toLowerCase()];
  
      if (priceFilter) {
        plantsToDisplay = plantsToDisplay.filter((plant) => plant.price <= priceFilter);
      }
  
      return plantsToDisplay;
    }, [selectedCategory, allPlants, priceFilter]);
  
    function filterByPrice(price) {
      setPriceFilter(price);
    }

    return (
        <ShopFilterContext.Provider value={{ filteredPlants, setSelectedCategory, selectedCategory, filterByPrice }}>
            {children}
        </ShopFilterContext.Provider>
    )

}

ShopFilterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopFilterContext;