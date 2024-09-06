import { View } from "react-native"
import { ButtonLogin } from "../buttonLogin"
import * as WebBrowser from 'expo-web-browser'
import * as Link from 'expo-linking'
import { useEffect, useState } from "react"
import { useOAuth } from "@clerk/clerk-expo"


WebBrowser.maybeCompleteAuthSession()

export function ButtonsLogin() {
    const [isGoogleLoading, setIsGoogleLoading] = useState(false)
    const googleOAuth = useOAuth({ strategy: 'oauth_google' })

    async function onGoogleSingIn() {
        try {
            setIsGoogleLoading(true)
            const redirectUrl = Link.createURL('/')
            const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl })

            if (oAuthFlow.authSessionResult?.type === "success") {
                if (oAuthFlow.setActive) {
                    await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
                }
            }

        } catch (error) {
            console.log(error)
            setIsGoogleLoading(false)
        }
    }

    useEffect(() => {
        WebBrowser.warmUpAsync()

        return () => {
            WebBrowser.coolDownAsync()
        }
    }, [])

    return (
        <View className="w-full gap-6 flex">
            <ButtonLogin title="Entrar com Google" imageKey="google" onPress={onGoogleSingIn} isLoading={isGoogleLoading} />
            <ButtonLogin title="Entrar com Facebook" imageKey="facebook" />
            <ButtonLogin title="Entrar com Discord" imageKey="discord" />
            <ButtonLogin title="Entrar com GitHub" imageKey="github" />
        </View>
    )
}


