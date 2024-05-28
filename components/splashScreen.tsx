import TextShimmer from "./shimmerText";

export function TextShimmerDemo() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className="group text-base md:text-xl lg:text-3xl text-white transition-all"
      >
        <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition">
          <span className="tracking-[.30em] lg:tracking-[.40em]">L  A  C  O  N  I  C  G  R  O  U  P</span>
        </TextShimmer>
      </div>
    </div>
  );
}
