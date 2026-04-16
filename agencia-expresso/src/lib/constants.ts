export const IFOOD_FEE = 0.27
export const NOVENTA_NOVE_FEE = 0.25
export const BALCAO_FEE = 0
export const MIN_MARGIN = 0.30
export const TARGET_MARGIN = 0.35
export const PLATFORMS = ['iFood', '99Food', 'Balcão/Próprio'] as const
export type Platform = typeof PLATFORMS[number]

export function getPlatformFee(platform: Platform): number {
  if (platform === 'iFood') return IFOOD_FEE
  if (platform === '99Food') return NOVENTA_NOVE_FEE
  return BALCAO_FEE
}