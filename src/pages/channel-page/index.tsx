import { FlatList, Pressable, View } from "react-native";
import { ItemList } from "../../components/item-list";
import { PageTitle } from "../../components/page-tittle";
import { useChannel } from "./use-channel";
import { SearchBar } from "../../components/search-bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Settings } from "lucide-react-native";
import { makeStyle } from "./style";
import { Footer } from "../../components/footer";

export function ChannelsPage() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const style = makeStyle()

  const {
    searchFilter,
    setSearchFilter,
    filterChannels,
    saveFavoriteChannel,
    isFavoriteChannel,
    toggleFavorites,
    showFavorites,
    formatProgram,
  } = useChannel();

  return (
    <SafeAreaView>

      {/* isso aqui é temporario, dpois vou passar para o page tittle. */}
      <Pressable onPress={() => navigation.navigate("config")} >
        <Settings color={"#000"} />
      </Pressable>

      <PageTitle
        settings={false}
        heart={true}
        title={showFavorites ? "Canais Favoritos" : "Canais"}
        onFavoritesClick={() => toggleFavorites()}
        isFavorites={showFavorites}
      />

      <SearchBar onChangeText={setSearchFilter} value={searchFilter} />

      <View style={style.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterChannels()}
          renderItem={({ item }) => (
            <ItemList
              onClick={() =>
                navigation.push("program", { channelCode: item.code })
              }
              title={item.name}
              desc={formatProgram(item.current_program)}
              onFavorite={() => saveFavoriteChannel(item.code)}
              isFavorite={isFavoriteChannel(item.code)}
            />
          )}
        />
      </View>
      <Footer />
    </SafeAreaView >
  );
}
