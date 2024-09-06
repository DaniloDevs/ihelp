import { CardOrder } from '@/src/components/cardOrder';
import { Header } from '@/src/components/header';
import Container from '@/src/components/ui/container';
import React from 'react';
import { View, Text } from 'react-native';

export default function HitoryScreen() {

  return (
    <Container>
      <Text className="text-2xl font-bold text-gray-800 mb-4">🚧 Esta área está em construção! 🚧</Text>
      <Text className="text-lg text-gray-600">Volte em breve para ver as novidades.</Text>
    </Container>
  );
}
