import React from "react";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { ImageBackground, Text, View, FlatList } from "react-native";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Gustavo",
      avatar_url: "https://github.com/TrueNibb.png",
      status: "online",
    },
    {
      id: "2",
      username: "Gustavo",
      avatar_url: "https://github.com/TrueNibb.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendáros</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder nenhuma da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total: 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
