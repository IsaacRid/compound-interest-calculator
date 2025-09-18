let init_amount = 20000
let monthly_contribution = 400
let number_of_years = 30
let interest_rate = 10

const compoundInterest = (init_amount, monthly_contribution, number_of_years, interest_rate) => {
    let total = init_amount

    let annual_contribtuion = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
        total = total + annual_contribtuion
        total = total * (100 + interest_rate / 100)
    }

    return total.toFixed(2)
}

const regularSaving = (init_amount, monthly_contribution, number_of_years) => {
    return (init_amount + monthly_contribution * 12 * number_of_years).toFixed(2)
}


const printOutput = (init_amount, monthly_contribution, number_of_years, interest_rate) => {
    let final_value = compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate)
    let value_without_compounding = regularSaving(init_amount, monthly_contribution, number_of_years)
    let summary = `INITIAL_AMOUNT: £${init_amount}\nMONTHLY_CONTRIBUTION: £${monthly_contribution}\nNUMBER_OF_YEARS: ${number_of_years}\nINTEREST_RATE: ${interest_rate}%\n\n
    FINAL_COMPOUNDED_VALUE: £${final_value}\n
    REGULAR_SAVING_VALUE: £${value_without_compounding}\n
    VALUE_DIFFERENCE: £${final_value - value_without_compounding}`
    console.log(summary)
}