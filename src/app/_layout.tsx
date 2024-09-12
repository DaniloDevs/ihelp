import { ClerkLoaded, ClerkProvider, useAuth, useUser } from "@clerk/clerk-expo"
import { router, Slot } from "expo-router"
import "../styles/global.css"
import { useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"
import { Token } from "../storage/token"
import axios from "axios"

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

function InitialLayout() {
    const [data, setData] = useState<any>();
    const { isSignedIn, isLoaded } = useAuth()
    const { user } = useUser()


    useEffect(() => {
        if (!isLoaded) return; // Aguarda o carregamento do contexto

        const checkUser = async () => {
            if (isSignedIn) {
                try {
                    if (!user?.id) {
                        console.error("ID de usuário não disponível");
                        return;
                    }

                    // Realiza a requisição para o servidor
                    const response = await axios.get(`http://10.0.0.120:3031/user/${user.id}`);
                    const data = response.data; // Supondo que os dados da resposta estão em `data`

                    if (data.existUser) {
                        // Verifica o tipo de usuário
                        if (data.user.userType === "User") {
                            router.replace("/(auth)/(user)");
                        } else {
                            router.replace("/(auth)/(technical)");
                        }
                    } else {
                        // Se o usuário não existe, redireciona para a página de registro
                        router.replace("/register");
                    }
                } catch (error: any) {
                    console.error("Erro ao buscar usuário:", error.message);
                }
            } else {
                // Se o usuário não está autenticado, redireciona para a página de login
                // router.replace("/login");
                router.replace("/register");
            }
        };

        checkUser();
    }, [isSignedIn, isLoaded, user, router]);

    return isLoaded ? (
        <Slot />
    ) : (
        <ActivityIndicator
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
    )
}

export default function Layout() {
    return (
        <ClerkProvider publishableKey={key} tokenCache={Token}>
            <ClerkLoaded>
                <InitialLayout />
            </ClerkLoaded>
        </ClerkProvider>
    )
}

