import React, { ReactNode } from "react";
import { styles } from "./styles";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
  Modal,
  ModalProps,
} from "react-native";
import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { Background } from "../Background";

type Props = ModalProps & {
  children: ReactNode;
};

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}
