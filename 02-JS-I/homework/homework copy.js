function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero <=1) return false;
  
  for (let i = 2; i <= numero; i++) 
    if (numero % i === 0){
      return false;
    }
    else {
      return true;
  }
}
