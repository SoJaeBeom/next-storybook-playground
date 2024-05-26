import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

type Props = {
  meals: any;
};

export default function MealsGrid(props: Props) {
  return (
    <ul>
      {props.meals.map((meal: any) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
