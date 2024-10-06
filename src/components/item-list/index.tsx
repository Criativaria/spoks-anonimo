import { Heart } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { makeStyle } from "./styles";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";

type ItemListType = {
  onFavorite: () => void;
  isFavorite: boolean;
  title: string;
  desc: string;
  onClick?: () => void;
};

type ResumeTextType = {
  text: string;
  limit: number;
};

export function ItemList({
  title,
  desc,
  onFavorite,
  isFavorite,
  onClick,
}: ItemListType) {
  const style = makeStyle();
  const { theme } = useThemeContext();



  return (
    <View style={style.wrapper}>
      <Pressable onPress={onClick}>
        <View style={style.textWrapper}>
          <Text style={style.tittle}>
            {title}
          </Text>
          <Text style={style.desc}>
            {desc}
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => onFavorite()}>
        <Heart
          color={isFavorite ? theme.primary : theme.text}
          strokeWidth={2}
          size={21}
          fill={isFavorite ? theme.primary : theme.light_grey}
        />
      </Pressable>
    </View>
  );
}
