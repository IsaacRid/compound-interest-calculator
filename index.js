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

    return total
}
