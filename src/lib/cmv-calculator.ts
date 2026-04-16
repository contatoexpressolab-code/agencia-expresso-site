import { Platform, getPlatformFee, TARGET_MARGIN, MIN_MARGIN } from './constants'

export interface Ingredient {
  name: string
  cost: number
  quantity: number
  unit: string
}

export interface CMVInput {
  ingredients: Ingredient[]
  packaging: number
  labor: number
  platform: Platform
}

export interface CMVResult {
  totalCost: number
  platformFee: number
  cmvPercent: number
  minPrice: number
  recommendedPrice: number
  marginAtRecommended: number
  isHealthy: boolean
}

export function calculateCMV(input: CMVInput): CMVResult {
  const fee = getPlatformFee(input.platform)
  // soma custo de todos os ingredientes
  const ingredientCost = input.ingredients.reduce((acc, i) => acc + i.cost * i.quantity, 0)
  const totalCost = ingredientCost + input.packaging + input.labor
  // preço recomendado com margem alvo de 35%
  const recommendedPrice = totalCost / (1 - fee - TARGET_MARGIN)
  // preço mínimo com margem mínima de 30%
  const minPrice = totalCost / (1 - fee - MIN_MARGIN)
  const platformFee = recommendedPrice * fee
  const cmvPercent = (totalCost / recommendedPrice) * 100
  const marginAtRecommended = TARGET_MARGIN * 100
  const isHealthy = cmvPercent <= 40

  return { totalCost, platformFee, cmvPercent, minPrice, recommendedPrice, marginAtRecommended, isHealthy }
}