# 1. HTML

1.  Follow to instruction-git.md file to see how to start your next steps

2.  Add more descriptions to your elements. Try to use attributes:

    - alt="Describe what exactly should be rendered there"
    - area-label="Describe what should be called by clicking it" (if button do not contain any text)
    - title="Add more description if it requires clarification"

3.  Try to split the code on 3 parts with next tags:

    ```html
    <header>
      main menu button logo with link to https://translate.google.com/ settings
      button apps button account button
    </header>
    ```

    ```html
    <main>
      translation types (text, images, ...) language controls (detect language,
      russian, polish, switch language button, ...) translation containers
      (input with text translation result, contained elements) send feedback
      section
      <p><i>Отправить отзыв</i></p>
    </main>
    ```

    ```html
    <footer>history button saved button</footer>
    ```

4.  Add attribute class to all interactive or container elements with
    semantic keyword value using camelCase naming.

    For example:

    ```html
    <button class="googleButton">...</button>
    ```
