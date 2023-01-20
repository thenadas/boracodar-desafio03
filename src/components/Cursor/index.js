import './cursor.css';

export default function Cursor(props){
    return(
        <div>
            <h2 className={props.className}>{props.name}</h2>
        </div>
    )
}