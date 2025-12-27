import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>PlantPal</title>
        <meta
          name="description"
          content="Detect plant diseases and identify plant species using AI"
        />
      </Head>

      <Navbar />
      <main style={styles.main}>
        {/* Top Right Profile Icon */}
        <div style={styles.profileIcon}>👤</div>

        {/* Center Hero Card */}
        <section style={styles.heroCard}>
          <h1 style={styles.title}>🌱 PlantPal</h1>
          <p style={styles.subtitle}>
            Your online companion for plant health and identification
          </p>

          <div style={styles.features}>
            <ul style={styles.list}>
              <li>🌿 Detect plant diseases from images</li>
              <li>🔍 Identify plant species accurately</li>
              <li>📊 Get health insights and care tips</li>
            </ul>
          </div>

          <button style={styles.button}>Get Started</button>
        </section>

        {/* Bottom Quote */}
        <footer style={styles.footer}>
          <p style={styles.quote}>
            “Building a greener, cleaner world.”
          </p>
        </footer>
      </main>
    </>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    background: "linear-gradient(#f4f9f4, #e6f2e6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily: "Arial, sans-serif",
    color: "#2f4f2f",
  },

  profileIcon: {
    position: "absolute",
    top: "20px",
    right: "30px",
    fontSize: "1.6rem",
    cursor: "pointer",
  },

  heroCard: {
    backgroundColor: "#ffffff",
    padding: "50px 60px",
    borderRadius: "16px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
    textAlign: "center",
    maxWidth: "500px",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "12px",
  },

  subtitle: {
    fontSize: "1.1rem",
    marginBottom: "30px",
    color: "#4f6f4f",
  },

  features: {
    marginBottom: "30px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.05rem",
    lineHeight: "2rem",
  },

  button: {
    padding: "14px 36px",
    fontSize: "1rem",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  footer: {
    position: "absolute",
    bottom: "20px",
    textAlign: "center",
    width: "100%",
  },

  quote: {
    fontSize: "0.9rem",
    color: "#6b8f6b",
    fontStyle: "italic",
  },
};
