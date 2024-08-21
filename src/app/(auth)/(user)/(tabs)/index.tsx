
import { Header } from '@/src/component/header';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';


export default function IndexScreen() {

  return (
    <View className='flex-1 items-center bg-white gap-40'>

      <Header />
      <View className='w-10/12 items-center gap-8'>

        <View className='items-center'>
          <Text className='text-center text-xl'>
            Precisa de ajuda pra resolver
            algum problema técnico?
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className='bg-[#2158AC] w-64 h-64 items-center justify-center rounded-full'
          onPress={() => {
            Alert.alert('🚧 Em desenvolvimento 🚧', 'A funcionalidade ainda está sendo desenvolvida.', [
              { text: ' OK', onPress: () => console.log('OK Pressed') },
            ]);
          }}
        >
          <Text className='text-2xl leading-10 font-medium text-white' >
            Chamar Helpers
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
