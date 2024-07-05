export function convertMoney (value: number) {
  const valor = value.toString();
  const price = valor.replace('.',',');
  
  return `R$${ price }`
}

