import {Text, TouchableOpacity, View} from 'react-native';

const ADie = (props: {
  size: number;
  textColor: string;
  backgroundColor: string;
  values: (string | number)[];
  //   style: React.CSSProperties
  style: Object;
  //   onPush: () => void;
  //   onHold: () => void;
}) => {
  const index = 4;
  const value = props.values[index];

  return (
    <TouchableOpacity
      //   onPress={() => props.onPush()}
      //   onLongPress={() => props.onHold()}
      style={[
        {
          width: props.size,
          height: props.size,
          borderRadius: props.size / 10,
          borderWidth: props.size / 50,
          backgroundColor: props.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          margin: props.size / 20,
        },
        props.style,
      ]}>
      <Text
        style={{
          width: '80%',
          textAlign: 'center',
          color: props.textColor,
          fontSize:
            value.toString().length >= 3 ? props.size / 7 : props.size / 2,
          fontWeight: 'bold',
        }}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

ADie.defaultProps = {
  size: 100,
  textColor: '#555',
  backgroundColor: '#fff',
  values: [
    "player's choice",
    'clitoris',
    'violent butt spanking',
    99,
    'hey',
    100,
    'spank',
  ],
  //   values: [1, 2, 3, 4, 5, 6],
  style: [],
  //   onPush: () => console.log('button pushed'),
  //   onHold: () => console.log('button held'),
};

export default ADie;
