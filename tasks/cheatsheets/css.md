# CSS --> Cascade Stylesheets

### Wording

- `selector`
- `rule` or `key-value` pair

### `selector` - is an anchor defines what exactly should be styled. There are different kinds of `selectors`:

- **#id** (strongest)
- **tag** > **.class** (nested `selectors`)
- **.class**, **.anotherClass** (group of `selectors` splitted by comma)
- **.class**
- **tag**
- **\*** (star symbols covers "everything") (weakest)

##### `id` selector starts with `#` (hash) symbol in `css` files

```html
<div id="idName"></div>
```

```css
#idName {
  color: #fff;
}
```

##### `class` selector starts with `.` (dot) symbol in `css` files

```html
<div class="className"></div>
```

```css
.className {
  color: #fff;
}
```

##### `tag` selector should be written without any symbols in front

```html
<button class="className"></button>
```

```css
button {
  color: #fff;
}
```

### `key-value` pair (or `rule`)

```ts
selector {
  key1: value1;
  key2: value2;
}
```

```css
html {
  color: #ffffff;
  font: "Roboto";
}
```

It's a set of `key-value` pairs (or `rules`). They define the style of chosen selector. It allows styling different elements with different styles.

It's a good practice to style everything using only `.classes` and avoiding styling with `#id` or `tag`
