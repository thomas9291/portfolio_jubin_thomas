import { useContext, createContext, useState, ReactNode } from "react";

interface CustomizationContextType {
  animation: string;
  setAnimation: (animation: string) => void;
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
  return (
    <CustomizationContext.Provider
      value={{
        animation,
        setAnimation,
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
