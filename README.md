# React Custom Hooks

## Avaliable Hooks

1.  usePersistState

2.  useScreenSizes

3.  useElementIsReveal

4.  useDetectNetworkSpeed

## Guide To Use

### usePersistState

```javascript
import {usePersistState} from '...'
const App = () => {
    const [counter, setCounter] = usePersistState("custom-key-name", 0)

    const handleIncrement = () => {
        setCounter((prev) => prev+1)
    }

    return (
        <>
            <button onClick={handleIncrement}>Counter {counter} </buttn>
        </>
    )
}
```

### useScreenSizes

```javascript
import { useScreenSizes } from "...";
const App = () => {
  const { size, width, height } = useScreenSizes();

  return (
    <>
      {size === "md" && <p>This text will be seen only in medium devices.</p>}
    </>
  );
};
```

### useElementIsReveal

```javascript
import { useRef } from "react";
import { useElementIsReveal } from "...";

const App = () => {
  const boxRef = useRef();
  const { isReveal } = useElementIsReveal({ ref: boxRef });

  return (
    <>
      <div ref={boxRef} className={`isReveal ? "css-animation-class" : ""`}>
        Animated Box
      </div>
    </>
  );
};
```

### useDetectNetworkSpeed

```javascript
import { useDetectNetworkSpeed } from "...";
const App = () => {
  const { status } = useDetectNetworkSpeed(); // null, offline, very slow, slow, moderate, fast, very fast, ultra fast

  return (
    <>
      {status === "very slow" && (
        <div className={`isReveal ? "css-animation-class" : ""`}>
          Internet connection is slow like snail
        </div>
      )}
    </>
  );
};
```

## ToDos

1.  To Add Testing

2.  To Add More Hooks
