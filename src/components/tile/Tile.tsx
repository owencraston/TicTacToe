import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CIRCLE, CROSS, PlayOptions} from '../../constants';
import {Circle} from '../circle';
import {Cross} from '../cross';

interface Props {
  index: number;
  shape: PlayOptions;
  onPress: (index: number) => void;
}

const Tile = ({index, shape, onPress}: Props) => {
  const handlePress = () => {
    onPress(index);
  };

  const getShape = () => {
    switch (shape) {
      case CIRCLE:
        return <Circle colour="black" />;
      case CROSS:
        return <Cross colour="black" />;
      default:
        return <Text style={styles.text} onPress={handlePress} />;
    }
  };

  return <View style={styles.container}>{getShape()}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  text: {
    width: 100,
    height: 100,
  },
});

export default React.memo(Tile);
