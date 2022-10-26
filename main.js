function countMyX(a, b) {
  if (a + b >= 0) {
    plus = "Wynik dodawania wynosi " + (a + b).toString();
  } else {
    plus = "Wynik jest nieprawidłowy";
  }
  if (a - b >= 0) {
    minus = "Wynik odejmowania wynosi " + (a - b).toString();
  } else {
    minus = "Wynik jest nieprawidłowy";
  }
  if (a * b >= 0) {
    times = "Wynik mnożenia wynosi " + (a * b).toString();
  } else {
    times = "Wynik jest nieprawidłowy";
  }
  return plus + "\n" + minus + "\n" + times;
}

console.log(countMyX(1, -9));
