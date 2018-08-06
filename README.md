# Cratebind React Starter Template

1.

2.  [Styling](#styling)
3.  [Testing](#testing)

## Styling

Prefer to use [styled components](http://styled-components.com/) to help keep components self-contained. When creating a custom component that you intend to style, wrap it in a styled component `div`.

```jsx
import styled from 'styled-components';

const Styles = styled.div`
  background-color: red;
  padding: 8px 14px;
`;

const Button = props => {
  return <Styled>{props.text}</Styled>;
};
```

## Testing

All components should have unit tests using Jest.

## Text Editor

Settings for VS Code are provided by default. These include helpful format-on-save features using ES Lint and Prettier. They can be turned off if preferred, but are strongly encouraged as they help keep code formatted and standard across projects.