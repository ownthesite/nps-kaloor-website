import Image from "next/image";
import { PageTitle } from "@/components/page-title";

const chairman = {
  name: "T.E Bilal",
  designation: "Chairman",
  image: "/placeholder/person-1.jpg",
  message:
    "Our institution is committed to nurturing students with knowledge, discipline, and strong values. We believe education should inspire confidence, responsibility, and lifelong learning.",
};

const managementMembers = [
  {
    name: "ADV. E.S.M. Kabeer",
    designation: "Manager",
    image: "/placeholder/person-2.jpg",
  },
  {
    name: "P.H Ismail",
    designation: "Assistant Manager",
    image: "/placeholder/person-3.jpg",
  },
  {
    name: "P A Naushad",
    designation: "General Secretary, NPS",
    image: "/placeholder/person-4.jpg",
  },
  {
    name: "K.K Salam",
    designation: "General Secretary, Trust",
    image: "/placeholder/person-5.jpg",
  },
  {
    name: "V.M Siddique",
    designation: "Treasurer, NPS",
    image: "/placeholder/person-6.jpg",
  },
  {
    name: "C.K Jaffar",
    designation: "Joint Secretary, NPS",
    image: "/trust/ck-jaffar.jpeg",
  },
];

export default function ManagementPage() {
  return (
    <main>
      {/* <PageTitle
        title="Management"
        description="Meet the managing committee members leading our institution with dedication and commitment."
      /> */}

      <section className="container py-14">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Managing Committee 2026-2027
          </h1>

          <p className="mt-4 text-muted-foreground leading-7">
            The management committee works together to ensure academic
            excellence, discipline, and the overall development of students.
          </p>
        </div>
      </section>

      {/* Chairman Highlight */}
      <section className="container pb-16">
        <div className="overflow-hidden rounded-3xl border bg-muted/20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative h-[350px] w-full lg:h-[500px]">
              <Image
                src={chairman.image}
                alt={chairman.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 lg:p-12">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Chairman's Message
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                {chairman.name}
              </h2>

              <p className="mt-2 text-lg text-muted-foreground">
                {chairman.designation}
              </p>

              <p className="mt-8 text-base leading-8 text-muted-foreground">
                {chairman.message}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="container pb-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Committee Members
          </h2>

          <p className="mt-3 text-muted-foreground">
            Meet the dedicated members supporting the growth and vision of our institution.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {managementMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-lg font-semibold leading-snug">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}