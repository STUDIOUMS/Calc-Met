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
          
          // Calculating
          const consume: number = data.weight * data.thick * data.layers
          const cover: number = 100 / consume * data.layers
          const priceCover: number = data.price * cover * data.layers
          const necessity: number = consume * data.square * data.number * data.layers
          
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
