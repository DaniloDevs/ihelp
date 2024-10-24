
import { CardTec } from '@/src/components/cardTec';
import { CardOrder } from '@/src/components/client/cardOrder';
import { Header } from '@/src/components/header';
import Container from '@/src/components/ui/container';
import { useUser } from '@clerk/clerk-expo';
import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function HomeScreenTechnical() {
  const { user } = useUser()
  const [services, setServices] = React.useState([])

  const getServices = () => {
    // Verifica se o ID do usuário está disponível antes de fazer a requisição
    if (!user?.id) {
      throw new Error('ID do usuário não encontrado');
    }

    // Faz a requisição e retorna a promessa
    return axios.get(`http://10.0.0.74:3031/services`);
  };



  const getData = async () => {
    try {

      const response = await getServices();
      setServices(response.data.Services)
      return response.data

    } catch (error: any) {
      console.error('Erro na requisição:', error.message)
    }
  }

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      getData();
    }, 10000); // Atualiza a cada 10 segundos

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <CardTec tipo={item.serviceType} descricao={item.description} solucoes={item.solution} />
  );

  return (
    <Container >
      <Header url={user?.imageUrl} />

      <View className='w-10/12 h-[80%] items-center gap-10 justify-between'>
        {services.length === 0 ? (
          <>
            <View className='flex flex-col my-auto'>
              <Text className='text-2xl  text-gray-800'>
                Você esta sem nenhum serviço
              </Text>
            </View>
          </>
        ) : (
          // Se houver serviços, mostra a FlatList

          <>
            <View className='w-full h-full'>
              <Text className='text-2xl'>Meus Trabalhos</Text>

              <FlatList
                data={services}  // Dados dos serviços
                keyExtractor={(item, index) => index.toString()}  // Gera uma chave para cada item
                renderItem={renderItem}  // Função que renderiza cada item
                className='w-full mt-4 flex flex-col gap-6'
              />
            </View>
          </>

        )}
      </View>
    </Container>
  );
}
