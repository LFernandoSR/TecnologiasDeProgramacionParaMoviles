import { useEffect, useState } from "react"
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FlatList } from "react-native"
import CharacterCard from "../componentes/CharacterCard"

const Characters = () => {
    const [characters, setCharacters] = useState([])

    const getApiData =  async () => {
        try{
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setCharacters(data.results)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getApiData()
          }, 2000);
        return () => {
            clearInterval(interval) 
        }
    }, [])

    return (
        <View style={styles.container}>
            <FlatList 
                data = {characters}
                renderItem={({ item }) => (
                    <CharacterCard
                        name = {item.name}
                        status = {item.status}
                        location = {item.location.name}
                        gender = {item.gender}
                        image = {item.image}
                        species = {item.species}
                        first = {item.origin.name}  
                    />
                )}
            />
        </View>
    )
}
export default Characters

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#272b33', 
        paddingHorizontal: 7, 
        paddingTop: 10,
        paddingBottom: 5
    }, 
})