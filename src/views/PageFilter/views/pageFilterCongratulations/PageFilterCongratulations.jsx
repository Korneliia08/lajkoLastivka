import s from "./PageFilterCongratulations.module.scss";
import style from "@/views/PageFilter/PageFilter.module.scss";
import Lottie from "lottie-react";
import success from "../../../../assets/animations/happy1.json";

const PageFilterCongratulations = ({ isPrev, goToLink, ...props }) => {
  function isInWebView() {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  }
  function goToRozetka() {
    if (isPrev()) {
      return;
    }
    window.location.href = goToLink;
    if (isInWebView()) {
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }

  return (
    <div className={s.pageFilterCongratulationsContainer}>
      <h3>Дякуємо за високу оцінку, Ви найкращі</h3>
      <p className={s.firstP}>
        Напишіть, будь ласка відгук на товар і гарантовано отримайте подарунок
      </p>
      <ol className={s.list}>
        <li>Перейдіть у власний кабінет Rozetka </li>
        <li>Оберіть пункт "Мої відгуки"</li>
        <li>Натисніть «Залишити відгук» навпроти нашого товару </li>
        <li>
          Оберіть оцінку та напишіть відгук Будемо вам дуже вдячні за приємні
          слова, можете додати навітьфото або відео)
        </li>
      </ol>
      <button className={s.goButton} onClick={goToRozetka}>
        Написати відгук та
        <br />
        отримати подарунок
      </button>

      <div className={style.animation}>
        <Lottie
          className={style.animation}
          animationData={success}
          loop={false}
        />
      </div>
    </div>
  );
};
export default PageFilterCongratulations;
