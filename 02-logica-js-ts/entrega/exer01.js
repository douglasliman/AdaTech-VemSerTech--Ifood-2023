function separarPorTipo(hotifrutis) {
    
    let frutas = [];
    let legumes = [];
    let verduras = [];
    
    for (let i = 0; i < hotifrutis.length; i++) {
      let item = hotifrutis[i];
  
      if (['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão'].includes(item) && !frutas.includes(item)) {
        frutas.push(item);
      } else if (['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'].includes(item) && !legumes.includes(item)) {
        legumes.push(item);
      } else if (['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga'].includes(item) && !verduras.includes(item)) {
        verduras.push(item);
      }
    }
  
    return {
      frutas,
      legumes,
      verduras
    };
  }
  
  const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão',
  'cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface',
   'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata'];
  
  
  const resultado = separarPorTipo(hotifrutis);
  console.log(resultado);
  