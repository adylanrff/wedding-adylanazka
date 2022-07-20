export type ScheduleData = {
    startDatetime: number
    endDatetime: number
}

export type LocationData = {
    name: string
    address: string
    latitude: number
    longitude: number
}

export type WeddingInfoData = {
    akadSchedule: ScheduleData
    resepsiSchedule: ScheduleData
    location: LocationData
    addToCalendarUrl: string
}