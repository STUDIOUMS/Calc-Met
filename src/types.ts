
export type ShapeValueType = 'corner' | 'sheet' | 'pipe' | 'circle' | 'pipe-square' | 'square' | 'shwell' | 'ribbon' | 'rail' | 'corner6'

export type SizeType = {
  id: number
  title: string
  value: string
}

export type LengthSizeType = 'мм.' | 'см.' | 'м.'
export type WeightSizeType = 'кг.' | 'тон.'

export type ShapeType = {
  id: number
  title: string
  value: ShapeValueType
  list: number[]
}

export type SelectItemType = {
  label: string
  value: string
  dataValue?: string
  list?: SelectItemType[]
}

export type ResultType = {
  id: string
  material: string
  mark: string
  shape: string
  sizes: SizeType
  weight: string
  price: string
  setType: string
}

export type CalcOutputType = {
  price: string
  weight: string
}

export type materialsObjType = {
  materialName: string
  markName: string
  mark: number
}

export type SetDataType = {
  shapeName: string
  shapeValue: ShapeValueType
  materials: materialsObjType | null
  sizes: number[]
}
