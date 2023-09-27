import { createContext, useState } from 'react';
const SidebarOpenContext = createContext();

export function SidebarOpenProvider ({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarOpenContext.Provider>
  );
};

export default SidebarOpenContext;