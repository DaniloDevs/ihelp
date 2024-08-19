import { ButtonLogout } from '@/components/buttonLogut';
import React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text className='text-xl font-bold text-blue-500'>
        Bem vindo Usuario
      </Text>
      <ButtonLogout />
    </View>
  );
}
