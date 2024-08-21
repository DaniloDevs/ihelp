import { CardOrder } from '@/src/component/cardOrder';
import { Header } from '@/src/component/header';
import React from 'react';
import { View } from 'react-native';

export default function HitoryScreen() {

  return (
    <View className='flex-1 items-center bg-white gap-10 '>
      <Header title='Historico de chamados'/>
      
      <CardOrder
        categoria='Celular'
        servivo='Trocar tela'
        preco='157,00'
        tecnico='Tabata Duarte'
        imgUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </View>
  );
}
