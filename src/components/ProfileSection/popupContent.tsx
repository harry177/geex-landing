import { Flex } from "../ui/Flex/Flex";
import "./popup-content.scss";

export const popupContent = () => {
  return (
    <Flex column className="company-profile__popup">
      <p>Дополнительная информация</p>
      <Flex column className="gap-32">
        <Flex className="gap-12">
          <article className="popup-block popup__block-small">
            <p>Номер телефона</p>
            <span>+7 (773) 493 39 10</span>
          </article>
          <article className="popup-block popup__block-small">
            <p>Email</p>
            <span>alexander.mag@gmail.com</span>
          </article>
        </Flex>
        <article className="popup-block">
          <p>Адрес</p>
          <span>
            930293, Алтайский край, г. Барнаул, пр-т Социалистический, 28 офис
            220
          </span>
        </article>
        <article className="popup-block">
          <p>Об организации</p>
          <span>
            Спортивная организация Алтайского края" - это динамичное объединение
            спортивных энтузиастов, которые преданы развитию и популяризации
            спортивной борьбы в регионе. Наша миссия - создание условий для
            профессионального роста и достижений спортсменов, а также вовлечение
            молодежи в активный образ жизни через занятия спортом. Мы организуем
            тренировки, соревнования и мероприятия, направленные на развитие
            физических и моральных качеств участников.
          </span>
        </article>
        <Flex>
          <article className="popup-block popup__block-small">
            <p>Президент организации</p>
            <span>Антонов Александр Сергеевич</span>
          </article>
          <article className="popup-block popup__block-small">
            <p>Ответственный за ведение реестра</p>
            <span>Антонова Елена Ивановна</span>
          </article>
        </Flex>
        <article className="popup-block">
          <p>Сайт организации</p>
          <span>http://altay_sport.ru/</span>
        </article>
        <article className="popup-block">
          <p>Время работы</p>
          <span>пн-пт: 08:00-22:00, сб-вс: 10:00-17:00</span>
        </article>
      </Flex>
    </Flex>
  );
};
