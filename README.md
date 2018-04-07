# React Native Round Checkbox

Pure js, lightweight checkbox styled as in iOS. Depends on `react-native-vector-icons`

### install

`npm i --save rn-round-checkbox`

### Usage

`import RoundCheckbox from 'rn-round-checkbox';`

![Example 1](https://raw.githubusercontent.com/vonovak/react-native-round-checkbox/master/image.png 'Example 1')

```
<RoundCheckbox
  size={24}
  checked={this.state.isSelected}
  onValueChange={(newValue) => {console.log(newValue)}}
/>
```

### Props

| Property        | Type      | Default       | Description                                  |
| --------------- | --------- | ------------- | -------------------------------------------- |
| icon            | `string`  | ios-checkmark | name of icon (from Ionicons) in the checkbox |
| backgroundColor | `string`  | '#007AFF'     | background color when checked                |
| size            | `number`  | 24            | icon size                                    |
| iconColor       | `string`  | 'white'       | icon color                                   |
| borderColor     | `string`  | 'grey'        | border color                                 |
| checked         | `boolean` | false         | checked                                      |
| onValueChange   | function  |               | function called on change with new value     |

License: MIT
