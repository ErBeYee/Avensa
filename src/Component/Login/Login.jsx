import "./Login.css";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const items = [
  { src: "https://picsum.photos/id/123/800/600", key: 1 },
  { src: "https://picsum.photos/id/456/800/600", key: 2 },
  { src: "https://picsum.photos/id/678/800/600", key: 3 },
];

const Login = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const next = () => {
    if (animating) return;
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const previous = () => {
    if (animating) return;
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const slides = items.map((item) => (
    <CarouselItem
      key={item.key}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <img src={item.src} alt="" className="carousel-img" />
    </CarouselItem>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://avensa.petik.or.id/mahasantri/login",
        {
          nama_santri: username,
          password,
        },
      );

      const token = response.data.token;

      if (!token) throw new Error("Token tidak ditemukan");

      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);

      if (decoded.role_id === 2) {
        navigate("/mahasiswa");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={false}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={(newIndex) => {
              if (!animating) setActiveIndex(newIndex);
            }}
          />

          {slides}

          <CarouselControl direction="prev" onClickHandler={previous} />
          <CarouselControl direction="next" onClickHandler={next} />
        </Carousel>
      </div>

      <div className="login-right">
        <div className="lgo">
          <img src={logo} alt="logo" width={150} />
        </div>

        <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <p className="inputt">Username</p>
            <input
              type="text"
              placeholder="Type here..."
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div>
            <p className="inputt">Password</p>
            <input
              type="password"
              placeholder="Type here..."
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <small className="inputtt">Forget Password?</small>
          </div>

          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
