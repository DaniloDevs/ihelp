import { Alert, View } from "react-native";
import { ButtonSettings } from "../buttonSettings";

export function ButtonsSettings() {
     return (
          <View className='w-11/12'>
               <ButtonSettings title="Conta" onPress={() => {
                    Alert.alert('🚧 Em desenvolvimento 🚧', 'A funcionalidade ainda está sendo desenvolvida.', [{
                         text: ' OK'
                    }])
               }}
               />

               <ButtonSettings title="Notificação" onPress={() => {
                    Alert.alert('🚧 Em desenvolvimento 🚧', 'A funcionalidade ainda está sendo desenvolvida.', [{
                         text: 'OK'
                    }
                    ])
               }}
               />

               <ButtonSettings title="Termos e Privacidade" onPress={() => {
                    Alert.alert('🚧 Em desenvolvimento 🚧', 'A funcionalidade ainda está sendo desenvolvida.', [{
                         text: 'OK'
                    }
                    ])
               }}
               />

          </View>
     )
}