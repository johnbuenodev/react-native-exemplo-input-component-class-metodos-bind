import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    //this.pegaNome = this.pushNome.bind(this);
    this.entrar = this.entrar.bind(this);
 
  }

  pushNome(value) {
    this.setState({nome: value});

  }

  entrar() {

    if(this.state.input === '') {
      this.setState({nome: ''});
      alert("Informe o Login!");
      return;
    }

    if(this.state.input) {
      this.setState({nome: this.state.input});
    }

  }
    
  render() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Digite o seu Nome..."
        underlineColorAndroid="transparent"
        onChangeText={(value) => this.setState({input:value})}
      />

      <Button title='Entrar' onPress={this.entrar} />

      {
         this.state.nome ? 
         <Text style={styles.text}>Bem vindo {this.state.nome}</Text> :
         <></>
      } 
      
    </View>
   );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 12,
    fontSize: 20,
    padding: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: 25
  }
});

export default App;

/*

<TextInput 
        style={styles.input}
        placeholder="Digite o seu Nome..."
        underlineColorAndroid="transparent"
        onChangeText={this.getNome}
      />

*/