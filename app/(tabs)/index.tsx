import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Page() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/foto-perfil.png')} style={styles.image} />
      <Text style={styles.name}>Eduardo Fonseca</Text>
      <Text style={styles.title}>Desenvolvedor Web</Text>
      <Text style={styles.contact}>📧 jfonsecaedu@gmail.com</Text>
      <Text style={styles.contact}>📱 (81) 9 9188-6626</Text>

      <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/in/eduardoj-fonseca')}>
        <Text style={styles.link}>🔗 LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/5581991886626')}>
        <Text style={styles.link}>📱 Falar no WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/fonsecaeduu')}>
        <Text style={styles.link}>💻 Github</Text>
      </TouchableOpacity>
    </View>
  );
}
