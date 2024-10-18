export interface Validity {
    status: boolean | ErrValidity
}

export interface ErrValidity {
    name: string,
    message: string,
    expiredAt: string
}
