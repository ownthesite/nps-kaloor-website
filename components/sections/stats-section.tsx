import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";

import { StatCounter } from "@/components/animations/stat-counter";

const stats = [
  {
    number: 28,
    suffix: "+",
    label: "Years",
  },
  {
    number: 2000,
    suffix: "+",
    label: "Students",
  },
  {
    number: 150,
    suffix: "+",
    label: "Faculty",
  },
  {
    number: 50,
    suffix: "+",
    label: "Facilities",
  },
];

export function StatsSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card">
          <StaggerContainer
            staggerDelay={0.1}
            delayChildren={0.1}
          >
            <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
                    <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                      <StatCounter
                        number={stat.number}
                        suffix={stat.suffix}
                      />
                    </div>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}