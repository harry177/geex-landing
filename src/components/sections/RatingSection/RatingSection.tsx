import { Flex } from "../../ui/Flex/Flex";
import "./rating-section.scss";

export const RatingSection = () => {
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
        <h3 className="section-title">Рейтинг организации</h3>
        <Flex justify="center" align="center" className="graph-container">
          <canvas
            ref={(canvas) => drawImageOnCanvas(canvas, "graph.svg")}
            className="canvas"
          ></canvas>
        </Flex>
        <article className="rating-content">
          <p>Рейтинг: Очень высокий</p>
          <span>
            Спортсмены организации показывают достаточно хорошие результаты на
            тренировках и соревнованиях, а также за последний год стабильно
            поднимаются в рейтинге.
          </span>
        </article>
      </Flex>
    </section>
  );
};
