import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo"
import { router, Slot } from "expo-router"
import "../styles/global.css"
import { useEffect } from "react"
import { ActivityIndicator } from "react-native"
import { Token } from "@/storage/token"

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

function InitialLayout() {
    const { isSignedIn, isLoaded } = useAuth()

    let typeUser: string

    // Usar validações do banco para saber pra onde o user vai
    useEffect(() => {
        if (!isLoaded) return

        if (isSignedIn) {
            typeUser = "User"
            if (typeUser === "User" ) {
                router.replace("/(auth)/(user)")
            } else {
                router.replace("/(auth)/(technical)")
            }
        } else (
            //mudar para registro
            router.replace("/(public)")
        )
    }, [isSignedIn])

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

