import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { Flex } from "../../ui/Flex/Flex";
import "./rating-section.scss";

export const RatingSection = () => {
  const { t } = useTranslation();

  const tablet = useMediaQuery("(min-width: 769px) and (max-width: 1170px)");

  function drawImageOnCanvas(
    canvas: HTMLCanvasElement | null,
    imageSrc: string
  ) {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();

    image.onload = function () {
      const { width, height } = image;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scaleWidth = canvas.width / width;
      const scaleHeight = canvas.height / height;
      const scale = Math.min(scaleWidth, scaleHeight);

      const scaledWidth = width * scale;
      const scaledHeight = height * scale;

      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;

      ctx.drawImage(image, x, y, scaledWidth, scaledHeight);
    };

    image.src = imageSrc;
  }

  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-20">
        <h3 className="section-title">{t("rating_section.header")}</h3>
        <Flex column={!tablet} className="gap-20">
          <Flex justify="center" align="center" className="graph-container">
            <canvas
              ref={(canvas) => drawImageOnCanvas(canvas, "graph.svg")}
              className="canvas"
            ></canvas>
          </Flex>
          <article className="rating-content">
            <p>{t("rating_section.title")}</p>
            <span>{t("rating_section.text")}</span>
          </article>
        </Flex>
      </Flex>
    </section>
  );
};
