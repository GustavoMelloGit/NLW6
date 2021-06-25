import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  const appointment = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00",
      description:
        "É hoje que vamos chegar a challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00",
      description:
        "É hoje que vamos chegar a challenger sem perder uma partida da md10",
    },
    {
      id: "3",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00",
      description:
        "É hoje que vamos chegar a challenger sem perder uma partida da md10",
    },
    {
      id: "4",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00",
      description:
        "É hoje que vamos chegar a challenger sem perder uma partida da md10",
    },
    {
      id: "5",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00",
      description:
        "É hoje que vamos chegar a challenger sem perder uma partida da md10",
    },
    {
      id: "6",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00",
      description:
        "É hoje que vamos chegar a challenger sem perder uma partida da md10",
    },
    {
      id: "7",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00",
      description:
        "É hoje que vamos chegar a challenger sem perder uma partida da md10",
    },
    {
      id: "8",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00",
      description:
        "É hoje que vamos chegar a challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      
        <ListHeader title="Partidas Agendadas" subtitle="Total: 6" />
        
        <FlatList
          data={appointment}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
           <Appointment data={item} onPress={handleAppointmentDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{paddingBottom: 100}}
          style={[styles.matches]}
          showsVerticalScrollIndicator={false}
          />
      </View>
    </Background>
  );
}
