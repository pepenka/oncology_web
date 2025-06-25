export type News = {
    text: string,
    photoUrl: string
}

export type Event = {
    title: string,
    photoUrl: string,
}

export type Banner = {
    title: string,
    photoUrl: string,
    displayOrder: number,
    redirectOnClickUrl?: string
}

export type Data = Banner[] | News[] | Event[];