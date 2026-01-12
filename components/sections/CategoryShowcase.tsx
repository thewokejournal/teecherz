import Container from "../ui/Container";

interface Category {
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  color: "blue" | "orange" | "grey" | "red";
  tagline?: string;
}

const categories: Category[] = [
  {
    title: "Dining Room",
    subtitle: "DINING FURNITURE",
    tagline: "Memorable Moments with Family",
    href: "/categories/dining-room",
    color: "blue",
  },
  {
    title: "Living Room",
    subtitle: "LIVING FURNITURE",
    tagline: "Comfort beyond your needs",
    href: "/categories/living-room",
    color: "orange",
  },
  {
    title: "Bedroom Suites",
    subtitle: "BEDROOM SUITES",
    tagline: "Timeless Elegance",
    href: "/categories/bedroom",
    color: "grey",
  },
  {
    title: "Office Life",
    subtitle: "OFFICE FURNITURE",
    tagline: "Modern Solutions",
    href: "/categories/office",
    color: "red",
  },
];

const colorClasses = {
  blue: "bg-blue-50 hover:bg-blue-100",
  orange: "bg-orange-50 hover:bg-orange-100",
  grey: "bg-gray-50 hover:bg-gray-100",
  red: "bg-red-50 hover:bg-red-100",
};

export default function CategoryShowcase() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${colorClasses[category.color]}`}
            >
              <div className="relative z-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                  {category.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
                {category.tagline && (
                  <p className="mt-2 text-sm text-foreground/70">
                    {category.tagline}
                  </p>
                )}
                <div className="mt-4 h-0.5 w-12 bg-[#DC2626] transition-all duration-300 group-hover:w-full"></div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
