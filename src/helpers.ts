import { CalcOutputType, LengthSizeType, ShapeType, ShapeValueType, SizeType } from "./types";

// sizesList
export const sizesList: SizeType[] = [
  { id: 1, title: "Высота", value: "height" },
  { id: 2, title: "Ширина", value: "width" },
  { id: 3, title: "Длина", value: "length" },
  { id: 4, title: "Стенка", value: "wall" },
  { id: 5, title: "Толщина", value: "thick" },
  { id: 6, title: "Кол-во", value: "number" },
  { id: 7, title: "Внеш. диаметр", value: "outDiameter" },
  { id: 8, title: "Диаметр", value: "diameter" },
  { id: 9, title: "Перемычка", value: "jumper" },
  { id: 10, title: "Полка", value: "shelf" },
]

// shapesList
export const shapesList: ShapeType[] = [
  { id: 1, title: "Труба", value: "pipe-square", list: [ 1, 2, 3, 4 ] },
  { id: 2, title: "Лист", value: "sheet", list: [ 5, 2, 3, 6 ] },
  { id: 3, title: "Труба", value: "pipe", list: [ 7, 5, 3 ] },
  { id: 4, title: "Круг", value: "circle", list: [ 8, 3 ] },
  { id: 5, title: "Уголок", value: "corner", list: [ 1, 2, 3, 4 ] },
  { id: 6, title: "Квадрат", value: "square", list: [ 2, 3 ] },
  { id: 7, title: "Швеллер", value: "shwell", list: [ 1, 2, 3, 4 ] },
  { id: 8, title: "Полоса", value: "ribbon", list: [ 5, 2, 3 ] },
  { id: 9, title: "Балка", value: "rail", list: [ 1, 2, 9, 10, 3 ] },
  { id: 10, title: "Шести-гранник", value: "corner6", list: [ 8, 3 ] }
]


// createEmptySizes
export const createEmptySizes = (num: number): string[] => {
  const output: string[] = []
  for (let i = 0; i < num; i++) {
    output.push('')
  }
  return output
}


// valueSizeFunction
export const valueSizeFunction = (val: string, type: string): string => {
  return (val === 'length') ? type : (val === 'number') ? 'шт.' : 'мм.'
}

// createLabelFunction
export const createLabelFunction = (val: string, title: string): string => {
  return (val === 'number') ? `${title}, шт.` :
        (val === 'length') ? title :
        `${title}, мм.`
}


// CALC FUNCTION
export const calcMetalFuction = (shape: ShapeValueType, mark: number, sizes: number[], cost: number, lengthtype: LengthSizeType | string): CalcOutputType => {
  const Ro: number = mark
  let result: number = 0

  // Corner / ro * S * (A + B — S) * L
  if (shape === 'corner') {
    result = mark * sizes[3] * (sizes[0] + sizes[1] - sizes[3]) * sizes[2]
  }

  // Sheet / H * A * B * p * N
  if ( shape === 'sheet' ) {
    result = sizes.reduce((acum, el) => acum *= el, 1) * mark
  }

  // Round pipe / Pi * Ro * S * (D - S) * L
  if (shape === 'pipe') {
    result = Math.PI * Ro * sizes[1] * ( sizes[0] - sizes[1] ) * sizes[2]
  }
  
  // Square pipe / ((A + B) * 2) * L * S * Ro
  if (shape === 'pipe-square') {
    const size1 = sizes[0]
    const size2 = sizes[1]
    const length = sizes[2]
    const S = sizes[3]
    result = ( (size1 + size2) * 2 ) * length * S * mark
  }

  // Square
  if (shape === 'square') {
    result = Math.pow(sizes[0], 2) * sizes[1] * mark
  }

  // Circle
  if (shape === 'circle') {
    const radius = sizes[0] / 2
    result = Math.PI * Math.pow(radius, 2) * sizes[1] * mark
  }

  // Stripe
  if (shape === 'ribbon' ) {
    result = sizes[0] * sizes[1] * sizes[2] * mark
  }

  // Corner6
  if (shape === 'corner6') {
    const cbrt = 0.87
    result = cbrt * Math.pow(sizes[0], 2) * sizes[1] * mark
  }

  // Shwell / М = ( 2 x B + Н — 4 х S ) * L х S х 7.9
  if (shape === 'shwell') {
    result = ( 2 * sizes[0] + sizes[1] - 4 * sizes[3] ) * sizes[2] * sizes[3] * mark
  }

  // Rail / ρ × (2 × b × t + (h - 2 × t) × s) × L
  if (shape === 'rail') {
    console.log('rail')
    const h = sizes[0]
    const b = sizes[1]
    const t = sizes[2]
    const s = sizes[3]
    const L = sizes[4]
    result = mark * (2 * b * t + (h - 2 * t) * s) * L
  }


  // output
  if (lengthtype === 'мм.') result = result / 1000000000
  if (lengthtype === 'см.') result = result / 100000000
  if (lengthtype === 'м.') result = result / 1000000

  const totalPrice: number = result * cost
  
  return {
    weight: result.toFixed(2),
    price: (cost > 0) ? totalPrice.toFixed(2).toString() + ' руб.' : '---'
  }
}