import { useState, useEffect } from "react";

const useResponsiveItems = (
  mobileIncrement: number,
  desktopIncrement: number
) => {
  const [itemsToShow, setItemsToShow] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial state
    const initialIsMobile = window.innerWidth < 768;
    setIsMobile(initialIsMobile);
    setItemsToShow(initialIsMobile ? mobileIncrement : desktopIncrement);
  }, [mobileIncrement, desktopIncrement]);

  const showMoreItems = () => {
    const itemsToAdd = isMobile ? mobileIncrement : desktopIncrement;
    setItemsToShow((prevItemsToShow) => prevItemsToShow + itemsToAdd);
  };

  return { itemsToShow, showMoreItems, isMobile };
};

export default useResponsiveItems;
