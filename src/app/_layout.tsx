import { ClerkLoaded, ClerkProvider, useAuth, useUser } from "@clerk/clerk-expo"
import { router, Slot } from "expo-router"
import "../styles/global.css"
import { useEffect } from "react"
import { ActivityIndicator } from "react-native"
import { Token } from "../storage/token"
import axios from "axios"

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

function InitialLayout() {
    const { isSignedIn, isLoaded } = useAuth()
    const { user } = useUser()

    let typeUser: string

    useEffect(() => {
        if (!isLoaded) return;

        const checkUser = async () => {
            if (isSignedIn) {
                try {
                    const response = await axios.get(`http://localhost:3031/${user?.id}`);
                    console.log(response)

                    if (response.data) {
                        const typeUser = "User"; // Pegar typeUser conforme necessário

                        if (typeUser === "User") {
                            router.replace("/(auth)/(user)");
                        } else {
                            router.replace("/(auth)/(technical)");
                        }
                    } else {
                        router.replace("/(public)/(register)");
                    }
                } catch (error) {
                    console.error("Erro ao buscar usuário:", error);
                    // Tratar erro como redirecionar para uma página de erro ou tentar novamente
                }
            } else {
                // Usuário não está autenticado, redirecionar para login
                router.replace("/(public)/login");
            }
        };

        checkUser();
    }, [isSignedIn]);


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

