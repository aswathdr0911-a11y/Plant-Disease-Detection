import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo} onClick={() => router.push("/")}>
        🌱 PlantPal
      </div>

      <div style={styles.actions}>
        {!isLoggedIn ? (
          <>
            <button
              style={styles.button}
              onClick={() => router.push("/login")}
            >
              Login
            </button>

            <button
              style={{ ...styles.button, ...styles.signup }}
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </button>
          </>
        ) : (
          <button
            style={styles.profile}
            onClick={() => router.push("/profile")}
          >
            👤 Profile
          </button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    height: "64px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 32px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#2f4f2f",
  },

  actions: {
    display: "flex",
    gap: "12px",
  },

  button: {
    padding: "8px 18px",
    border: "1px solid #4caf50",
    backgroundColor: "transparent",
    color: "#4caf50",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },

  signup: {
    backgroundColor: "#4caf50",
    color: "white",
  },

  profile: {
    padding: "8px 18px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#2f4f2f",
    color: "white",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};

