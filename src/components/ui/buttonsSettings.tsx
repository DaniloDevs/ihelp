import { Alert, View } from "react-native";
import { ButtonSettings } from "../buttonSettings";

export function ButtonsSettings() {
     return (
          <View className='w-11/12'>
               <ButtonSettings title="Editar perfil" onPress={() => {
                    Alert.alert('🚧 Em desenvolvimento 🚧', 'A funcionalidade ainda está sendo desenvolvida.', [
                         { text: ' OK', onPress: () => console.log('OK Pressed') },
                    ]);

               }} />
               <ButtonSettings title="Mudar tema" onPress={() => {
                    Alert.alert('🚧 Em desenvolvimento 🚧', 'A funcionalidade ainda está sendo desenvolvida.', [
                         { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ]);

               }} />
          </View>
     )
}