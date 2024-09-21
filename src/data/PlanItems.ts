import { PlanItem } from "../widgets/PlanItemCard/PlanItemCard";

import WaitingIcon from "./../img/waiting.png";
import TruckIcon from "./../img/delivery-truck.png";
import BagsIcon from "./../img/money-bags.png";
import SecureIcon from "./../img/secure.png";

const PlanItems: PlanItem[] = [
  {
    icon: WaitingIcon,
    title: "Прочитай задание внимательно",
    content: "Думаю у тебя не займет это больше двух-трех минут",
  },
  {
    icon: TruckIcon,
    title: "Изучи весь макет заранее",
    content:
      "Подумай как это будет работать на разных разрешениях и при скролле",
  },
  {
    icon: BagsIcon,
    title: "Сделай хорошо",
    content: "Чтобы мы могли тебе доверить подобные задачи в будущем",
  },
  {
    icon: SecureIcon,
    title: "Получи предложение",
    content:
      "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
  },
];

export default PlanItems;
