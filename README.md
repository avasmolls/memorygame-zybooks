# Memory Card Game | JavaScript & jQuery

## Overview

This project is an interactive memory-matching game built using JavaScript, jQuery, HTML, and CSS. Players flip over cards to reveal hidden symbols and attempt to find matching pairs. Matching cards remain face-up, while unmatched cards automatically flip back over.

The goal was to strengthen my understanding of event-driven programming, DOM manipulation, animation sequencing, and asynchronous JavaScript by creating an engaging and interactive gaming experience.

## Technologies Used

- **HTML** — Game structure and card grid
- **CSS** — Card styling, layout, and visual effects
- **JavaScript** — Game logic and matching functionality
- **jQuery** — DOM manipulation, animations, and event handling
- **JavaScript Timers** — Animation delays and timing

## Features

| Feature | Description |
|---|---|
| Interactive Card Grid | Displays 12 cards arranged in a 3×4 grid. |
| Card Flipping | Animates cards flipping over to reveal hidden symbols. |
| Matching Logic | Compares two selected cards to determine whether they match. |
| Matched Card Animation | Enlarges and shrinks matching symbols to provide visual feedback. |
| Automatic Card Reset | Flips unmatched cards back to their hidden state. |
| New Game Functionality | Randomizes card positions and resets the game board. |
| Smooth Transitions | Uses sliding and fading effects to enhance gameplay. |

## How It Works

### 1. Card Selection

Players select two cards from the grid to reveal their hidden symbols.

The game compares the selected cards:

- **Matching Cards:** Remain face-up and display a matching animation.
- **Nonmatching Cards:** Automatically flip back to their hidden state.
- **Game Objective:** Find all six matching pairs to reveal the entire board.

### 2. Card Flip Animations

The game uses jQuery's `slideUp()` and `slideDown()` methods to simulate cards flipping between their hidden and revealed states.

When a card is selected:

1. The card slides upward over 200 milliseconds.
2. The hidden symbol and its color are displayed.
3. The `card-visible` CSS class is applied.
4. The card slides downward over 200 milliseconds to reveal its face.

Unmatched cards use the reverse process to return to their hidden state.

### 3. Matching Animations

When two cards match, the game provides visual feedback through a symbol animation.

After a 500-millisecond delay, both matching symbols:

1. Increase in font size from 75px to 100px over 200 milliseconds.
2. Return to 75px over another 200 milliseconds.

This animation is implemented using jQuery's `animate()` method and JavaScript's `setTimeout()` function.

### 4. Starting a New Game

Clicking the **New Game** button resets the board with a smooth transition.

The game:

1. Fades out the current card grid.
2. Randomizes the card positions.
3. Hides all previously revealed cards.
4. Fades the updated grid back into view.

The transition uses jQuery's `fadeOut()` and `fadeIn()` methods to ensure that the board resets without abrupt visual changes.

## Implementation Approach

### Event-Driven Programming

The game uses jQuery event handlers to detect card selections and initiate the appropriate game logic.

Each card is assigned a click handler that identifies its position within the grid.

### DOM Manipulation

jQuery dynamically manages card elements by updating:

- Card symbols and colors
- CSS classes
- Element visibility
- Font sizes
- Game board content

### Animation Sequencing

The project uses jQuery animation methods and callbacks to coordinate visual transitions.

Methods such as `slideUp()`, `slideDown()`, `animate()`, `fadeOut()`, and `fadeIn()` allow multiple effects to execute in a controlled sequence.

### Game State Management

JavaScript variables track selected cards and determine whether the player has found a match.

The game maintains the state of revealed and hidden cards while ensuring that matching pairs remain visible.

## Testing & Validation

The game functionality includes the following scenarios:

- Selecting and revealing a card
- Revealing two cards and checking for a match
- Keeping matching cards face-up
- Hiding unmatched cards
- Triggering animations when matching pairs are found
- Completing card animations in the correct sequence
- Randomizing card positions when starting a new game
- Resetting previously revealed cards
- Displaying smooth transitions during board resets

## Key Learning Outcomes

Through this project, I strengthened my understanding of:

- **jQuery Animations:** Creating interactive visual effects using built-in animation methods.
- **Event-Driven Programming:** Handling user interactions through click events.
- **DOM Manipulation:** Dynamically updating HTML elements, CSS classes, and styles.
- **Asynchronous JavaScript:** Managing timed actions using `setTimeout()` and animation callbacks.
- **Animation Queues:** Coordinating sequential animations to maintain consistent behavior.
- **Game Logic:** Implementing card selection, matching, and board randomization.
- **User Experience Design:** Using visual feedback and smooth transitions to create a more engaging interface.

## Project Context

Developed as part of a JavaScript and jQuery programming lab, this project focused on enhancing an existing memory game with interactive animations and improved visual feedback.

The project demonstrates how front-end technologies can be combined to create responsive, engaging web-based games while reinforcing concepts in event handling, animation sequencing, and dynamic user interfaces.
