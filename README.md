# Error-Message

this package contains error message components and all country codes component

## `how to install?`

`npm`

> _npm i error-message-tal_

`yarn`

> _yarn add error-message-tal_

---
### `Few things to keep in mind while using it`

* The error message can be a `string` or an `array`, but the success prop should always be a `string`

* If you are using `className` then the `errorStyle/messageStyle` prop won't work.

---

## `how to use country code component? `

```
import {Country_Code} from 'error-message-tal'


function App() {
  return (
      <div>
        <label>Select Country code</label>
        <select
          name="Country code"
          className="select">
          <Country_Code />
        </select>
      </div>

  );
}
```
---
## `how to use the error-message component?`

```
import { ErrorMessage } from "error-message-tal";


function App() {
  const [success, setSuccess] = useState('yeah! its working');
  const [error, seterror] = useState('');
  return (

      <div>
        <ErrorMessage success={success} error={error}/>
      </div>

  );
}

```

---

## `props for error-message component`


**error,
  success,
  errorStyle,
  messageStyle,
  errorClass,
  messageClass,**

  
  <!-- autoRemoveAfter, -->


| props     | type      | default     | required
| ------------- | ------------- | -------- | -------- |
| success         | string         | string  | true
| error           | string/array         | array  | true
| errorStyle           | Style(obj)         |   | false
| messageStyle           | Style(obj)         |   | false
| errorClass           | className(string)         | null  | false
| messageClass           |    className(string)      | null  | false


<!-- # `see this example: `

```

<div>
        <ErrorMessage success={first} error='Yeaaahh its working' messageStyle={{color: "green"}} errorStyle={{color: "red"}} errorClass='errclass'  messageClass='msgclass' autoRemoveAfter={2000}/>
        
      </div>
``` -->
