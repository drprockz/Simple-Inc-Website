type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Strategize",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-shake-hands-line",
        description: "We start by understanding your vision, business goals, and target audience.",
    },
    {
        id: 2,
        title: "Design & Develop",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-global-fill",
        description: "Our creative team brings your ideas to life with stunning designs and cutting-edge development.",
    },
    {
        id: 3,
        title: "Launch & Grow",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-stack-line",
        description: "Once perfected, we launch your project and provide ongoing support.",
    },
]