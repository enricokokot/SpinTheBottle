import {useState} from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ADie from './ADie';
import CircleButton from './CircleButton';
import Die from './Die';
import {transformer} from './metro.config';

const LiarsDice = () => {
  const numbers = [1, 2, 3, 4, 5, 6].map(number => number.toString());
  const [buttonDisability, setButtonDisability] = useState(false);
  const [roll, setRoll] = useState(false);
  const [dice, setDice] = useState([1, 2, 3, 4, 5]);
  const [diceValue, setDiceValue] = useState([1, 2, 3, 4, 5, 6]);

  const rollBothDice = () => {
    // rollLeftDie();
    // rollRightDie();
    setRoll(true);
    setTimeout(() => setRoll(false), 100);
    setButtonDisability(true);
    setTimeout(() => setButtonDisability(false), 4000);
  };

  const rollDice = () =>
    setDiceValue(
      diceValue.map(() => Math.floor(Math.random() * diceValue.length) + 1),
    );

  const resetDice = () => {
    setDice([1, 2, 3, 4, 5]);
    rollDice();
  };

  return (
    <View style={{flexGrow: 20}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'black',
          flexGrow: 20,
        }}>
        {/* <ADie size={300} />
      <ADie size={150} /> */}
        {dice.map(die => (
          <TouchableOpacity
            key={die}
            onLongPress={() => setDice(dice.filter(dio => dio !== die))}>
            <ADie
              size={110}
              style={{transform: [{rotate: '-90deg'}]}}
              values={[1, 2, 3, 4, 5, 6]}
              value={diceValue[die]}
            />
          </TouchableOpacity>
        ))}
        {/* <ADie
        size={120}
        values={[1, 2, 3, 4, 5, 6]}
        style={{
          // backgroundColor: 'red',
          // position: 'absolute',
          // transform: [{translateX: 20}, {rotate: '20deg'}],
        }}
      /> */}
        {/* <Animated.View style={styles.die}>
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
      </TouchableOpacity> */}
      </View>
      <View
        style={{
          position: 'absolute',
          right: '5%',
          top: '35%',
          bottom: '35%',
        }}>
        <TouchableOpacity
          onLongPress={() => rollDice()}
          style={[{transform: [{rotate: '-90deg'}]}]}>
          <CircleButton text="ROLL" size={100} />
        </TouchableOpacity>
        <TouchableOpacity
          onLongPress={() => resetDice()}
          style={[{transform: [{rotate: '-90deg'}]}]}>
          <CircleButton text="RESET" size={100} />
        </TouchableOpacity>
      </View>
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
