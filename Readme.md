## 🌅 @arsil_malek/rn-sunrise-text

Bring your text to life with a smooth **sunrise animation effect**, line by line.  
Perfect for quotes, onboarding screens, storytelling, or impactful messages.

---

## 🎞 Demo
![Toast Demo](https://github.com/CodArsh/rn-sunrise-text/blob/master/assets/demo1.gif)

## 📦 Installation

```bash
npm install @arsil_malek/rn-sunrise-text
# OR
yarn add @arsil_malek/rn-sunrise-text
```

## 🚀 Usage
``` tsx
import { StyleSheet } from 'react-native'
import React from 'react'
import SunriseText from '@arsil_malek/rn-sunrise-text'

const App = () => {
  const lines = [
    '✨ Stay hungry,',
    '🔥 Stay foolish,',
    '💡 Keep learning,',
    '🚀 Keep building,',
    '🌈 Make it happen.',
  ];
  return (
    <SunriseText
      lines={lines}
      delayBetweenLines={250}
      animationDuration={300}
      lineStyle={styles.sunriseText}
    />
  )
}

const styles = StyleSheet.create({
  sunriseText: { fontSize: 25, fontWeight: '600', color: '#000', marginBottom: 15 }
});

export default App
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
