
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const createEventId = () => {
    return String(eventGuid++)
}

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'تمامی رخدادها',
        start: todayStr
    },
    {
        id: createEventId(),
        title: 'زمان بندی شده',
        start: todayStr + 'T12:00:00'
    }
]
