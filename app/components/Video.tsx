export default function Video({ src }: { src: string }) {
    return (
      <video
        src={src}
        controls
        autoPlay
        muted
        loop
        playsInline
        className="w-full rounded-xl"
      />
    );
  }