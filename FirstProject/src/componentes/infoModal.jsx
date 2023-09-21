import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const InfoModal = ({ info, seeModal, setSeeModal }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={seeModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              backgroundColor: '#2d705f',
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>
              Information
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Id:</Text>
            <Text style={styles.infoText}>{info.id}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Task Name:</Text>
            <Text style={styles.infoText}>{info.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Created At:</Text>
            <Text style={styles.infoText}>{info.createAt}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Updated at:</Text>
            <Text style={styles.infoText}>{info.updatedAt !== '' ? info.updatedAt : 'Sin editar'}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Status:</Text>
            <Text style={styles.infoText}>{info.completed ? 'Completado' : 'Pendiente'}</Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setSeeModal(!seeModal)}
          >
            <Text style={styles.textStyle}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 5,
    width:'90%',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    padding: 5,
    elevation: 2,

  },
  buttonClose: {
    backgroundColor: '#2a6355',
  },
  infoContainer: {
    backgroundColor: '#2d705f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  infoText: {
    fontSize: 17,
    color: 'black',
  },
});