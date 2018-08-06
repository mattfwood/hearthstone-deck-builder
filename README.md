# Cratebind React Starter Template

1.  [Javascript Style Guide](#style)
2.  [CSS](#CSS)
3.  [Testing](#testing)

## Style

For the most part, follow the [AirBNB Javascript Style Guide](https://github.com/airbnb/javascript). We've disabled a few rules in our `.eslintrc` file, but when in doubt defer to their guide.

## CSS

Prefer to use [styled components](http://styled-components.com/) to help keep components self-contained. When creating a custom component that you intend to style, wrap it in a styled component `div`.

```jsx
import styled from 'styled-components';

const StyledButton = styled.div`
  background-color: red;
  padding: 8px 14px;
`;

const Button = props => {
  return <StyledButton>{props.text}</StyledButton>;
};
```

## Testing

All components should have unit tests using Jest.

## Text Editor

Settings for VS Code are provided by default. These include helpful format-on-save features using ES Lint and Prettier. They can be turned off if preferred, but are strongly encouraged as they help keep code formatted and standard across projects.