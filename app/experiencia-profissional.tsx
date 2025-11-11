import { StyleSheet, Text, View } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text style={styles.text}>💻 Desenvolvedor Junior de SAP - Accenture (2025 - Atual)</Text>
      <Text style={styles.text}>🚀 Jovem Aprendiz (2022 - 2023)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f1e2eff', 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF', 
  },
  text: {
    color: '#FFFFFF', 
    textAlign: 'center',
  },
});

