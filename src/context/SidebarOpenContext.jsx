import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
const SidebarOpenContext = createContext();

export function SidebarOpenProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarOpenContext.Provider>
  );
}

SidebarOpenProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default SidebarOpenContext;