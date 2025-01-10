// import { Text, View, StyleSheet } from 'react-native';
// import { Link } from 'expo-router'; 
// import {Image} from 'expo-image'
// import ImageViewer from '../../components/ImageViewer';

// const PlaceholderImage = require('../../assets/images/background-image.webp');


// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage} />
//       </View>
//       <Text style={styles.text}>Home screen</Text>
//       <Link href="/about" style={styles.button}>
//         Go to About screen
//       </Link>
//       <Link href="/map" style={styles.button}>
//         Go to Map screen
//       </Link>
//     </View> 
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//   },
//   button: {
//     fontSize: 20,
//     textDecorationLine: 'underline',
//     color: '#fff',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   image: {
//     width:  320,
//     height: 440,
//     borderRadius: 18,
//   },
// });


import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/background-image.webp');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
   image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});