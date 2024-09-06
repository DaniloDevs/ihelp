import { View, Text } from "react-native";

export default function UnderConstruction() {
     return (
          <View className="bg-slate-100 p-6 rounded-2xl items-center my-auto" >
               <Text className="text-2xl font-bold text-gray-800 mb-4">🚧 Esta área está em construção! 🚧</Text>
               <Text className="text-lg text-gray-600">Volte em breve para ver as novidades.</Text>
          </View>
     )
}