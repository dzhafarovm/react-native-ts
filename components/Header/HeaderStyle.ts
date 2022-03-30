import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Style {
  header: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: "tomato",
  },

  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
