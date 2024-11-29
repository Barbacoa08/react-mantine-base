import { useMemo } from "react";
import { useGroceriesContext } from "./GroceriesContext";

interface GroceryButtonProps {
  children: React.ReactNode;
  name: string;
  onClick: (name: string) => void;
}
export const GroceryButton: React.FC<GroceryButtonProps> = ({ children, name, onClick }) => {
  const { groceries } = useGroceriesContext();
  const wasClicked = useMemo(() => {
    return groceries.findIndex((g) => g.name === name) >= 0;
  }, [groceries, name]);

  return (
    <button
      className={wasClicked ? "grocery-button-clicked" : undefined}
      type="button"
      onClick={() => onClick(name)}
    >
      {children}
    </button>
  );
};

interface CheckoutListProps {
  onSubmitOrder: () => void;
}
export const CheckoutList = ({ onSubmitOrder }: CheckoutListProps) => {
  const { groceries } = useGroceriesContext();

  const itemCount = useMemo(() => groceries.reduce((a, v) => a + v.quantity, 0), [groceries]);

  if (groceries.length <= 0) {
    return <p className="empty">Cart is empty</p>;
  }

  return (
    <section>
      <div className="groceries-list">
        {groceries.map((g) => (
          <p key={g.name}>
            {g.name}: {g.quantity}
          </p>
        ))}
      </div>

      <div className="submit-order-container">
        <p>Are you ready to submit your order?</p>

        <p>
          It containers <span className="order-selection">{groceries.length} selections</span> and{" "}
          <span className="order-selection">{itemCount} items</span>.
        </p>

        <button type="button" onClick={onSubmitOrder}>
          Submit Order
        </button>
      </div>
    </section>
  );
};
