import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/login"); // redirect after signup
  };

  return (
    <>
      <Head>
        <title>Sign Up | PlantPal</title>
      </Head>

      <main style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Join PlantPal 🌱</h1>
          <p style={styles.subtitle}>Create your account to get started</p>

          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              required
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              Sign Up
            </button>
          </form>

          <p style={styles.footerText}>
            Already have an account?{" "}
            <Link href="/login" style={styles.link}>
              Login
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  card: {
    backgroundColor: "#fafaf5",
    padding: "40px",
    borderRadius: "12px",
    width: "360px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
  },
  title: {
    marginBottom: "8px",
    color: "#2f4f2f",
  },
  subtitle: {
    marginBottom: "24px",
    color: "#5f7f5f",
    fontSize: "0.95rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #cddccc",
    outline: "none",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#2f4f2f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  footerText: {
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#555",
  },
  link: {
    color: "#2f7d32",
    textDecoration: "none",
    fontWeight: "bold",
  },
};