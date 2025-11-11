import { StyleSheet, Text, View } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
      <Text>🎓 Graduação em Sistemas para Internet - UNICAP</Text>
      <Text>📘 Curso: React Native Avançado - Alura</Text>
      <Text>Inglês para Dev's - RockeatSeat </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
