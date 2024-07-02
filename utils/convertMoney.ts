export function convertMoney (value: string) {
  const price = value.replace('.',',');
  
  return `R$${ price }`
}

