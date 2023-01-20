import './terciario.css';

export default function ButtonTerciario(props){
    return(
        <div>
            <button className={props.className} disabled={props.disabled} onClick={props.onClick}>
                <div className={props.status}></div>
                {props.name}
            </button>
        </div>
    )
}