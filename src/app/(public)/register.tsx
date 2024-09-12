import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Header } from "@/src/components/header";
import Container from "@/src/components/ui/container";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Input, InputField } from "@/components/ui/input";


interface IFormInput {
     firstName: string
     lastName: string
     email: string
     gender: string
     cellPhone: string
     userType: string
}

export default function Register() {
     const { register, control, handleSubmit, watch, formState: { errors }, reset } = useForm<IFormInput>();

     const onSubmit: SubmitHandler<IFormInput> = (data) => {
          console.log(data)
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
                                   name="firstName"
                                   render={({ field }) => (
                                        <TextInput
                                             {...field}
                                             placeholder="Nome"
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                   )}
                              />
                         </View>
                         <View className="w-[48%] h-20">
                              <Text>Sobrenome</Text>
                              <Controller
                                   control={control}
                                   name="lastName"
                                   render={({ field }) => (
                                        <TextInput
                                             {...field}
                                             placeholder="Sobrenome"
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                   )}
                              />
                         </View>
                    </View>

                    <View className="flex">
                         <View className="w-full h-20">
                              <Text>Email</Text>
                              <Controller
                                   control={control}
                                   name="email"
                                   render={({ field }) => (
                                        <TextInput
                                             {...field}
                                             placeholder="Email"
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                        />
                                   )}
                              />
                         </View>
                    </View>

                    <View className="flex justify-between flex-row">
                         <View className="w-[48%] h-20">
                              <Text>Telefone</Text>
                              <Controller
                                   control={control}
                                   name="cellPhone"
                                   render={({ field }) => (
                                        <TextInput
                                             {...field}
                                             placeholder="Telefone"
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                   )}
                              />
                         </View>
                         <View className="w-[48%] h-20">
                              <Text>Genero</Text>
                              <Controller
                                   control={control}
                                   name="gender"
                                   render={({ field }) => (
                                        <TextInput
                                             {...field}
                                             placeholder="Genero"
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                   )}
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
                                                  value === 'tecnico' ?
                                                       { backgroundColor: '#3b82f6', borderColor: '#3b82f6' } :
                                                       { backgroundColor: '#ffffff', borderColor: '#d1d5db' },
                                                  { flex: 1, padding: 16, borderRightWidth: 1 }
                                             ]}
                                             onPress={() => onChange('tecnico')}
                                        >
                                             <Text style={{ textAlign: 'center', color: value === 'tecnico' ? '#ffffff' : '#3b82f6' }}>
                                                  Técnico
                                             </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                             style={[
                                                  value === 'cliente' ?
                                                       { backgroundColor: '#3b82f6', borderColor: '#3b82f6' } :
                                                       { backgroundColor: '#ffffff', borderColor: '#d1d5db' },
                                                  { flex: 1, padding: 16 }
                                             ]}
                                             onPress={() => onChange('cliente')}
                                        >
                                             <Text style={{ textAlign: 'center', color: value === 'cliente' ? '#ffffff' : '#3b82f6' }}>
                                                  Cliente
                                             </Text>
                                        </TouchableOpacity>
                                   </View>
                              </View>
                         )}
                    />

                    <TouchableOpacity
                         className="bg-blue-500 hover:bg-blue-700 font-bold py-4 px-6 rounded mt-4"
                         onPress={handleSubmit(onSubmit)}
                    >
                         <Text className="text-center font-medium text-lg text-white">Submit</Text>
                    </TouchableOpacity>
               </View >
          </Container >
     )
}