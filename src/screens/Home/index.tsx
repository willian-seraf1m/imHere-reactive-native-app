import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"

export function Home() {
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
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}