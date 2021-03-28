export default interface Link {
    name: string,
    logo: {
        name: string,
        style: string,
    },
    link: string;
    displayOrder: number;
}