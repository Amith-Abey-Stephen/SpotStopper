export default function Background() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#363668]">
      {/* Blurred Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            top: '10%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            top: '30%',
            left: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.4), transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute w-[800px] h-[600px] rounded-full"
          style={{
            top: '-20%',
            left: '0%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.4), transparent 100%)',
            filter: 'blur(100px)',
          }}
        />
      </div>
    </div>
  );
}
