import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type Props = {
    imgSource: any; 
};

export default function ImageViewer({ imgSource }: Props) {
  return (
    <View style={styles.container}>
      <Image source={imgSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
