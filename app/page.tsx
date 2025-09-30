import { Button } from "@/components/ui/button";
import { Heart, Sparkle } from "lucide-react";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="font-sans bg-background min-h-screen px-30 mt-5">
      <section className="flex items-center justify-between mb-5">
        <div className="logo">
          <h2 className="text-2xl font-bold italic">RELIEVE</h2>
        </div>

        <div>
          <Button size="lg" className="rounded-full bg-background-1 text-primary hover:cursor-pointer">Book free consultation</Button>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-3">
        <div>
          <div className="bg-background-2 px-10 py-8 rounded-xl">
            <p className="mb-6 text-4xl leading-11 font-medium">Suffering from <br /> a slipped disc <br /> or chromic <br /> back pain?</p>
            <p className="mb-6 text-sm">Hill DT Spinal Decompression therapy could <br /> be the solution you're looking for.</p>

            <Button size="lg" className="rounded-full bg-background-1 text-primary hover:cursor-pointer">Book online</Button>
          </div>
          <div className="grid grid-cols-2 my-3 gap-3">
              <div className="bg-background-2 px-6 py-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-5xl">4.9</p>
                  <Sparkle size={35} strokeWidth={3} className="text-background-1" />
                </div>
                <p className="mb-2 text-sm">Based on 200+ <br /> clients feedback</p>

                <div className="flex items-center -space-x-3 rounded-full">
                  <Image src="/asset/face-1.png" alt="face picture" width={30} height={30} className="object-cover rounded-full border-2 border-transparent" style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                  <Image src="/asset/face-1.png" alt="face picture" width={30} height={30} className="object-cover rounded-full border-2 border-white" style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                  <Image src="/asset/face-1.png" alt="face picture" width={30} height={30} className="object-cover rounded-full border-2 border-white" style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                  <Image src="/asset/face-1.png" alt="face picture" width={30} height={30} className="object-cover rounded-full border-2 border-white" style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                </div>
              </div>

              <div className="bg-background-1 px-6 py-4 rounded-xl">
                <p>Non-surgical <br /> approach to back <br /> treatment</p>
                <div className="flex justify-between">
                  <div></div>
                  <Heart className="bg-card text-foreground text-righ rounded-full p-2 mt-7 flex justify-between" size={32}/>
                </div>
              </div>
            </div>
        </div>
        <div>
          <Image src="/asset/face-1.png" alt="face picture" width={100} height={70} className="h-137 w-full object-cover rounded-xl"/>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Homepage