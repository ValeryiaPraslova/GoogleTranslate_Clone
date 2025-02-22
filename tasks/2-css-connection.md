# 2. CSS - Connecting html and css files

1. Create style.css file in the root folder

2. Add "link" tag to `head` section of `html` file to connect your `.css` file to `.html`

3. Connect new fonts (`Product Sans` and `Roboto`) from Google to your `.html` file

4. Add minimal styles

    ```css
    html,
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: "Roboto", sans-serif;
      color: rgb(60, 64, 67);
    }

    .googleTranslateTitle {
      font-family: "Product Sans", "Roboto", sans-serif;
      font-size: 22px;
    }
    ```

5. Check if your styles `background-color` and `font` were applied correctly. Check the font of element with class `googleTranslateTitle` in devtools. It should have `Product Sans` font, meanwhile the other text on page should have `Roboto` font
