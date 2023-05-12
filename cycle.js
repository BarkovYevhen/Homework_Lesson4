// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 20; i <= 30; i += 0.5 ) {
    console.log(i);
    }
    
    // Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. 
    const value = 27;
    for (let d = 10; d <= 100; d += 10) {
    let result = d * value;
    console.log (`${d} доларів = ${result} гривень`)
    }
    
    // Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
    const N = 100;
    let a = 1;
    
    while (a * a <= N) {
      console.log(a * a);
      a++;
    }
    
    //Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
    const num = 49;
    let isPrime = true;
    
    if (num <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    
    if (isPrime) {
      console.log(`${num} - просте число`);
    } else {
      console.log(`${num} - складене число`);
    }
    
    //Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
    const number = 26;
    let result = 1;
    
    while (result < number) {
      result *= 3;
    }
    
    if (result === number) {
      console.log(`${number} Вірно`);
    } else {
      console.log(`${number} Помилка`);
    }