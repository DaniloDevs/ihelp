import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Header } from "@/src/components/header";
import Container from "@/src/components/ui/container";
import { View } from "react-native";


interface Inputs {
     name: string
     firstName: string
     email: string
     cellPhone: string
     userType: string
}

export default function Register() {

     return (
          <Container >
               <Header title="Cadastro" />

               <View className="my-auto">
                    {/* 
                         // nome sobrenome
                         //email
                         //telefone genero
                         // Tipo de usuario 
                    */}
               </View>
          </Container>
     )
}