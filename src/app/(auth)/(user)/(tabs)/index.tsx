import { ButtonLogout } from '@/components/buttonLogut';
import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmailAddress: {
    emailAddress: string;
  }
  imageUrl: string;
}

export default function WelcomeScreen() {
  const { user } = useUser()
  const { id, firstName, lastName, primaryEmailAddress, imageUrl } = user as User

  console.log(imageUrl)
  return (
    <View className='flex-1 items-center bg-white gap-40'>
      <View className='flex items-center mt-14 gap-2'>
        <Text>
          Você esta logado com:
        </Text>
        <TouchableOpacity onPress={() => alert("Funcionalidade em desenvolvimento")} className='flex flex-row gap-2 align-middle items-center bg-slate-50 px-2 py-1 border-solid border-black border rounded-full'>
          <Image source={{ uri: imageUrl }} className='w-8 h-8 rounded-full' />
          <Text className='text-lg'>{primaryEmailAddress.emailAddress}</Text>
        </TouchableOpacity>
      </View>

      <View className='w-10/12 items-center gap-14'>

        <View className='w-64 items-center'>
          <Text className='text-center'>
            Precisa de ajuda pra resolver
            algum problema técnico?
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => alert("Funcionalidade em desenvolvimento")}
          className='bg-[#2158AC] w-64 h-64 items-center justify-center rounded-full'
        >
          <Text className='text-xl text-white' >
            Chamar Helpers
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
