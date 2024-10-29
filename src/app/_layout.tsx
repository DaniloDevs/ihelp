import { ClerkLoaded, ClerkProvider, useAuth, useUser } from "@clerk/clerk-expo";
import { router, Slot } from "expo-router";
import "../styles/global.css";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Token } from "../storage/token";
import axios from "axios";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

async function fetchUserData(userId: string) {
    try {
        const response = await axios.get(`http://10.0.0.74:3031/user/${userId}`);
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        console.error("Error fetching user data:", error.message);
        throw error;
    }
}

function InitialLayout() {
    const { isSignedIn, isLoaded } = useAuth();
    const { user } = useUser();

    useEffect(() => {
        const handleUserRedirect = async () => {
            if (!isLoaded) return; // Aguarda o carregamento do contexto

            if (!isSignedIn){
                console.log("Usuário não autenticado, redirecionando para login.");
                router.replace("/login");
            }
            
            if (isSignedIn && user?.id) {
                try {

                    const data = await fetchUserData(user.id);

                    if (data.ExistUser) {
                        const route = data.User.userType === "client"
                            ? "/(auth)/(user)/"
                            : "/(auth)/(technical)/"
                        router.replace(route)
                    } else {
                        console.log("Usuário não encontrado, redirecionando para registro.");
                        router.replace("/register");
                    }
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário:", error);
                    // Você pode adicionar feedback visual para o usuário aqui, se desejado
                }
            } 
        };

        handleUserRedirect();
    }, [isSignedIn, user?.id]); // Dependências atualizadas

    return isLoaded ? (
        <Slot />
    ) : (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    );
}

export default function Layout() {
    return (
        <ClerkProvider publishableKey={key} tokenCache={Token}>
            <ClerkLoaded>
                <GluestackUIProvider>
                    <InitialLayout />
                </GluestackUIProvider>
            </ClerkLoaded>
        </ClerkProvider>
    );
}
