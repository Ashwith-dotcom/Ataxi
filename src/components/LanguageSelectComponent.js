import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React , {useState} from 'react'

const LanguageSelectComponent = ({languages}) => {
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    }
  return (
    <View style={styles.container}>
      {languages.map((language) => (
        <TouchableOpacity
          key={language.id}
          style={[
            styles.languageItem,
            selectedLanguage === language.id && styles.selectedLanguageItem,
          ]}
          onPress={() => handleLanguageSelect(language.id)}
        >
            <View>
              <Image source={language.icon} style={styles.icon} />
              <Text style={styles.text}>{language.name}</Text>

            </View>
          
          {selectedLanguage === language.id && (
            <View style={styles.checkbox} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default LanguageSelectComponent

const styles = StyleSheet.create({
    container: {
        padding: 10,
      },
      languageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      selectedLanguageItem: {
        backgroundColor: '#e6e6e6',
      },
      checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#555',
        backgroundColor: '#000',
      },
      text:{
        fontSize: 16,
        fontWeight: "700",
        color:"#000"
      },
      icon: {
        width: 26,
        height: 26,
        marginRight: 10,
    },
})