import { FunctionComponent } from "react";

type Props = {
    className?: string
}

const Logo: FunctionComponent<Props> = ({ className = "" }) =>
    <svg className={className} viewBox="0 0 165 165" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M154.5,165a10.48,10.48,0,0,1-5.82-1.76L82.5,119.12,16.32,163.24A10.5,10.5,0,0,1,1.11,149.8l72-144a10.5,10.5,0,0,1,18.78,0l72,144A10.5,10.5,0,0,1,154.5,165Zm-53.07-58.5,26,17.33-13-26ZM50.57,97.83l-13,26,26-17.33ZM60,78.91l22.46,15,22.46-15L82.5,34Z"/></svg>

export default Logo