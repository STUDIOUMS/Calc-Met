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
          const { efficiency, layers, number, price, square, thick, weight } = data
          
          // Calculating
          const consume: number = (weight * thick / (efficiency / 100)) * layers * number
          const cover: number = 1000 / (weight * thick)
          const priceCover: number = (weight * thick * price) / (efficiency * 10) * layers * number
          const necessity: number = weight * square * thick * layers * number
          
          // Output
          const output: PaintDataType = {
            id: nanoid(),
            consume: transformNumber(consume),
            cover: transformNumber(cover),
            necessity: transformNumber(necessity),
            priceCover: transformNumber(priceCover)
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
