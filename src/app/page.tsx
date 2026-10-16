
export default function Home() {
  return (
    <main style={{ width: "100%", minHeight: "100dvh", margin: 0, padding: 0 }}>
      <iframe
        src="/halo-market.html"
        title="Halo Market"
        style={{
          display: "block",
          width: "100%",
          height: "100dvh",
          minHeight: "600px",
          border: "none",
        }}
      />
    </main>
  );
}
