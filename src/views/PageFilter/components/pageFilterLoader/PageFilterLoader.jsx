import s from "./PageFilterLoader.module.scss";

const PageFilterLoader = () => {
    return (
        <div className={s.pageFilterLoaderContainer}>
            <div className={s.spinner}></div>
        </div>
    );
};

export default PageFilterLoader;
