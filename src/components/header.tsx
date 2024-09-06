import { Divider } from "@/components/ui/divider";
import { useUser } from "@clerk/clerk-expo";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";



interface CardProps {
     title?: string
}

export function Header({ title }: CardProps) {
     const { user } = useUser()
    

     return (
          <View className='flex items-center flex-row mt-14 w-11/12 justify-between gap-2'>
               {!title ? (
                    <View>
                         <Text className='text-xl font-bold'>
                              {title}
                         </Text>
                         <Divider className="my-0.5 w-6 h-[1px] hidden  bg-black  color-black" />
                    </View>
               ) : (
                    <View>
                         <Text className='text-xl font-bold'>
                              {title}
                         </Text>
                         <Divider className="my-0.5 w-6 h-[1px]   bg-black  color-black" />
                    </View>
               )}
               <TouchableOpacity
                    className='flex flex-row gap-2 align-middle items-center bg-slate-50  border-black border-2 rounded-full'
                    onPress={() => {
                         Alert.alert('🚧 Em desenvolvimento 🚧', 'A funcionalidade ainda está sendo desenvolvida.', [
                              { text: ' OK', onPress: () => console.log('OK Pressed') },
                         ]);
                    }}
               >
                    <Image source={{ uri: user?.imageUrl }} className='w-10 h-10 rounded-full' />
               </TouchableOpacity>
          </View>
     )
}