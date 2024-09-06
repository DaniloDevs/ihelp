import { Image } from "expo-image";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

const imageMap = {
    google: require('../assets/icons/google.jpg'),
    facebook: require('../assets/icons/facebook.jpg'),
    github: require('../assets/icons/github.jpg'),
    discord: require('../assets/icons/discord.jpg'),
};

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    isLoading?: boolean;
    imageKey: keyof typeof imageMap;
}

export function ButtonLogin({ title, isLoading = false, imageKey, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            className="flex flex-row rounded-3xl p-1 h-12 gap-4 items-center justify-center border-2 border-solid border-[#C0C5CB]"
            disabled={isLoading}
            activeOpacity={0.8}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator color='black' className="self-center" />
            ) : (
                <>
                    <Image source={imageMap[imageKey]} style={{ height: 20, width: 20 }} />

                    <Text className="text-2xl ">
                        {title}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    )
}