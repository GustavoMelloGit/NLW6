import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greetings: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        marginRight: 6
    },
    user: {
        flexDirection: 'row',
    },
    message: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400
    },
    username: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 24
    }
});