import PreloaderStyle from "./Preloader.module.scss";
import loadingLogo from "../../media/spinner.svg";

export const Preloader = () => {
    return (
        <div className={PreloaderStyle.loadingImageWrap}>
            <img className={PreloaderStyle.loadingImage} src={loadingLogo} />
        </div>
    );
};