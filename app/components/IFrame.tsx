interface IFrameProps {
    src: string;
    width?: string | number;
    height?: string | number;
  }
  
  export default function IFrame({ src }: IFrameProps) {
    return (
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={src}
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
            border: "1px solid rgba(0,0,0,0.1)"
          }}
        />
      </div>
    );
  }