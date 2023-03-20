import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={{flex: 1}}>
    <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={{fontSize: '40px'}}> Bem Vindo</Text>
        <Text style={{fontSize: '30px'}}> Tela de Login </Text>
      </View>

      <View style={styles.viewLogin}>
        <Text style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '20px'}}> Login </Text>
        <TextInput style={styles.input} placeholder='Digite o Login'/>
        <TextInput style={styles.input} placeholder='Digite a Senha'/>
        <TouchableOpacity style={styles.botao}> Login </TouchableOpacity>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  botao: {
    border: '2px solid black',
    backgroundColor: '#00f',
    padding: '10px',
    color: 'white',
    fontWeight: 'bold',
    width: '30%',
    textAlign: 'center',
    marginTop: '20px'
  },
  input: {
    border: '2px solid blue',
    padding: '10px',
    margin: '10px',
    width: '70vw'
  },
  viewLogin: {
    flex: 0.9,
    alignItems: 'center',
    marginTop: '40px'
  }
});
