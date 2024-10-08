import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChannelsPage } from "../../pages/channel-page";
import { ProgramsPage } from "../../pages/program-page";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo";
import ConfigPage from "../../pages/config-page";
import { HomePage } from "../../pages/home-page";
import { ErrorPage } from "../../pages/error-page";

export function Routes() {


  const Stack = createNativeStackNavigator();
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSignedIn ? "channel" : "home"}>
        <Stack.Screen
          name="channel"
          component={ChannelsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="program"
          component={ProgramsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="config"
          component={ConfigPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="error"
          component={ErrorPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
