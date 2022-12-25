import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Die = (props: {set: string[]; roll: boolean; naughtyStatus: boolean}) => {
  // const [rotation, setRotation] = useState(new Animated.Value(0));
  // const rotationInRadians = rotation.interpolate({
  //   inputRange: [-50, 50],
  //   outputRange: ['0deg', '360deg'],
  // });
  // const distanceFromRotation = rotation.interpolate({
  //   inputRange: [-50, 50],
  //   outputRange: [1, 0.5],
  // });
  // const movementFromRotation = rotation.interpolate({
  //   inputRange: [-50, 50],
  //   outputRange: [-50, 50],
  // });

  const [leftRight, setLeftRight] = useState(new Animated.Value(0));
  const [backForward, setBackForward] = useState(new Animated.Value(1));
  const [rotation, setRotation] = useState(new Animated.Value(360));
  const [trans, setTrans] = useState(new Animated.Value(1));
  const [dieFace, setDieFace] = useState(0);

  const rotationInRadians = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animation = Animated.parallel([
    Animated.sequence([
      Animated.timing(leftRight, {
        toValue: -50,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(leftRight, {
        toValue: 50,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(leftRight, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
    Animated.sequence([
      Animated.timing(backForward, {
        toValue: 0.5,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(backForward, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]),
    Animated.timing(rotation, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }),
    Animated.sequence([
      Animated.timing(trans, {
        toValue: 0,
        duration: 1800,
        useNativeDriver: true,
      }),
      Animated.delay(400),
      Animated.timing(trans, {
        toValue: 1,
        duration: 1800,
        useNativeDriver: true,
      }),
    ]),
  ]);

  const theSet = props.set;

  const returnRandomIndexFromSet = () => Math.floor(Math.random() * 6);

  const doWhatAnimationsDo = () => {
    animation.start(() => animation.reset());
    setTimeout(() => {
      setDieFace(returnRandomIndexFromSet());
    }, 2000);
  };

  if (props.roll) {
    doWhatAnimationsDo();
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback /*onPress={() => doWhatAnimationsDo()}*/>
        <Animated.View
          style={[
            styles.square,
            {
              transform: [
                // {translateX: leftRight},
                // {scale: backForward},
                {rotateY: rotationInRadians},
              ],
            },
          ]}>
          <Animated.Text style={[styles.dieText, {opacity: trans}]}>
            {theSet[dieFace]}
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'absolute',
    // top: 80,
  },
  square: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#000',
    // position: 'absolute',
  },
  absolute: {
    position: 'absolute',
  },
  dieText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: 80,
    color: '#fff',
  },
});

export default Die;
