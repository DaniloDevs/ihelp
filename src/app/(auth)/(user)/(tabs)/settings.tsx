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

      <View className=' h-5/6 w-10/12 justify-between align-middle items-center'>
        <ButtonsSettings />
        <ButtonLogout />
      </View>
    </Container>
  );
}
