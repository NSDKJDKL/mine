// Приветствие животного
var animal = "кошка";
alert("Приветствую, " + animal + "!");

// Запрос у пользователя о любви к животному
var loveAnimal = confirm("Вы любите " + animal + "?");
if (loveAnimal) {
    alert("Отлично! Мы тоже любим " + animal + "!");
} else {
    alert("Жаль, " + animal + " такое замечательное животное!");
}