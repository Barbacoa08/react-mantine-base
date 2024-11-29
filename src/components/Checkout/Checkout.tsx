import { useCallback, useState } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GroceriesContext } from "./GroceriesContext";
import { CheckoutList, GroceryButton } from "./helpers";

import "./checkout.css";

export interface GroceryItem {
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
