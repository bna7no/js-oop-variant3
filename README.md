# Практична робота 11 — Класи та ООП

## Варіант 3 — Зоопарк

## Опис

Проєкт реалізує систему моделювання зоопарку за допомогою класів JavaScript та принципів ООП.

---

## Реалізовані класи

### Animal

Базовий клас для всіх тварин.

Поля:

- name
- age
- species
- private hunger
- private energy

Методи:

```js
makeSound()
eat(food)
sleep(hours)
move()
getInfo()
```

---

### Mammal extends Animal

Клас ссавців.

Додаткові поля:

- furColor
- numberOfLegs

---

### Bird extends Animal

Клас птахів.

Додаткові поля:

- canFly
- wingSpan

---

### Fish extends Animal

Клас риб.

Додаткові поля:

- waterType

---

### Zoo

Клас для управління зоопарком.

Методи:

```js
addAnimal(animal)
feedAll(food)
sleepAll(hours)
getStatistics()
```

---

## Принципи ООП

У роботі використано:

- інкапсуляцію
- наслідування
- поліморфізм
- приватні поля
- статичний метод

---

## Інструкція запуску

1. Відкрити проєкт у VS Code.
2. Запустити `index.html` через Live Server.
3. Натискати кнопки на сторінці для взаємодії з тваринами.

---

## Технології

- HTML
- CSS
- JavaScript
- ES6 Classes
- VS Code
- GitHub

---

## Автор

Nikita Bezpaliy