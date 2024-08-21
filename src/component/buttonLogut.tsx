import { useAuth } from "@clerk/clerk-expo";
import * as Link from 'expo-linking'
import { Text, TouchableOpacity } from "react-native";


export function ButtonLogout() {
    const { signOut } = useAuth()
    const redirectUrl = Link.createURL('/')
    return (
        <TouchableOpacity className="border shadow-2xl w-full h-10 justify-center items-center rounded-3xl" onPress={() => signOut({ redirectUrl })}>
            <Text>
                Sair agora
            </Text>
        </TouchableOpacity>
    )
}
