function calculer(a, b, operation) {
    return operation (a, b);
  }
  function addition(x, y) {
    return (x + y);
  }
  function multiplication(x, y) {
    return (x * y);
  }
  
  console.log(calculer(5, 3, addition));
  console.log(calculer(5, 3, multiplication));  