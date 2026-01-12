import ProductSection from "./ProductSection";

const livingRoomProducts = [
  {
    id: "1",
    name: "Pristine Lounge Suite (Leather)",
    href: "/product/pristine-lounge-suite-leather",
  },
  {
    id: "2",
    name: "Santiago Lounge Suite (PU Leather)",
    href: "/product/santiago-lounge-suite-pu-leather",
  },
  {
    id: "3",
    name: "Alaska Lounge Suite (Fabric)",
    href: "/product/alaska-lounge-suite-fabric",
  },
];

export default function LivingRoomProducts() {
  return (
    <ProductSection
      title="Living Room"
      shopAllHref="/product-category/living-room"
      products={livingRoomProducts}
    />
  );
}
