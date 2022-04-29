export const timeFromPost = (postTime) => {
    const one_min = 60000
    const elapsed = new Date() - new Date(postTime)

    switch (true) {
        case (elapsed < one_min * 60):
            return `${Math.floor(elapsed / one_min)} MINUTES AGO`
        case (elapsed < one_min * 60 * 24):
            return `${Math.floor(elapsed / (one_min * 60))} HOURS AGO`
        default:
            return `${Math.floor(elapsed / (one_min * 60 * 24))} DAYS AGO`
    }
}