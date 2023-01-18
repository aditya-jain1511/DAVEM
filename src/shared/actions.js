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
    console.log(events)
}