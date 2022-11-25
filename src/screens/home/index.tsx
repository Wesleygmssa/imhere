import { Fragment } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar");
  }
  return (
    <View style={styles.conatiner}>
      <Text style={styles.eventName}>React</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B86b6b"
          // keyboardType="name-phone-pad"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
    </View>
  );
}
