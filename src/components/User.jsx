import {Avatar} from "./Avatar";

export function User (props) {
    return (
        <div>
            <Avatar src={props.src} alt={props.alt} />
            <div>{props.username}</div>
        </div>
    );
}