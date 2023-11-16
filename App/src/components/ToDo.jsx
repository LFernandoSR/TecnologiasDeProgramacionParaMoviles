import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

function ToDo({
  id, name, createAt, updatedAt, isCompleted, handleDelete, handleComplete, isEdit,
}) {
  return (
    <View style={[styles.container, isCompleted && styles.todoCompleted]}>
      <View>
        <Text style={[{ fontSize: 20 }, isCompleted && styles.textCompleted]}>
          {name}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 10 }}>{`Created at: \n${createAt}`}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <View>
          <CustomButton text='Edit' onPress={() => isEdit(id)} />
          {updatedAt !== '' && (
            <Text style={{ fontSize: 10 }}>{`Updated at: \n${updatedAt}`}</Text>
          )}
        </View>
        <CustomButton text='Delete' onPress={() => handleDelete(id)} />

        <CustomButton
          text={isCompleted ? 'Done' : 'Complete'}
          onPress={() => handleComplete(id)}
        />
      </View>
    </View>
  );
}

export default ToDo;

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#c7f9cc',
    borderRadius: 5,
    alignItems: 'center',
  },
  todoCompleted: {
    backgroundColor: 'orange',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
  },
});
