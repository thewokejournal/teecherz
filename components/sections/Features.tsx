import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🛒",
    title: "Shop online",
    description:
      "Avoid traffic, Save fuel, Get real-time convenience- Shop in the comfort of your home /office!",
  },
  {
    icon: "🚚",
    title: "Shipping",
    description:
      "Absolute Free delivery within a 20km radius of the main Post Office in any town.",
  },
  {
    icon: "↩️",
    title: "Return policy",
    description:
      "Whilst every care and attention is taken to ensure that our product meets your needs and offers satisfaction, If you're not entirely satisfied kindly return within 14 days from delivery date.",
  },
  {
    icon: "💳",
    title: "Payment methods",
    description: "Visa, Mastercard, Ecocash, Zipit, Cash, Zimswitch",
  },
];

export default function Features() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Order now! We're at your Absolute service
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
