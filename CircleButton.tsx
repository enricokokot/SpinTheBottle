import {Text, TouchableOpacity, View} from 'react-native';

const CircleButton = (props: {
  text: string;
  size: number;
  backgroundColor: string;
  textColor: string;
}) => {
  return (
    <View
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        borderWidth: props.size / 50,
        backgroundColor: props.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        margin: props.size / 20,
      }}>
      <Text
        style={{
          width: '80%',
          textAlign: 'center',
          color: props.textColor,
          fontSize:
            props.text.toString().length >= 3 ? props.size / 7 : props.size / 2,
          fontWeight: 'bold',
        }}>
        {props.text}
      </Text>
    </View>
  );
};

CircleButton.defaultProps = {
  text: 'BUTTON',
  size: 50,
  backgroundColor: 'white',
  textColor: '#555',
};

export default CircleButton;
