import bannerImg3 from "../assets/bitmap@3x.png"
import "./banner.css";

const style = {
    width: "100%",
    backgroundImage: `url(${bannerImg3})`,
}

export const Banner = () => (
    <div style={{
        // width: "100%",
        // background: `url(${ bannerImg3 })`,
    }}>
        <img src={bannerImg3} alt="Banner" width="100%" />
    </div>
)