
import { Header } from '@/src/components/header';
import React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View className='flex-1 items-center bg-white gap-10'>
      <Header title='Conversas'/>
      <Text className='text-lg font-bold opacity-40'>
        Você não tem nenhuma conversa ativa
      </Text>
    </View>
  );
}
