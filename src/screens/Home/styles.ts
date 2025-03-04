import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 36,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    marginTop: 36,
    marginBottom: 42,
  },
  listemptyText: {
    color: '#fff',
    textAlign: 'center',
  }
})
