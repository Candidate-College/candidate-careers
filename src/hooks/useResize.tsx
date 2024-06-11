import { useState, useEffect } from "react";

// const useResponsiveItems = (
//   mobileIncrement: number,
//   desktopIncrement: number
// ) => {
//   const [itemsToShow, setItemsToShow] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       setItemsToShow(window.innerWidth < 768 ? 5 : 10);
//     };

//     // Set initial state
//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const showMoreItems = () => {
//     const itemsToAdd = isMobile ? mobileIncrement : desktopIncrement;
//     setItemsToShow((prevItemsToShow) => prevItemsToShow + itemsToAdd);
//   };

//   return { itemsToShow, showMoreItems, isMobile };
// };

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
    setItemsToShow(initialIsMobile ? 5 : 10);
  }, []);

  const showMoreItems = () => {
    const itemsToAdd = isMobile ? mobileIncrement : desktopIncrement;
    setItemsToShow((prevItemsToShow) => prevItemsToShow + itemsToAdd);
  };

  return { itemsToShow, showMoreItems, isMobile };
};

export default useResponsiveItems;
