import { StyleSheet, TextStyle } from "react-native";

interface Styles {
  item: TextStyle;
}

export default StyleSheet.create<Styles>({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
  },
});
