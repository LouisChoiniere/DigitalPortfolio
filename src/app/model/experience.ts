export default interface Experience {
    compagny: string,
    position: {
        name: string,
        description: string,
    },
    date: {
        start: string,
        end: string,
    },
}