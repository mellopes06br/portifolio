import { StyleSheet, Text, View } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
      <Text style={styles.text}>🎓 Graduação em Sistemas para Internet - UNICAP</Text>
      <Text style={styles.text}>📘 Curso: React Native Avançado - Alura</Text>
      <Text style={styles.text}>💬 Inglês para Dev's - Rocketseat</Text>
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
