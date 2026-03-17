import SmoothEearthScroll from "./scene";
// @ts-ignore
import ReactLenis from "lenis/dist/lenis-react";


export default function SmoothEearthScrollWrapper() {


  return (
    <ReactLenis
      root
      options={{
        // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
        lerp: 0.05,
        //   infinite: true,
        //   syncTouch: true,
      }}
    >
      <div>
        <div className="h-screen"></div>
        <div className="h-screen w-screen relative earth-scroll-base">
          <SmoothEearthScroll />
          {/* <Headings /> */}
        </div>
        <div className="h-screen"></div>
      </div>
    </ReactLenis>
  )
}

function Headings() {
  return <div className="absolute inset-0 px-20 flex items-center justify-center">
    <div className="flex flex-col">
      {['ford', 'ufc', 'lincoln', 'royal caribbean', 'sleepiq', 'nfl'].map(i => (
        <h1 key={i} className="text-8xl font-bold uppercase text-[#aea18c]">{i}</h1>
      ))}
    </div>
  </div>
}