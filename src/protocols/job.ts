//Creates the type "job" that can be used as a type
export type Job = {
    id?: number,
    title: string,
    active: boolean
    skills: (string | number)[],
    date: string | Date
}

export type UserType = {
    name: string,
    email: string
}