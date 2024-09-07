import { TouchableOpacity, Text, Image, View } from "react-native";

interface CardProps {
     tecnico: string
     categoria: string
     servivo: string
     imgUrl: string
     preco: string
}

export function CardOrder({ tecnico,preco, categoria, servivo, imgUrl }: CardProps) {
     return (
          <TouchableOpacity activeOpacity={0.6} className='w-4/5 rounded-xl border p-4 border-gray-200 shadow-lg gap-10 bg-slate-50'>
               <View className='flex flex-row justify-between'>
                    <View>
                         <View className='flex flex-row justify-between  items-center'>
                              <Text className='text-lg font-semibold'>
                                   {tecnico}
                              </Text>
                         </View>

                         <View>
                              <Text className='text-sm'>
                                   Categoria: {categoria}
                              </Text>

                              <Text className='text-sm'>
                                   Serviço Prestado: {servivo}
                              </Text>
                         </View>
                    </View>
                    <Image
                         source={{
                              uri: imgUrl
                         }}
                         className='w-14 h-14 rounded-full'
                    />
               </View>
               <View className='flex flex-row justify-between'>
                    <Text>
                         R${preco}
                    </Text>
                    <Text className='font-roboto' > Informações </Text>
               </View>

          </TouchableOpacity>
     )
}