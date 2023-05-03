// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const elementWithSuperLinkId = document.getElementById('super_link');
console.log(elementWithSuperLinkId);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const elementsWithCardLinkClass = document.querySelectorAll('.card-link');
elementsWithCardLinkClass.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const innerElementsWithCardLinkClass = document.querySelectorAll('.card-body .card-link');
console.log(innerElementsWithCardLinkClass);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const elementWithRequaredValueOfDataNumberAttribute = document.querySelector('[data-number="50"]');
console.log(elementWithRequaredValueOfDataNumberAttribute);

// 5. Выведите содержимое тега title в консоль.
console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const elementWithCardTitleClass = document.querySelector('.card-title');
console.log(elementWithCardTitleClass.parentNode);

// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Привет';
const elementWithCardClass = document.querySelector('.card');
elementWithCardClass.prepend(newParagraph);

// 8. Удалите тег h6 на странице.
const elementH6 = document.querySelector('h6');
elementH6.remove();

