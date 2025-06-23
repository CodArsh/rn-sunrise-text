import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View, TextStyle, StyleProp } from 'react-native';

interface AnimatedTextLinesProps {
  lines: string[];
  lineStyle?: StyleProp<TextStyle>;
  delayBetweenLines?: number; // in ms
  animationDuration?: number; // in ms
  easing?: (value: number) => number;
  startDelay?: number; // in ms
}

const SunriseText: React.FC<AnimatedTextLinesProps> = ({
  lines,
  lineStyle,
  delayBetweenLines = 400,
  animationDuration = 500,
  easing = Easing.out(Easing.exp),
  startDelay = 0,
}) => {
  const animatedValues = useRef(lines.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = animatedValues.map((val, index) =>
      Animated.timing(val, {
        toValue: 1,
        duration: animationDuration,
        delay: startDelay + index * delayBetweenLines,
        useNativeDriver: true,
        easing,
      })
    );
    Animated.stagger(delayBetweenLines, animations).start();
  }, []);

  return (
    <View>
      {lines.map((line, index) => (
        <Animated.Text
          key={`line-${index}`}
          style={[
            lineStyle,
            {
              opacity: animatedValues[index],
              transform: [
                {
                  translateY: animatedValues[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          {line}
        </Animated.Text>
      ))}
    </View>
  );
};

export default SunriseText;
