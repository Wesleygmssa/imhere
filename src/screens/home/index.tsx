import { Fragment } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = [
    "Rodigo",
    "Vini",
    "Diego",
    "Biro",
    "isa",
    "Johannes",
    "Julien",
    "keyboardType",
    "Mathias",
    "Mariana",
    "Romario",
  ];
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log("Você clicou no botão de Remover" + name);
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => {
              handleParticipantRemove("Wesley");
            }}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />

      {/* {participants.map((participants) => (
        <Participant
          key={participants}
          name={participants}
          onRemove={() => {
            handleParticipantRemove("Wesley");
          }}
        />
      ))} */}

      {/* 
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participants) => (
          <Participant
            key={participants}
            name={participants}
            onRemove={() => {
              handleParticipantRemove("Wesley");
            }}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
