import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text, Image, View, ScrollView, FlatList } from "react-native";

interface props {
     tipo: string
     descricao: string
     solucoes: []
}
export function CardTec({ tipo, descricao, solucoes }: props) {
     return (
          <View className="w-full p-4 bg-white shadow-md rounded-lg border">
               <View className="flex flex-row justify-between">
                    <Text className="text-xl font-bold">Chamado </Text>
                    <View className="border border-gray-300 rounded-full px-2 py-1 text-sm">
                         <Text className="text-gray-700">{tipo}</Text>
                    </View>
               </View>
               <View className="flex flex-row items-center mt-2">
                    <MaterialIcons name="warning" size={20} color="#FBBF24" className="mr-2" />
                    <Text className="text-sm text-muted-foreground">{descricao}</Text>
               </View>
               <View className="mt-4">
                    <Text className="text-lg font-semibold mb-2 flex flex-row items-center">
                         <Ionicons size={24} color="#3B82F6" className="mr-2" />
                         Soluções Possíveis
                    </Text>
                    {solucoes.length > 0 ? (
                         <FlatList
                              data={solucoes}

                              renderItem={({ item }) => (
                                   <View className="flex w-[90%] flex-row items-start mb-2">
                                        <FontAwesome name="check-circle" size={20} color="#22C55E" className="mr-2" />
                                        <Text>{item}</Text>
                                   </View>
                              )}
                         />
                    ) : (
                         <Text className="text-muted-foreground">Nenhuma solução disponível no momento.</Text>
                    )}
               </View>
          </View>
     );
};