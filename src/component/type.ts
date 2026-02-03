export interface taskInterface {
    id:number,
    title:string,
    assignedTo?:string,
    isCompleted:boolean,
    content?:string,
    createUser?:string,
}

export interface friend {
    id:number,
    name:string,
    account:string,
}

export interface user {
    id:number,
    name:string,
    account:string,
    password:string,
    status?:boolean,
    friends?:friend[]
}
