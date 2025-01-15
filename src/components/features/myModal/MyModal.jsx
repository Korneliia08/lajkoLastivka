import {useEffect, useState} from "react";
import s from "./MyModal.module.scss";
import {FaX} from "react-icons/fa6";

const MyModal = ({
                     controller, children, name, options = {
        defaultClose: true,
        headerTitle: ""
    }
                 }) => {
    const [isAnimating, setIsAnimating] = useState(false); // Śledzenie, czy modal animuje

    useEffect(() => {
        if (controller.currentModal === name) {
            setIsAnimating(true); // Rozpocznij animację pojawiania
        } else {
            setIsAnimating(false); // Rozpocznij animację zamykania
        }
    }, [controller.currentModal, name]);

    return (
        <div
            className={`${s.modalBackPanel} ${
                controller.currentModal === name ? s.visible : s.hidden
            }`}
        >
            <div
                className={`${s.myModalContainer} ${
                    isAnimating ? s.open : s.close
                }`}
                ref={controller.modalRef}
                onAnimationEnd={() => {
                    if (!isAnimating && controller.currentModal !== name) {
                        setIsAnimating(false); // Ustaw isAnimating na false po zakończeniu zamykania
                    }
                }}
            >
                {options.defaultClose && <div className={s.header}>
                    <h1>
                        {options.headerTitle}
                    </h1>
                    <button type={"button"} onClick={controller.closeModal}>
                        <FaX/>
                    </button>
                </div>}
                {children}
            </div>
        </div>
    );
};

export default MyModal;
