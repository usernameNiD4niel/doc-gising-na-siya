import Boy from "../../public/boy.svg";
import Girl from "../../public/girl.svg";
import Girl2 from "../../public/girl2.svg";

interface ProfilesProps {
    url: string;
    alt: string;
}

export const profiles: ProfilesProps[] = [
    {
        alt: "Image of a boy",
        url: Boy
    },
    {
        alt: "Image of a girl",
        url: Girl
    },
    {
        alt: "Image of another girl",
        url: Girl2
    },
]