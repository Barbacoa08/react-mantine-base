import { useCallback, useState } from "react";
import "./checkout.css";

interface Groceries {
	name: string;
	quantity: number;
}

export const CheckoutPage = () => {
	const [groceries, setGroceries] = useState<Groceries[]>([]);

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

	return (
		<main>
			<h1>Checkout</h1>

			<div>
				<h2>Make your selection(s)</h2>
			</div>

			<hr />

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
						Grapes
					</GroceryButton>

					<GroceryButton onClick={handleAddToCart} name="doritos">
						Apples
					</GroceryButton>

					<GroceryButton onClick={handleAddToCart} name="granola">
						Blueberries
					</GroceryButton>
				</section>

				<section className="groceries-type-container">
					<h3>Cereals</h3>

					<GroceryButton onClick={handleAddToCart} name="fruitloops">
						Fruit Loops
					</GroceryButton>

					<GroceryButton onClick={handleAddToCart} name="cerialtwo">
						Cerial Two
					</GroceryButton>

					<GroceryButton onClick={handleAddToCart} name="frostedflakes">
						Frosted Flakes
					</GroceryButton>
				</section>
			</div>

			<hr />

			<div className="">
				<h2>Cart</h2>

				<section>
					<div>
						{groceries.length > 0 ? JSON.stringify(groceries) : "Cart is empty"}
					</div>
				</section>
			</div>
		</main>
	);
};

interface GroceryButtonProps {
	children: React.ReactNode;
	name: string;
	onClick: (name: string) => void;
}
const GroceryButton: React.FC<GroceryButtonProps> = ({
	children,
	name,
	onClick,
}) => {
	return (
		<button type="button" onClick={() => onClick(name)}>
			{children}
		</button>
	);
};
