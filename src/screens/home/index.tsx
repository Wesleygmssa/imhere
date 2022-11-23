import { Fragment } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.eventName}>React</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <TextInput style={styles.input} />
    </View>
  );
}
