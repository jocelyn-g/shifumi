import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [choix, setChoix] = useState('none')
  const choixIA = [<FontAwesome name="hand-rock-o" size={80} color="white" />, <FontAwesome name="hand-paper-o" size={80} color="white" />, <FontAwesome name="hand-scissors-o" size={80} color="white" />]
  const [index, setIndex] = useState(Math.floor(Math.random() * 3))
  const [result, setResult] = useState('none')

  const onPressPierre = () => {
    setModalVisible(true)
    setChoix(<FontAwesome name="hand-rock-o" size={80} color="white" />)
    if (index === 0) {
      setResult('Egalité')
    } else if (index === 2) {
      setResult('Victoire')
    } else {
      setResult('Defaite')
    }
  }
  const onPressPapier = () => {
    setModalVisible(true)
    setChoix(<FontAwesome name="hand-paper-o" size={80} color="white" />)
    if (index === 1) {
      setResult('Egalité')
    } else if (index === 0) {
      setResult('Victoire')
    } else {
      setResult('Defaite')
    }
  }
  const onPressCiseaux = () => {
    setModalVisible(true)
    setChoix(<FontAwesome name="hand-scissors-o" size={80} color="white" />)
    if (index === 2) {
      setResult('Egalité')
    } else if (index === 1) {
      setResult('Victoire')
    } else {
      setResult('Defaite')
    }
  }
  const onPressReturn = () => {
    setModalVisible(false)
    setIndex(Math.floor(Math.random() * 3))
    setResult('none')
    setChoix('none')
  }
  return (
    <View style={styles.container}>
    <Text style={styles.info}>choose your action</Text>
      <View>
        <Pressable onPress={onPressPierre}>
          <Text style={styles.btn}><FontAwesome name="hand-rock-o" size={60} color="white" /></Text>
        </Pressable>
        <Pressable onPress={onPressPapier}>
          <Text style={styles.btn}><FontAwesome name="hand-paper-o" size={60} color="white" /></Text>
        </Pressable>
        <Pressable onPress={onPressCiseaux}>
          <Text style={styles.btn}><FontAwesome name="hand-scissors-o" size={60} color="white" /></Text>
        </Pressable>
      </View>

      
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.container}>

          <Pressable onPress={onPressReturn}>
            <Text style={styles.btn}>return back</Text>
          </Pressable>
          <View style={styles.box}>
            <View style={styles.box2}>
              <Text  style={styles.text}>Vous avez choisi :</Text>
              <Text>{choix}</Text>
            </View>
            <View style={styles.box2}>
              <Text  style={styles.text}>IA a choisi :</Text>
              <Text>{choixIA[index]}</Text>
            </View>
          </View>
          <Text  style={styles.text}>Resultat : {result}</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#646464',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    color: '#fff',
    backgroundColor: '#111',
    fontSize: 30,
    padding: 10,
    margin: 30,
    textAlign: 'center',
    borderRadius: 30
  },
  info: {
    color: '#fff',
    fontSize: 20,
  },
  box: {
    flexDirection: 'row'
  },
  box2: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 20,
  }
});
