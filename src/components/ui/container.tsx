import { ReactNode } from "react";
import { View } from "react-native";

interface CustomContainerProps {
     children: ReactNode
}

export default function Container({ children }: CustomContainerProps) {
     return (
          <View className="flex-1 items-center bg-white gap-10">
               {children}
          </View>
     );
}