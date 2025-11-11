import { View, Text, StyleSheet, Button, Linking } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        Este aplicativo foi desenvolvido com React Native, Expo e Expo Router.
        A funcionalidade extra é um botão para abrir meu perfil no LinkedIn.
      </Text>

      <Text style={styles.subtitle}>Tecnologias utilizadas:</Text>
      <Text>- React Native</Text>
      <Text>- Expo</Text>
      <Text>- Expo Router</Text>
      <Text>- React Navigation (integrado)</Text>

      <Button title="Abrir meu LinkedIn" onPress={() => Linking.openURL('www.linkedin.com/in/mel-lopes')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
    padding: 20,
    justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { marginTop: 15, fontWeight: 'bold' },
  text: { fontSize: 16, marginBottom: 10 },
    Image: {
    width: 300,
    height: 300,
    borderRadius: 200,
    marginBottom: 20,
    borderWidth: 6,
    borderColor: "#3b0404ff",
  },

});
