
export const currency = (value: number): string => {
    const currency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return currency.format(value);
}