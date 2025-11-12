import { StyleSheet, Text, View } from 'react-native';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <Text style={styles.text}>📱 App de Controle Financeiro</Text>
      <Text style={styles.text}>🌐 Site Portfólio em React</Text>
      <Text style={styles.text}>🤖 Chatbot em Node.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f1e2eff', // fundo roxo escuro
    justifyContent: 'center',
    alignItems: 'center', // centraliza horizontalmente
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF', // texto branco
    textAlign: 'center',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
  },
});
