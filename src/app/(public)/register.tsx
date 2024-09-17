import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Header } from "@/src/components/header";
import Container from "@/src/components/ui/container";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Input, InputField } from "@/components/ui/input";
import axios from "axios";
import { router } from "expo-router"
import { useUser } from "@clerk/clerk-expo";


interface IFormInput {
     firstName: string
     lastName: string
     email: string
     gender: string
     cellPhone: string
     userType: string
}

export default function Register() {
     const { user } = useUser()
     const { control, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
          defaultValues: {
               firstName: user?.firstName || '',
               lastName: user?.lastName || '',
               email: user?.primaryEmailAddress?.emailAddress || '',
               cellPhone: user?.phoneNumbers?.[0]?.phoneNumber || '',
          }
     });



     const onSubmit: SubmitHandler<IFormInput> = async (data) => {
          const id = user?.id
          try {
               const response = await axios.post('http://10.0.2.40:3031/user', {
                    id, // id vindo do Clerk
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    gender: data.gender,
                    phoneNumber: data.cellPhone,
                    userType: data.userType,
               });
               console.log(user)
               console.log('Usuário criado com sucesso:', response.data);

               // Resetando o formulário após a submissão

               reset();
               router.replace('/');
          } catch (error: any) {
               // Tratamento de erros
               if (error.response) {
                    console.error('Erro na resposta do servidor:', error.response.data);
                    console.error('Status do erro:', error.response.status);
               } else if (error.request) {
                    console.error('Erro na requisição:', error.request);
               } else {
                    console.error('Erro ao configurar a requisição:', error.message);
               }
          }

     }
     return (
          <Container >
               <Header title="Cadastro" />

               <View className="w-11/12 flex mt-20  justify-center gap-4">
                    <View className="flex justify-between flex-row">
                         <View className="w-[48%] h-20">
                              <Text>Nomes</Text>
                              <Controller
                                   control={control}
                                   rules={{
                                        required: true,
                                   }}
                                   render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                             placeholder="First name"
                                             onBlur={onBlur}
                                             onChangeText={onChange}
                                             value={value}
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

                                        />
                                   )}
                                   name="firstName"
                              />
                         </View>

                         <View className="w-[48%] h-20">
                              <Text>Sobrenome</Text>
                              <Controller
                                   control={control}
                                   rules={{
                                        maxLength: 100,
                                   }}
                                   render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                             placeholder="Last name"
                                             onBlur={onBlur}
                                             onChangeText={onChange}
                                             value={value}
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

                                        />
                                   )}
                                   name="lastName"
                              />
                         </View>
                    </View>

                    <View className="flex">
                         <View className="w-full h-20">
                              <Text>Email</Text>
                              <Controller
                                   control={control}
                                   rules={{
                                        maxLength: 100,
                                   }}
                                   render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                             placeholder="Last name"
                                             onBlur={onBlur}
                                             onChangeText={onChange}
                                             value={value}
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                        />
                                   )}
                                   name="email"
                              />
                         </View>
                    </View>

                    <View className="flex justify-between flex-row">
                         <View className="w-[48%] h-20">
                              <Text>Telefone</Text>
                              <Controller
                                   control={control}
                                   rules={{
                                        maxLength: 100,
                                   }}
                                   render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                             placeholder="Last name"
                                             onBlur={onBlur}
                                             onChangeText={onChange}
                                             value={value}
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                   )}
                                   name="cellPhone"
                              />
                         </View>
                         <View className="w-[48%] h-20">
                              <Text>Genero</Text>
                              <Controller
                                   control={control}
                                   rules={{
                                        maxLength: 100,
                                   }}
                                   render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                             placeholder="Last name"
                                             onBlur={onBlur}
                                             onChangeText={onChange}
                                             value={value}
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                   )}
                                   name="gender"
                              />
                         </View>
                    </View>

                    <Controller
                         control={control}
                         name="userType"
                         render={({ field: { onChange, value } }) => (
                              <View className="relative">
                                   <View className="flex-row border border-gray-300 rounded-lg overflow-hidden">
                                        <TouchableOpacity
                                             style={[
                                                  value === 'technical' ?
                                                       { backgroundColor: '#3b82f6', borderColor: '#3b82f6' } :
                                                       { backgroundColor: '#ffffff', borderColor: '#d1d5db' },
                                                  { flex: 1, padding: 16, borderRightWidth: 1 }
                                             ]}
                                             onPress={() => onChange('technical')}
                                        >
                                             <Text style={{ textAlign: 'center', color: value === 'technical' ? '#ffffff' : '#3b82f6' }}>
                                                  Técnico
                                             </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                             style={[
                                                  value === 'user' ?
                                                       { backgroundColor: '#3b82f6', borderColor: '#3b82f6' } :
                                                       { backgroundColor: '#ffffff', borderColor: '#d1d5db' },
                                                  { flex: 1, padding: 16 }
                                             ]}
                                             onPress={() => onChange('user')}
                                        >
                                             <Text style={{ textAlign: 'center', color: value === 'user' ? '#ffffff' : '#3b82f6' }}>
                                                  Cliente
                                             </Text>
                                        </TouchableOpacity>
                                   </View>
                              </View>
                         )}
                    />


                    <Button title="Submit" onPress={handleSubmit(onSubmit)} />
               </View >
          </Container >
     )
}