import { USERS } from "./users"
import { EVENTS } from "./events"

export const validate = (userId, password) => {

    for(let user of USERS){
        if (user.userId === userId && user.password === password){
            return user
        }
    }
    return false
}

const sortEventsAsc = (events) =>{
    events.sort((a,b) => {
        let aStart = new Date(a.startDate).getTime()
        let bStart = new Date(b.startDate).getTime()
        return aStart-bStart
    })
    return events
}
const sortEventsDesc = (events) =>{
    events.sort((a,b) => {
        let aStart = new Date(a.startDate).getTime()
        let bStart = new Date(b.startDate).getTime()
        return bStart-aStart
    })
    return events
}

export const upcomingEvents = () =>{
    let events = []

    const today = new Date()
    const tTime = today.getTime()

    for (let event of EVENTS){
        let sDate = new Date(event.startDate)
        if (sDate.getTime() > tTime){
            events.push(event)
        }
    }

    events = sortEventsAsc(events)
    return events
}

export const closedEvents = () =>{
    let events = []

    const today = new Date()
    const tTime = today.getTime()

    for (let event of EVENTS){
        let eDate = new Date(event.endDate)
        if (eDate.getTime() < tTime){
            events.push(event)
        }
    }
    events = sortEventsDesc(events)
    return events
}

export const ongoingEvents = () =>{
    let events = []

    const today = new Date()
    const tTime = today.getTime()

    for (let event of EVENTS){
        let sDate = new Date(event.startDate)
        let eDate = new Date(event.endDate)
        if (sDate.getTime() <= tTime && eDate.getTime() >= tTime){
            events.push(event)
        }
    }
    events = sortEventsAsc(events)
    return events
}

export const fetchEvent = (id) => {
    id = Number(id)
    const event = EVENTS.find(e => e.id === id)
    if(event){
        return event
    }
    return (null)
}

export const incharge = (userId) => {
    const user = USERS.find(u=> u.userId === userId)
    const picked = (({name, department, phone, email, userId, id})=>({name, department, phone, email, userId, id}))(user)
    return picked
}