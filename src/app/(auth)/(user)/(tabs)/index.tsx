import { Header } from '@/src/components/header';
import Container from '@/src/components/ui/container';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Button, FlatList, } from 'react-native';
import { useUser } from "@clerk/clerk-expo";
import axios from 'axios';
import { Actionsheet, ActionsheetContent, } from '@/components/ui/actionsheet';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CardOrder } from '@/src/components/client/cardOrder';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



interface IFormInput {
  serviceType: string,
  description: string
}


export default function HomeScreenUser() {
  const { user } = useUser()
  const { handleSubmit, control, reset } = useForm<IFormInput>()
  const [showActionsheet, setShowActionsheet] = React.useState(false)
  const [services, setServices] = React.useState([])
  const handleClose = () => setShowActionsheet(false)

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data)
    reset({ description: "", serviceType: "" })

    const response = await axios.post('http://10.0.0.74:3031/service', {
      clientId: user?.id as string,
      serviceType: data.serviceType,
      description: data.description
    });

    console.log('Service criado com sucesso:', response.data);

    handleClose()
  }

  const getServices = () => {
    // Verifica se o ID do usuário está disponível antes de fazer a requisição
    if (!user?.id) {
      throw new Error('ID do usuário não encontrado');
    }

    // Faz a requisição e retorna a promessa
    return axios.get(`http://10.0.0.74:3031/${user.id}/services`);
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
    CardOrder(item.serviceType, item.description, item.accepted)
  );

  return (
    <Container>
      <Header url={user?.imageUrl} />

      <View className='w-10/12 h-[80%] items-center gap-10 justify-between'>

        {/* Verifica se há serviços */}
        {services.length === 0 ? (
          <>
            <View className='w-full h-full flex flex-col items-center gap-4 justify-center'>
              <View className='items-center'>
                <Text className='text-center text-xl'>
                  Precisa de ajuda pra resolver algum problema técnico?
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                className='bg-[#2158AC] w-64 h-16 items-center justify-center rounded-md'
                onPress={() => setShowActionsheet(true)}
              >
                <Text className='text-2xl leading-10 font-medium text-white'>
                  Fazer Chamado
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          // Se houver serviços, mostra a FlatList

          <>
            <View className='w-full h-full'>
              <Text className='text-2xl'>Meus chamados</Text>

              <FlatList
                data={services}  // Dados dos serviços
                keyExtractor={(item, index) => index.toString()}  // Gera uma chave para cada item
                renderItem={renderItem}  // Função que renderiza cada item
                className='w-full mt-4 flex flex-col gap-6'
              />
            </View>

            <TouchableOpacity onPress={() => setShowActionsheet(true)} className='absolute bottom-0 right-2 bg-blue-200 rounded-2xl p-4'>
              <FontAwesome6 name="add" size={24} color="black" />
            </TouchableOpacity>
          </>

        )}

        <Actionsheet isOpen={showActionsheet} snapPoints={[70]} onClose={handleClose}>
          <ActionsheetContent className='w-full flex flex-col gap-4 pt-4'>
            <View className='flex flex-col gap-2 w-[90%]'>
              <View className="w-full flex flex-col gap-2">
                <Text>Qual aparelho está tendo problema?</Text>

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Digite o nome do aparelho com defeito"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                    />
                  )}
                  name="serviceType"
                />
              </View>

              <View className="w-full flex flex-col gap-2">
                <Text>Descreva o problema que você está enfrentando:</Text>

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                   
                      <TextInput
                        placeholder="Descreva seu problema aqui"
                        editable
                        multiline
                        
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 h-20"
                      />
                   
                    
                  )}
                  name="description"
                />
              </View>
            </View>

            <View className='w-[90%] flex flex-col gap-2'>
              <Button title="Fazer Chamado" onPress={handleSubmit(onSubmit)} />
              <Button color="#d1d5db" title="Sair" onPress={handleClose} />
            </View>
          </ActionsheetContent>
        </Actionsheet>
      </View>
    </Container>
  );
}


