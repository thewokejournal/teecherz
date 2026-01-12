import ProductSection from "./ProductSection";

const bedroomProducts = [
  {
    id: "1",
    name: "Oxford Bedroom Suite",
    href: "/product/oxford-bedroom-suite",
  },
  {
    id: "2",
    name: "Emperor Bedroom Suite",
    href: "/product/emperor-bedroom-suite",
  },
  {
    id: "3",
    name: "Lincoln",
    href: "/product/lincoln",
  },
];

export default function BedroomProducts() {
  return (
    <ProductSection
      title="Bedroom"
      shopAllHref="/product-category/bedroom-furniture"
      products={bedroomProducts}
    />
  );
}
