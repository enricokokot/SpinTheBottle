import React, {type PropsWithChildren, useState, useEffect} from 'react';
import {
  Animated,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Die from './Die';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HotDice = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [diceLeftNumber, setDiceLeftNumber] = useState(0);
  const [diceRightNumber, setDiceRightNumber] = useState(5);
  const [naughtyStatus, setNaughtyStatus] = useState(false);
  const [roll, setRoll] = useState(false);
  const [buttonDisability, setButtonDisability] = useState(false);
  // const [history, setHistory] = useState([])
  const [trans, setTrans] = useState(new Animated.Value(0));

  const fadeInAnimation = Animated.timing(trans, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  });

  const fadeOutAnimation = Animated.timing(trans, {
    toValue: 0,
    duration: 2000,
    useNativeDriver: true,
  });

  const naughtyStatusChange = () => {
    setNaughtyStatus(!naughtyStatus);
    naughtyStatus ? fadeOutAnimation.start() : fadeInAnimation.start();
  };

  const generateRandomNumber = (aSet: string[]) =>
    Math.floor(Math.random() * aSet.length);

  const rollBothDice = () => {
    // rollLeftDie();
    // rollRightDie();
    setRoll(true);
    setTimeout(() => setRoll(false), 100);
    setButtonDisability(true);
    setTimeout(() => setButtonDisability(false), 4000);
  };

  const rollLeftDie = () => {
    setDiceLeftNumber(generateRandomNumber(diceLeftStatus));
  };

  const rollRightDie = () => {
    setDiceRightNumber(generateRandomNumber(diceRightStatus));
  };

  const diceLeftStatus = [
    'tease',
    'lick',
    'bite',
    'kiss',
    'spank',
    "player's choice",
  ];

  const diceLeftStatusNaughty = [
    'tease',
    'lick',
    'bite',
    'kiss',
    'spank',
    "player's choice",
  ];

  const diceRightStatus = [
    'neck',
    'nipples',
    'inner thigh',
    'butt',
    'breasts',
    'earlobes',
  ];

  const diceRightStatusNaughty = [
    'neck',
    'nipples',
    'clitoris',
    'butt',
    'breasts',
    'earlobes',
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
      <View style={styles.mainContainer}>
        <Animated.View style={[styles.naughtyToggle, , {opacity: trans}]}>
          <Animated.Text
            style={[styles.infoPoints, styles.white]}
            onPress={() => naughtyStatusChange()}>
            Naughty mode
          </Animated.Text>
        </Animated.View>
        {/* <TouchableOpacity style={styles.die} onPress={() => rollLeftDie()}>
          <Text style={styles.dieText}>
            {naughtyStatus
              ? diceLeftStatus[diceLeftNumber]
              : diceLeftStatusNaughty[diceLeftNumber]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.die} onPress={() => rollRightDie()}>
          <Text style={styles.dieText}>
            {naughtyStatus
              ? diceRightStatusNaughty[diceRightNumber]
              : diceRightStatus[diceRightNumber]}
          </Text>
        </TouchableOpacity> */}
        <View style={{position: 'absolute', flexDirection: 'row'}}>
          <Die set={diceLeftStatus} roll={roll} naughtyStatus={naughtyStatus} />
          <Die
            set={naughtyStatus ? diceRightStatusNaughty : diceRightStatus}
            roll={roll}
            naughtyStatus={naughtyStatus}
          />
        </View>
        <TouchableOpacity
          style={styles.rollButton}
          onPress={() => rollBothDice()}
          disabled={buttonDisability}>
          <Text style={styles.infoPoints}>ROLL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  die: {
    backgroundColor: 'white',
    minWidth: 150,
    minHeight: 150,
    maxWidth: 150,
    maxHeight: 150,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  dieText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: 80,
  },
  mainContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  naughtyToggle: {
    position: 'absolute',
    top: 20,
    backgroundColor: 'black',
    height: '6%',
    width: '100%',
    justifyContent: 'center',
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
  white: {
    color: 'white',
  },
});

export default HotDice;
