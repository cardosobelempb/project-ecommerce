export const formatMoney = (amount: number): string => {
  return new Intl.NumberFormat("pb-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount / 100);
}