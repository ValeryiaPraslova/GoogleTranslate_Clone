/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * JavaScript — это язык программирования, который работает в браузере.
 * Он позволяет делать сайты интерактивными.
 * Например, можно менять цвет кнопок, добавлять анимацию или проверять данные формы.
 *
 * Всё в JS — это данные, и у них есть разные "типы". Представьте, что это коробки с разными вещами.
 */

// 1. Числа (number) — просто числа: 1, 2.5, -100
const age = 26;
const price = 9.99;

// 2. Строки (string) — текст, например, "Привет"
const name = "Буууууочка";
const message = `Тебе ${age} лет`; // Можно вставлять переменные

// 3. Логические значения (boolean) — "Да" или "Нет"
const yes = true; // означает правильность условия
const no = false; // значит что условие неверно

// 4. Null и undefined — отсутствие данных
const empty = null; // Намеренно пустое значение
const notAssigned = undefined; // Переменная есть, но без значения

// 5. Массивы (array) — список данных
const colors = ["Бордовый", "Фиолетовый", "Розовый"];

// 6. Объекты (object) — хранят свойства и значения
const ValeriyaPraslova = {
  name: "Буууочка",
  age: 26,
  isArtist: true,
  lovedColors: colors,
  experience: {
    teaching: 3,
    shop: 2,
    kitchen: 1,
  },
};

// 7. Символы (symbol) — редкий случай (для уникальных ключей объектов)
const uniqueKey = Symbol("мой ключ");

// TypeScript: можно указывать типы, чтобы избежать ошибок
// Это позволит защитить разработчика от ошибок присвоения неподходящих значений
const typedNumber: number = 42;
const typedString: string = "Hello, TypeScript!";
