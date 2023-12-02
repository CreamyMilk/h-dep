export interface Patient {
    reference: number
    phone: string
    username: string
    email: string
    served: boolean
}

export interface RegisterReq {
    username: string
    email: string
    phone: string
}