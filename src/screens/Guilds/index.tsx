import React from "react";
import { styles } from "./styles";
import { View, FlatList } from "react-native";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { GuildProps } from "../../components/Guild";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      icon: "image.png",
      name: "Lendarios",
      owner: true,
    },
    {
      id: "2",
      icon: "image.png",
      name: "Game",
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
