function area(largura, altura){
    const area = largura * altura
    if(area > 20 ) {
        console.log(`Valor acima do permitido: ${area}m²`)
    }
    else{
        return area
    }

}

console.log(area(2,2)) // 4
console.log(area(2)) // NaN
console.log(area())  // NaN
console.log(area(2,2,6,8)) // 4, só conta os dois primeiro paramentros, e  ignora o restante
console.log(area(5,5))
