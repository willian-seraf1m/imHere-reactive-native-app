import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type participantProps = {
  id: number;
  name: string;
  onRemove: (id: number, name: string) => void;
}

export function Participant({ id, name, onRemove }: participantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => onRemove(id, name)}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}