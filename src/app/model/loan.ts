export interface Loan {

        id: string,
        name: string,
        description: string,
        price: number,
        status: boolean,
        categoryId: number,
        categoryName: string

}

export interface Loans {
        refNo: string,
        name: string,
        loanAmount: string,
        balance: string,
        issuedDate: string,
        dueDate: string,
        entityType: string,
        action: string,
        status: string
}