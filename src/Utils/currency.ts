
export const currency = (value: number): string => {
    console.log('currency')
    const currency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return currency.format(value);
}