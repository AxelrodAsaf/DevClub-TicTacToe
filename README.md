# 🕹️ Tic Tac Toe — React + TypeScript

A simple and clean Tic Tac Toe game built with React and TypeScript.
This project is designed for teaching and practicing the fundamentals of:

- useState
- useEffect (later - for the turn timer)
- Component structure
- State flow between parent/child components

## 🛠️ Getting Started
1. Clone the repository
```sh
git clone https://github.com/your-username/tic-tac-toe-react.git

cd tic-tac-toe-react
```

2. Install dependencies
```sh
npm install
```
3. Start the development server
```sh
npm run dev
```
Your app should be running at:
```sh
http://localhost:5173
```

## 🎯 Learning Goals
- useState for managing UI state
- Data flow between parent and child components
- Component reusability (Board/Square)
- Grid rendering using .map()
- Event handling in React
- useEffect for timers and side effects
- Adding game logic & winner detection
- Managing more complex state

## 📌 Tasks to Implement (Step-by-Step)
### Task 1 — Make the Squares Clickable

**Goal:** When clicking a square, place "X" or "O" depending on whose turn it is.
**Hints:**
- Use the existing isXNext state
- Update the squares array with the new value
- Toggle the turn after each move

### Task 2 — Prevent Overwriting Moves
**Goal:** When a player gets 3 in a row, display a winner message.
**Hints:**
- Check `squares[index] !== null` before updating

### Task 3 — Add Winner Detection
**Goal:** When a player gets 3 in a row, display a winner message.
**Hints:**
- Create a `calculateWinner()` helper
- Use all 8 winning combinations
- Add a winner: `string | null` state in Game

### Task 4 — Stop Moves After Win
**Goal:** Disable the board after someone wins.
**Hints:**
- If there's a winner → ignore clicks
- Or disable the buttons with disabled attribute

### Task 5 — Add a “Play Again” Button
**Goal:** Disable the board after someone wins.
**Hints:**
- Clear squares back to `Array(9).fill(null)`
- Reset `isXNext` → true

### Task 6 — Add a Turn Countdown Timer (useEffect)
**Goal:** Each player gets e.g. 10 seconds to play. If time runs out → automatically switch turn.
**Hints:**
- Create `timeLeft` state
- Use `useEffect` with `setInterval`
- Reset timer on every turn change
- Cleanup the interval on unmount or turn switch