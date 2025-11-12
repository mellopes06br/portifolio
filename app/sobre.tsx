import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>

      <Text style={styles.text}>
        Este aplicativo foi desenvolvido com React Native, Expo e Expo Router.
        A funcionalidade extra é um botão para abrir meu perfil no LinkedIn.
      </Text>

      <Text style={styles.subtitle}>Tecnologias utilizadas:</Text>
      <Text style={styles.text}>- React Native</Text>
      <Text style={styles.text}>- Expo</Text>
      <Text style={styles.text}>- Expo Router</Text>
      <Text style={styles.text}>- React Navigation (integrado)</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Abrir meu LinkedIn"
          color="#6c63ff"
          onPress={() => Linking.openURL('https://www.linkedin.com/in/mel-lopes')}
        />
      </View>
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
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});
