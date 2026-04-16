export interface ComboItem {
  name: string
  price: number
  cost: number
}

export interface ComboInput {
  items: ComboItem[]
  comboPrice: number
  monthlyOrders: number
  comboAdoptionRate: number
}

export interface ComboResult {
  itemsSumPrice: number
  discount: number
  discountPercent: number
  comboCost: number
  comboMargin: number
  comboMarginPercent: number
  revenueWithoutCombo: number
  revenueWithCombo: number
  extraRevenue: number
  extraRevenueYear: number
  ticketBefore: number
  ticketAfter: number
}

export function simulateCombo(input: ComboInput): ComboResult {
  const itemsSumPrice = input.items.reduce((acc, i) => acc + i.price, 0)
  const comboCost = input.items.reduce((acc, i) => acc + i.cost, 0)
  const discount = itemsSumPrice - input.comboPrice
  const discountPercent = (discount / itemsSumPrice) * 100
  const comboMargin = input.comboPrice - comboCost
  const comboMarginPercent = (comboMargin / input.comboPrice) * 100
  // pedidos sem combo vs com combo
  const ordersWithCombo = Math.round(input.monthlyOrders * input.comboAdoptionRate)
  const ordersWithout = input.monthlyOrders - ordersWithCombo
  // ticket médio antes e depois
  const avgItemPrice = itemsSumPrice / input.items.length
  const ticketBefore = avgItemPrice
  const ticketAfter = (ordersWithout * avgItemPrice + ordersWithCombo * input.comboPrice) / input.monthlyOrders
  const revenueWithoutCombo = input.monthlyOrders * avgItemPrice
  const revenueWithCombo = ordersWithout * avgItemPrice + ordersWithCombo * input.comboPrice
  const extraRevenue = revenueWithCombo - revenueWithoutCombo
  const extraRevenueYear = extraRevenue * 12

  return { itemsSumPrice, discount, discountPercent, comboCost, comboMargin, comboMarginPercent,
    revenueWithoutCombo, revenueWithCombo, extraRevenue, extraRevenueYear, ticketBefore, ticketAfter }
}