import Grid from "@/components/Grid";
import { LampDemo } from "@/components/Lamp";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center justify-center">
      <section className="bg-black h-fit">
        <AuroraBackground children={""} />
      </section>

      <section>
        <div className="p-12 w-full bg-black">
          {/* <LampDemo /> */}
          <Grid />
        </div>
      </section>
    </div>
  );
}
