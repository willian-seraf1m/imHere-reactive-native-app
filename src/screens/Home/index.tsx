import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant";
import { useState } from "react";

type participantsType = {
  id: number,
  name: string
}

export function Home() {
  const [participants, setParticipants] = useState<participantsType[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participantName == '') {
      return Alert.alert("O nome não pode ser vazio!");
    }

    if (participants.some(participant => participant.name == participantName)) {
      return Alert.alert(
        "Participante já cadastrado",
        "Já existe um participante com esse nome cadastrado no evento."
      );
    }

    const newParticipant = {
      id: Date.now(),
      name: participantName
    }

    setParticipants((prevState) => [...prevState, newParticipant])
    setParticipantName('')
  }

  function handleParticipantRemove(id: number) {
    setParticipants(prevState => prevState.filter(participants => participants.id != id))
  }

  function confirmRemoval(id: number, name: string) {
    Alert.alert(
      "Remover Participante",
      `Deseja mesmo remover ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () => handleParticipantRemove(id)
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento.
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 16 de Dezembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            id={item.id}
            name={item.name}
            onRemove={(id: number, name: string) => confirmRemoval(id, name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listemptyText}>
            Nenhum participante adicionado
          </Text>
        )}
      />
    </View>
  );
}