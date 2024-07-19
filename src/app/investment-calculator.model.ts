// Purpose: Model for the investment calculator.
export interface InvestmentResults {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}

export interface InvestmentData {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}