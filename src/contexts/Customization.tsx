import { useContext, createContext, useState, ReactNode } from "react";

interface CustomizationContextType {
  animation: string;
  setAnimation: (animation: string) => void;
  bedValue: string;
  setBedValue: (bedValue: string) => void;
  sheetValue: string;
  setSheetValue: (bedValue: string) => void;
  sheetFoldValue: string;
  setSheetFoldValue: (bedValue: string) => void;
  pillowValue: string;
  setPillowValue: (bedValue: string) => void;
}

const CustomizationContext = createContext<
  CustomizationContextType | undefined
>(undefined);

export const CustomizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [animation, setAnimation] = useState<string>("");
  const [bedValue, setBedValue] = useState<string>("#000000");
  const [sheetValue, setSheetValue] = useState<string>("#808080");
  const [sheetFoldValue, setSheetFoldValue] = useState<string>("#808080");
  const [pillowValue, setPillowValue] = useState<string>("#808080");
  return (
    <CustomizationContext.Provider
      value={{
        animation,
        setAnimation,
        bedValue,
        setBedValue,
        sheetValue,
        setSheetValue,
        sheetFoldValue,
        setSheetFoldValue,
        pillowValue,
        setPillowValue,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = (): CustomizationContextType => {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error(
      "useCustomization must be used within a CustomizationProvider"
    );
  }
  return context;
};
