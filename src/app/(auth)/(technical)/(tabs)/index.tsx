
import Container from '@/src/components/ui/container';
import React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <Container >
      <Text className='text-xl font-bold text-blue-500'>
        Bem vindo Tecnico
      </Text>
    </Container>
  );
}
