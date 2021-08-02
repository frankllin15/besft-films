export const hourFormat = (m) => {
    let h = Math.floor(m/60)
    m = m-h*60

    return ((h > 0 ? h+"h" : "") + (m > 0 ? m+"m" : ""))
}

export const getDate = () => {

    const now = new Date

    const year = now.getFullYear()
    const month = now.getUTCMonth() + 1
    const day = now.getUTCDay()


    return `${day < 10 ? "0"+day: day}/${month < 10 ? "0" + month : month}/${year}`
}
