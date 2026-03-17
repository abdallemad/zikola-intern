import GlassScene from "@/practice/3d-glass-thing/scene";
import SmoothEearthScrollWrapper from "@/practice/smoth-scroll-3d-earth/wrapper";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="h-screen"><GlassScene />
      </div>
      {/* <SmoothEearthScrollWrapper /> */}
    </div>
  );
}
