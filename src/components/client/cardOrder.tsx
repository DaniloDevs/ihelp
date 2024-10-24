import { TouchableOpacity, Text, Image, View } from "react-native";


export function CardOrder(
     typeService: string,
     description: string,
     accepted: boolean
) {
     return (
          <View  className=' rounded-xl border p-4 border-gray-200 mb-4 shadow-lg gap-10 bg-slate-50'>
               {/* Informação principal do card */}
               <View>
                    {/* Exibir o tipo de problema */}
                    <Text className='text-lg font-semibold'>
                         Tipo de problema: {typeService}
                    </Text>

                    {/* Exibir a descrição do problema */}
                    <Text className='text-sm mt-2'>
                         Descrição: {description}
                    </Text>

                    {/* Exibir o status de aceitação */}
                    <Text className='text-sm mt-2'>
                         Status: {accepted ? 'Aceito' : 'Não aceito'}
                    </Text>
               </View>
          </View>
     )
}