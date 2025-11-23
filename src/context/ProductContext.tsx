import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define the types for the context
export type ProductColor = "silver" | "spaceBlack";
export type ProductModel = "14" | "16";

interface ProductContextType {
  currentModel: ProductModel;
  currentColor: ProductColor;
  setCurrentModel: (model: ProductModel) => void;
  setCurrentColor: (color: ProductColor) => void;
}

// Create the context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentModel, setCurrentModel] = useState<ProductModel>("16");
  const [currentColor, setCurrentColor] = useState<ProductColor>("silver");


  useEffect(() => {
    console.log(currentColor, 'current color')
  }, [currentColor, currentModel])

  const value: ProductContextType = {
    currentModel,
    currentColor,
    setCurrentModel,
    setCurrentColor,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

// Custom hook to use the context
export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

