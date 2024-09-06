
import { Header } from '@/src/components/header';
import Container from '@/src/components/ui/container';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useUser } from "@clerk/clerk-expo";


export default function IndexScreen() {
  const { user } = useUser()
  return (
    <Container>
      <Header url={user?.imageUrl} />

      <View className='w-10/12 items-center gap-10  my-auto'>

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
              { text: ' OK' },
            ]);
          }}
        >
          <Text className='text-2xl leading-10 font-medium text-white' >
            Chamar Helpers
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
