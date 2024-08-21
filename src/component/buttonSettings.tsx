import { Divider } from "@/components/ui/divider";
import { Text, TouchableOpacity , TouchableOpacityProps} from "react-native";

interface ButtonsProps extends TouchableOpacityProps {
     title: string
}

export function ButtonSettings({ title, ...rest }: ButtonsProps) {
     return (
          <>
               <TouchableOpacity  {...rest}>
                    <Text className='text-xl'>
                         {title}
                    </Text>
                    <Divider className="my-4 w-full h-[1px]  bg-black  color-black" />
               </TouchableOpacity>

          </>
     )
}
