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
| **Prop**            | **Type**                    | **Description**                                                               | **Default**              |
| ------------------- | --------------------------- | ----------------------------------------------------------------------------- | ------------------------ |
| `lines`             | `string[]`                  | Array of text lines to animate one by one.                                    | **Required**             |
| `lineStyle`         | `StyleProp<TextStyle>`      | Custom style applied to each line of text.                                    | `undefined`              |
| `delayBetweenLines` | `number`                    | Time delay (in ms) between the appearance of each line.                       | `400`                    |
| `animationDuration` | `number`                    | Duration (in ms) of the animation for each line.                              | `500`                    |
| `easing`            | `(value: number) => number` | Custom easing function from `Easing` module (e.g., `Easing.out(Easing.exp)`). | `Easing.out(Easing.exp)` |
| `startDelay`        | `number`                    | Initial delay (in ms) before the animation starts.                            | `0`                      |



## 🛠️ Contributing
PRs are welcome! Please open an issue first if you'd like to propose a new feature.

## 📄 License
MIT @copyright 2025 Arsil Malek
