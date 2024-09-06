
import { Header } from '@/src/components/header';
import Container from '@/src/components/ui/container';
import UnderConstruction from '@/src/components/UnderConstruction';
import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  const { user } = useUser()
  return (
    <Container>
      <Header title='Conversas' url={user?.imageUrl}/>
      <UnderConstruction />
    </Container>
  );
}
