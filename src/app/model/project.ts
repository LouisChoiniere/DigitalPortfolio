import Link from "./link";

export default interface Project {
    _id: string | undefined,
    title: string,
    description: string,
    date: string,
    links: Link[],
    displayOrder: number,
    goal: string,
}