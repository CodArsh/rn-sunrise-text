## 🌅 react-native-sunrise-text

Bring your text to life with a smooth **sunrise animation effect**, line by line.  
Perfect for quotes, onboarding screens, storytelling, or impactful messages.

---

## 🎞 Demo


## 📦 Installation

```bash
npm install react-native-sunrise-text
# OR
yarn add react-native-sunrise-text
```

## 🚀 Usage
``` tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SunriseText from 'react-native-sunrise-text';

const App = () => {
  const lines = [
    '✨ Stay hungry,',
    '🔥 Stay foolish,',
    '💡 Keep learning,',
    '🚀 Keep building,',
    '🌈 Make it happen.',
  ];

  return (
    <View style={styles.container}>
      <SunriseText
        lines={lines}
        duration={500}
        delay={300}
        textStyle={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
```

## ✨ Props
| Prop             | Type        | Description                                      | Default |
| ---------------- | ----------- | ------------------------------------------------ | ------- |
| `lines`          | `string[]`  | Array of lines to animate                        | `[]`    |
| `duration`       | `number`    | Duration (ms) for each line’s fade-in animation  | `500`   |
| `delay`          | `number`    | Delay (ms) between each line's appearance        | `300`   |
| `textStyle`      | `TextStyle` | Style for each text line (fontSize, color, etc.) | `{}`    |
| `containerStyle` | `ViewStyle` | Optional custom style for wrapping container     | `{}`    |


## 🛠️ Contributing
PRs are welcome! Please open an issue first if you'd like to propose a new feature.

## 📄 License
MIT @copyright 2025 Arsil Malek
