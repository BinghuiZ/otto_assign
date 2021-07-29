export const convertDateTime = (timestamp) => {
    if (isNaN(timestamp)) {
        return 'Date:'
    }
    let date = new Date(timestamp * 1000)
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

export const getDayOfWeek = (timestamp) => {
    var date = new Date(timestamp * 1000);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()]
}