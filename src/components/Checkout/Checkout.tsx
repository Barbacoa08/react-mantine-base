import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./checkout.css";

interface GroceriesContextType {
  groceries: GroceryItem[];
}
const GroceriesContext = createContext<GroceriesContextType>({ groceries: [] });
const useGroceriesContext = () => {
  const context = useContext(GroceriesContext);
  if (context === undefined) {
    throw new Error("useGroceriesContext must be used within a GroceriesContextProvider");
  }
  return context;
};

interface GroceryItem {
  name: string;
  quantity: number;
}

export const Checkout = () => {
  const [groceries, setGroceries] = useState<GroceryItem[]>([]);
  const [confirmationModalIsOpen, { open: openConfirmationModal, close: closeConfirmationModal }] =
    useDisclosure(false);

  const handleAddToCart = useCallback(
    (name: string) => {
      const index = groceries.findIndex((g) => g.name === name);

      const updatedGroceries = [...groceries];

      if (index >= 0) {
        updatedGroceries[index].quantity += 1;

        setGroceries(updatedGroceries);
      } else {
        updatedGroceries.push({
          name,
          quantity: 1,
        });
        setGroceries(updatedGroceries);
      }
    },
    [groceries],
  );

  const handleSubmitOrder = useCallback(() => {
    openConfirmationModal();
    setGroceries([]);
  }, [openConfirmationModal]);

  return (
    <GroceriesContext.Provider value={{ groceries }}>
      <main className="checkout-container">
        <h1>Checkout</h1>

        <h2>Make your selection(s)</h2>

        <div className="groceries-selection-container">
          <section className="groceries-type-container">
            <h3>Fruits</h3>

            <GroceryButton onClick={handleAddToCart} name="grapes">
              Grapes
            </GroceryButton>

            <GroceryButton onClick={handleAddToCart} name="apples">
              Apples
            </GroceryButton>

            <GroceryButton onClick={handleAddToCart} name="blueberries">
              Blueberries
            </GroceryButton>
          </section>

          <section className="groceries-type-container">
            <h3>Snacks</h3>

            <GroceryButton onClick={handleAddToCart} name="cheezeits">
              Cheeze-its
            </GroceryButton>

            <GroceryButton onClick={handleAddToCart} name="doritos">
              Doritos
            </GroceryButton>

            <GroceryButton onClick={handleAddToCart} name="granola">
              Granola
            </GroceryButton>
          </section>

          <section className="groceries-type-container">
            <h3>Cereals</h3>

            <GroceryButton onClick={handleAddToCart} name="fruitloops">
              Fruit Loops
            </GroceryButton>

            <GroceryButton onClick={handleAddToCart} name="cerialtwo">
              Cereal Two
            </GroceryButton>

            <GroceryButton onClick={handleAddToCart} name="frostedflakes">
              Frosted Flakes
            </GroceryButton>
          </section>
        </div>

        <div className="cart-container">
          <h2>Cart</h2>

          <CheckoutList onSubmitOrder={handleSubmitOrder} />

          <Modal
            opened={confirmationModalIsOpen}
            onClose={closeConfirmationModal}
            title="Submit Order Confirmation"
            centered
          >
            <p>Order submitted successfully!</p>

            <button type="button" onClick={closeConfirmationModal}>
              Close modal
            </button>
          </Modal>
        </div>
      </main>
    </GroceriesContext.Provider>
  );
};

interface GroceryButtonProps {
  children: React.ReactNode;
  name: string;
  onClick: (name: string) => void;
}
const GroceryButton: React.FC<GroceryButtonProps> = ({ children, name, onClick }) => {
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
const CheckoutList = ({ onSubmitOrder }: CheckoutListProps) => {
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
