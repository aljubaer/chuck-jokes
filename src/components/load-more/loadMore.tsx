import "./outlineButton.css"
import path7 from "../../assets/path-7.png"

export const LoadMore = ( props: any ) => {
    return <div className="outline-button" onClick={props.onClick}> 
        Load More <span style={{ marginLeft: "10px", paddingTop: "6px" }}><img src={path7} /></span>
    </div>
}