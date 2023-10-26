enum dayWeek { Monday = "work", Tuesday = "work", Wednesday = "work", Thursday = "work", Friday = "work", Saturday = "weekend", Sunday = "weekend" };


export function isWeekend(day: dayWeek): boolean {
    return day !== "work" ? true : false; 
}