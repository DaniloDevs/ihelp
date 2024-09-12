import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Header } from "@/src/components/header";
import Container from "@/src/components/ui/container";
import { Text, TextInput, View } from "react-native";
import { Input, InputField } from "@/components/ui/input";


interface IFormInput {
     firstName: string
     lastName: string
     email: string
     cellPhone: string
     userType: string
}

export default function Register() {
     const { register, control, handleSubmit, watch, formState: { errors }, reset } = useForm<IFormInput>();

     return (
          <Container >
               <Header title="Cadastro" />

               <View className="w-11/12  justify-center ">

                    <View className="w-full flex flex-row gap-4">
                         <View className=" w-1/2 h-20">
                              <Text>
                                   Nomes
                              </Text>

                              <TextInput
                                   placeholder="Nome"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              />
                         </View>
                         <View className=" w-1/2 h-20">
                              <Text>
                                   Nome
                              </Text>

                              <TextInput
                                   placeholder="Nome"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              />
                         </View>
                    </View>


                    {/* 
                         //email
                         //telefone genero
                         // Tipo de usuario 
                    */}
               </View>
          </Container>
     )
}