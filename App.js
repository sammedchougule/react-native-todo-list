import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    //console.log(task);
  }

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  }

  return (
    <View style={styles.container}>

      {/* Todays Tasks */}
      <View style={styles.taskWrapper}>

        <View style={styles.taskHeading}>
          <Text 
          style={{
            fontWeight: 'bold',
            fontSize: 25 }}>
            Today's Task</Text>
        </View>
        
        <View style={styles.items}>
        {
          taskItems.map((item, index) => {
            return (  

              <View style={styles.item}>

                  <View style={styles.itemLeft}>
                      <View style={styles.square}>
                        <Icon name="clipboard" size={18} color='skyblue' />
                      </View>
                      <Text style={styles.itemText} key={index}>{item}</Text>
                  </View>

                  <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                      <Icon name="trash" size={20} color='red' />
                  </TouchableOpacity>

              </View>

            )
          })
        }
          {/* <Task text={'Task 1'}/> 
          <Task text={'Task 2'}/>  */}
        </View>

      </View>

      {/* Write a Task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder='Write a Task' 
        value={task} 
        onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>
              <Icon name="plus" size={25} color='blue' />
            </Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  taskHeading: {
    alignItems: 'center',
  },
  items:{
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#558CF6',
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#558CF6',
    borderWidth: 1,
  },
  addText:{

  },
  item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
});
