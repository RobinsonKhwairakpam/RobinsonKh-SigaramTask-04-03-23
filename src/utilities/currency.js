const ruppee = new Intl.NumberFormat(undefined,
    {currency: 'INR', style: 'currency'})

export function currency(number){
    return ruppee.format(number)
                .replace(/^([\d,.]+)/, '$1 ')
                .replace(/([\d,.]+)$/, ' $1')
}