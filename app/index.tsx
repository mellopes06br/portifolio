import { Link } from 'expo-router';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/perfil.jpg')} style={styles.image} />
      <Text style={styles.title}>Bem-vindo ao meu Portfólio!</Text>
      <Text style={styles.subtitle}>Desenvolvedora apaixonada por tech</Text>

      <View style={styles.buttonContainer}>
        <Link href="/sobre" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sobre</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/experiencia-academica" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acadêmico</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/experiencia-profissional" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Profissional</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/projetos" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Projetos</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f1e2eff', // cor de fundo personalizada (roxo escuro)
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#cfcfcf',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6c63ff', // cor dos botões (roxo)
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
});
