
# spread-iterable

# Requirements

 * Node >= 6.0.0

# Features

 * Traverse grandchildren of iterable-iterables

# Usage

## Import

```javascript
var SpreadIterable = require('spread-iterable');
```

## Constructor

> Traverse grandchildren of iterable-iterables

### Form

```javascript
var grandchildren = new SpreadIterable(grandparent);
```

Where:

 * `grandparent` is an (infinite/endless) iterable object whose elements are iterable as well as their parent

 * `grandchildren` is an iterable object which iterates the 'elements' above

### Example

```javascript
var strings = ['abc', 'def', 'ghi'];
var letters = new SpreadIterable(strings);
console.log([...letters]);
```

You would seen an array of letters from `'a'` to `'i'`

## Function: `::deep` a.k.a `::times`

> Iterate even deeper

### Form

```javascript
var individuals = SpreadIterable.deep(groups, level);
```

Where:

 * `groups` is an iterable

 * `level` is an unsigned integer

 * `individuals` is an iterable

Works:

 * If `level` is 0, iterate `groups` itself

 * If `level` is a positive integer, iterate `new DeepIterable(DeepIterable.deep(groups, level - 1))`

 * If `level` is a negative number, function `::deep` would throws an error

### Example

```javascript
var groups = [
    ['abc', 'def', 'ghi'],
    ['jkl', 'mno']
];
var individuals = SpreadIterable.deep(groups, 3);
console.log([...individuals]);
```

Just like `new SpreadIterable(new SpreadIterable(groups))`, you would seen an array of alphabet letters from `'a'` to `'o'`
