import {useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Die from './Die';

const LiarsDice = () => {
  const numbers = [1, 2, 3, 4, 5, 6].map(number => number.toString());
  const [buttonDisability, setButtonDisability] = useState(false);
  const [roll, setRoll] = useState(false);

  const rollBothDice = () => {
    // rollLeftDie();
    // rollRightDie();
    setRoll(true);
    setTimeout(() => setRoll(false), 100);
    setButtonDisability(true);
    setTimeout(() => setButtonDisability(false), 4000);
  };

  return (
    <View>
      <Animated.View style={styles.die}>
        <Die set={numbers} roll={roll} naughtyStatus={false} />
      </Animated.View>
      <Animated.View style={styles.die}>
        <Die set={numbers} roll={roll} naughtyStatus={false} />
      </Animated.View>
      <Animated.View style={styles.die}>
        <Die set={numbers} roll={roll} naughtyStatus={false} />
      </Animated.View>
      <Animated.View style={styles.die}>
        <Die set={numbers} roll={roll} naughtyStatus={false} />
      </Animated.View>
      <Animated.View style={styles.die}>
        <Die set={numbers} roll={roll} naughtyStatus={false} />
      </Animated.View>
      <TouchableOpacity
        style={styles.rollButton}
        onPress={() => rollBothDice()}
        disabled={buttonDisability}>
        <Text style={styles.infoPoints}>ROLL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  die: {
    transform: [{scale: 0.5}, {rotate: '-90deg'}],
    margin: -40,
  },
  rollButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'white',
    borderRadius: 100,
    height: 100,
    width: 100,
    justifyContent: 'center',
    elevation: 0,
  },
  infoPoints: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LiarsDice;
