
import { ButtonsLogin } from "@/src/components/ui/buttonsLogin";
import { View, Image } from "react-native";


export default function Login() {
     return (
          <View className="flex-1 gap-14 items-center bg-white justify-center p-10  ">
               <Image
                    source={require('../../assets/logo.jpg')}
               />

              <ButtonsLogin/>
          </View>
     )
}