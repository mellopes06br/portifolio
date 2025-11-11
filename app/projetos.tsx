import { StyleSheet, Text, View } from 'react-native';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <Text>📱 App de Controle Financeiro</Text>
      <Text>🌐 Site Portfólio em React</Text>
      <Text>🤖 Chatbot em Node.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
