import { ButtonLogout } from '@/src/component/buttonLogut';
import { Header } from '@/src/component/header';
import { ButtonsSettings } from '@/src/component/ui/buttonsSettings';
import React from 'react';
import { View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View className='flex-1 items-center bg-white gap-10 pb-10'>
      <Header title='Configuração' />

      <View className=' h-5/6 w-10/12 justify-between align-middle items-center'>
        <ButtonsSettings />
        <ButtonLogout />
      </View>
    </View>
  );
}
