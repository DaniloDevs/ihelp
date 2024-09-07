
import { Header } from '@/src/components/header';
import Container from '@/src/components/ui/container';
import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreenTechnical() {
  const { user } = useUser()

  return (
    <Container >
      <Header url={user?.imageUrl} />

      <View className='flex flex-col my-auto'>
        <Text className='text-2xl  text-gray-800'>
          Você esta sem nenhum serviço
        </Text>
      </View>
    </Container>
  );
}
