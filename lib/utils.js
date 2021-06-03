export const hourFormat = (m) => {
    let h = Math.round(m/60)
    m = m-h*60

    return (h > 0 ? h+"h" : "") + (m > 0 ? m+"m" : "")
}
