import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";


const imageMap = {
    google: require('../assets/icons/google.jpg'),
    facebook: require('../assets/icons/facebook.jpg'),
    github: require('../assets/icons/github.jpg'),
    discord: require('../assets/icons/discord.jpg'),
};

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    isLoading?: boolean;
    imageKey: keyof typeof imageMap; // Usamos a chave do mapeamento em vez de um URL
}

function ButtonLogin({ title, isLoading = false, imageKey, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.contanier}
            disabled={isLoading}
            activeOpacity={0.8}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator color='black' />
            ) : (
                <>
                    <Image source={imageMap[imageKey]} style={styles.icon} />
                    <Text className="text-2xl ">
                        {title}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    )
}

export function ButtonsLogin() {
    return (
        <View className="w-full gap-4 flex">
            <ButtonLogin title="Entrar com Google" imageKey="google" />
            <ButtonLogin title="Entrar com Facebook" imageKey="facebook"  />
            <ButtonLogin title="Entrar com Discord" imageKey="discord"  />
            <ButtonLogin title="Entrar com GitHub" imageKey="github" />
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0.5,
        paddingLeft: 40,
        paddingVertical: 5,
        gap: 16,
        alignItems: "center",
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#E2E8F0',
    },
    icon: {
        height: 20,
        width: 20
    }
})