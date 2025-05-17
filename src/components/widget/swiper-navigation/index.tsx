import Button from "../../general/buttons/btn";
import Icon from "../../general/icon";
import "./style.scss";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function SwiperNavigation({ onPrev, onNext }: Props) {
  return (
    <div className="swiper-navigation">
      <Button
        className="prev-slide icon-btn"
        aria-label="Previous Slide"
        onClick={onPrev}
      >
        <Icon name="chevron-right" />
      </Button>
      <Button
        className="next-slide icon-btn"
        aria-label="Next Slide"
        onClick={onNext}
      >
        <Icon name="chevron-left" />
      </Button>
    </div>
  );
}
