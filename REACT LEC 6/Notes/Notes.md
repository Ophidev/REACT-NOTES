# 📌 React State & Hooks Notes

## 🔹 State in React
- **State** ek concept hai jo **data ko store** karta hai aur **component ko re-render** karta hai jab state change hoti hai.
- **State ka use** dynamically UI update karne ke liye hota hai, bina page reload kiye.

---

## 🔹 useState Hook
- `useState()` ek **React Hook** hai jo functional components ke andar state **manage** karne ke liye use hota hai.
- Yeh **initial state set** karta hai aur ek function return karta hai jo state update karta hai.
- **Example:**

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
```

---

## 🔹 State in Class Components
- Class components me **state** `this.state` se define hoti hai.
- State update karne ke liye `this.setState()` ka use hota hai.
- **Example:**

```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default Counter;
```

---

## 🎯 **Why useState over Class Components?**
✔ Functional components ke sath **simple aur short code** likhne ko milta hai.
✔ `useState` ka use karke bina class likhe bhi **state manage** kar sakte hain.
✔ Hooks ki madad se **reuseable** aur **readable** code likhne ka fayda hota hai.

---

📌 **React Hooks se related aur concepts samajhne ke liye practice zaroor karein! 🚀**
