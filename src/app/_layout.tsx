import { ClerkLoaded, ClerkProvider, useAuth, useUser } from "@clerk/clerk-expo"
import { router, Slot } from "expo-router"
import "../styles/global.css"
import { useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"
import { Token } from "../storage/token"
import axios from "axios"

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

function InitialLayout() {
    const [data, setData] = useState();
    const { isSignedIn, isLoaded } = useAuth()
    const { user } = useUser()


    useEffect(() => {
        if (!isLoaded) return;

        const checkUser = async () => {
            if (isSignedIn) {
                try {
                    console.log(user?.id)
                    const response = await axios.get(`http://192.168.1.25:3031/user/${user?.id}`)
                    setData(response.data);
                    console.log(data)

                    if (response.data.existUser === true) {
                        const typeUser = "User"

                        if (typeUser === "User") {
                            router.replace("/(auth)/(user)")
                        } else {
                            router.replace("/(auth)/(technical)")
                        }
                    } else {
                        router.replace("/register")
                    }
                } catch (error: any) {
                    console.error("Erro ao buscar usuário:", error.message)
                }
            } else {
                router.replace("/register");
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

