import { COLOR } from "../../constants/color";

export const Category = (props: any) => {

    const style = {
        display: "flex",
        textTransform: "uppercase",
        padding: "4px",
        margin: "4px auto",
        backgroundColor: `${props.color}`,
        color: `${COLOR.WHITE_TWO}`,
        fontSize: "14px",
        width: "150px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        cursor: "pointer",
    }

    return <div onClick={props.onClick} style={style}>
        {props.category}
    </div>
}