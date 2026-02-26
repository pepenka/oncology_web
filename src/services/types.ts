export type News = {
    postUrl: string,
    text: string,
    photoUrl: string
}

export type Event = {
    title: string,
    photoUrl: string,
    date: string
}

export type Banner = {
    title: string,
    photoUrl: string,
    displayOrder: number,
    redirectOnClickUrl?: string
}

export type Data = Banner[] | News[] | Event[];

export type ReviewData = {
    name: string,
    age: string,
    status: string,
    reviewText: string,
}

export type RecordData = {
    name: string,
    age: string,
    email?: string,
    phone?: string,
    allowPhone: boolean,
    allowEmail: boolean,
    allowWhatsApp: boolean,
    allowTelegram: boolean,
}