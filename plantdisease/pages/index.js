import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PlantPal</title>
        <meta name="description" content="Detect plant diseases and identify plant species using AI" />
      </Head>

      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.title}>🌱 PlantPal</h1>
          <p style={styles.subtitle}>
            Your AI-powered companion for plant health and identification.
          </p>
        </section>

        <section style={styles.features}>
          <h2 style={styles.heading}>What PlantPal Can Do</h2>
          <ul style={styles.list}>
            <li>🌿 Detect plant diseases from images</li>
            <li>🔍 Identify plant species accurately</li>
            <li>📊 Provide health insights and care tips</li>
          </ul>
        </section>

        <section style={styles.cta}>
          <button style={styles.button}>Get Started</button>
        </section>
      </main>
    </>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f9f4",
    color: "#2f4f2f",
    padding: "40px",
  },
  hero: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    margin: "0 auto",
  },
  features: {
    maxWidth: "700px",
    margin: "0 auto 60px auto",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.1rem",
    lineHeight: "2rem",
  },
  cta: {
    textAlign: "center",
  },
  button: {
    padding: "12px 30px",
    fontSize: "1rem",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
