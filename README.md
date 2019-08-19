# iunigo-components-challenge
A simple react components library for IUNIGO

## Installation

```js
  yarn add iunigo-components-challenge
```

## Usage
### Button

```js
import React, { Component } from 'react';
import { Button } from 'iunigo-components-challenge';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onClick={() => alert('Welcome!')}>
          Hop in!
        </Button>
      </div>
    );
  }
}

export default App;
```

##### Properties
- children: Text or Element inside the button
- onClick: event click
- disabled: if the button has been disabled
- className: Property to extend element className
- type: One of `'primary'`, `'secondary'`, `'disabled'`
- theme: `'light'` or `'dark'` mode

### InputText
```js
import React, { Component } from 'react';
import { InputText } from 'iunigo-components-challenge';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputText placeholder='Username' theme='dark' />
      </div>
    );
  }
}

export default App;
```

##### Properties
- name: Element name,
- className: Property to extend element className 
- placeholder: Specifies a short hint that describes the expected value
- value: Specifies the value
- min: Specifies the minimum value
- max: Specifies the maximum value
- onChange: `event`
- onKeyPress: `event`
- onEnter: `event`
- theme: `'light'` or `'dark'` mode

## Created by
Nahuel Rosso

## License
MIT