import { useAuth } from "@clerk/clerk-expo";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";


export function ButtonLogout() {
    const { signOut } = useAuth()
    return (
        <TouchableOpacity className="bg-slate-300 w-1/2 h-10 justify-center items-center rounded-3xl" onPress={() => signOut()}>
            <Text>
                Sair agora
            </Text>
        </TouchableOpacity>
    )
}
