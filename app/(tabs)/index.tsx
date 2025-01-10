import { View, StyleSheet } from 'react-native';
import ImageViewer from '../../components/ImageViewer';

const PlaceholderImage = require('../../assets/images/background-image.webp');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer imgSource={PlaceholderImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// import { View, StyleSheet } from 'react-native';
// import { Image } from 'expo-image';

// const PlaceholderImage = require('@/assets/images/background-image.webp');

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={PlaceholderImage} style={styles.image} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//    image: {
//     width: 320,
//     height: 440,
//     borderRadius: 18,
//   },
// });