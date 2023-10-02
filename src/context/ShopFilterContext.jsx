import { createContext, useState, useMemo } from 'react';
import PropTypes from "prop-types"
import data from '../data.json'
const ShopFilterContext = createContext();

export function ShopFilterProvider({ children }) {
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

ShopFilterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopFilterContext;