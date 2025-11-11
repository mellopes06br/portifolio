import { StyleSheet, Text, View } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text>💻 Desenvolvedor Junior de SAP - Accenture (2025 - Atual)</Text>
      <Text>🚀 Jovem aprendiz (2022 - 2023)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
