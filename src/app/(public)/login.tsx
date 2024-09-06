
import { ButtonsLogin } from "@/src/components/ui/buttonsLogin";
import { View, Image } from "react-native";


export default function Home() {
     return (
          <View className="flex-1 gap-14 items-center justify-center p-10  ">
               <Image
                    source={require('../../assets/logo.jpg')}
               />

              <ButtonsLogin/>
          </View>
     )
}