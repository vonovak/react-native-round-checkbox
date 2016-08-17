# React Native Round Checkbox


Simple checkbox styled as in iOS. Depends on `react-native-vector-icons`

### Usage
`import RoundCheckbox from 'rn-round-checkbox';`

```
<RoundCheckbox
  size={23}
  checked={this.isSelected}
  onValueChange={this.onChange}
/>

```
### Props

| Property | Type | Default | Description |
|-----------|--------|---------|--------------------------------------------|
| icon | `string` | ios-checkmark | name of icon (from Ionicons) in the checkbox |
| backgroundColor | `string` | '#007AFF' | background color when checked |
| size | `number` | 40 | icon size |
| iconColor | `string` | 'white' | icon color |
| borderColor | `string` | 'grey' | border color |
| checked | `boolean` | false | checked |
| onValueChange | function | | function called on change with new value|
