import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (router.query.signup === 'success') {
        setSuccess('Account created successfully! Please log in.');
        }
    }, [router.query]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.user);
                setSuccess('Login Succesful!');
                setTimeout(() => {
                    router.push("/");
                }, 500);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login Failed');
            }
        } catch (error) {
            console.error('Login error:', error)
            setError('An error occurred during login');
        }
    };

  return (
    <>
      <Head>
        <title>Login | PlantPal</title>
      </Head>

      <main style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome Back 🌿</h1>
          <p style={styles.subtitle}>Log in to your PlantPal account</p>

          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>

          <p style={styles.footerText}>
            Don’t have an account?{" "}
            <Link href="/signup" style={styles.link}>
              Sign up
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
  position: "relative",
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
    backgroundColor: "#4caf50",
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
