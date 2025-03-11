
interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> { }

function Image({ ...props }: Props) {
    return (
        <img {...props} className={`w-44 h-auto md:w-[340px] ${props.className}`} />
    )
}

export default Image