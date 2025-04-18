import { useState } from "react";

const useHeadMenuDropdown = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return { openDropdownId, toggleDropdown };
};

export default useHeadMenuDropdown;
