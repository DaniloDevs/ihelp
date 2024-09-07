import { ButtonLogout } from '@/src/components/buttonLogut';
import { Header } from '@/src/components/header';
import { ButtonsSettings } from '@/src/components/ui/buttonsSettings';
import Container from '@/src/components/ui/container';
import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { View } from 'react-native';

export default function SettingsScreen() {
  const { user } = useUser()
  return (
    <Container>
      <Header title='Configuração' url={user?.imageUrl}/>

      <View className='my-auto flex flex-col gap-10 w-10/12 align-middle items-center'>
        <ButtonsSettings />
        <ButtonLogout />
      </View>
    </Container>
  );
}
