import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { PaintDataType, PaintType } from '../types'
import { nanoid } from 'nanoid'
import { transformNumber } from '../helpers'


interface PaintResultState {
  resultsPaint: PaintDataType[]
  setResultPaint: (data: PaintType) => void
  removePaintResult: (id: string) => void
  removeAllPaintResults: () => void
}

export const usePaintResultStore = create<PaintResultState>()(
  devtools(
    persist(
      (set) => ({
        resultsPaint: [],

        // setResultPaint
        setResultPaint: (data) => set((state) => {
          const { efficiency, layers, number, price, square, thick, weight, bothsides, currency, material } = data
          let layersData = layers ? layers : 1
          let numberData = number ? number : 1
          let both = bothsides ? 2 : 1

          console.log(material)
          
          // Calculating
          const consume: number = (weight * thick / (efficiency / 100)) * layersData * numberData
          const cover: number = 1000 / (weight * thick)
          const priceCover: number = (weight * thick * price) / (efficiency * 10) * layersData * numberData
          const necessity: number = weight * square * thick / 1000 * layersData * numberData * both
          
          // Output
          const output: PaintDataType = {
            id: nanoid(),
            consume: transformNumber(consume),
            cover: transformNumber(cover),
            necessity: transformNumber(necessity),
            priceCover: transformNumber(priceCover) + ' ' + currency,
            material
          }
          
          return { resultsPaint: [ output, ...state.resultsPaint ] }
        }),

        // removePaintResult
        removePaintResult: (id) => set((state) => ({ resultsPaint: state.resultsPaint.filter(el => el.id !== id) })),

        // removeAllPaintResults
        removeAllPaintResults: () => set(() => ({ resultsPaint: [] }))

      }),
      {
        name: 'results-paint',
        partialize: (state) => ({
          resultsPaint: state.resultsPaint,
        })
      }
    )
  )
)
