import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/style/DefaultPage.scss";

export default function PresentationPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const totalSlides = 8;

  const carouselImages = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ];

  useEffect(() => {
    initMatrixBackground();
    initFloatingIcons();
    animateStats();

    // Prevent scrolling
    document.body.style.overflow = "hidden";

    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
    };
  }, []);

  useEffect(() => {
    if (currentSlide === 7) {
      const carouselInterval = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
      return () => clearInterval(carouselInterval);
    }
  }, [currentSlide, carouselImages.length]);

  useEffect(() => {
    if (!isAutoPlaying || currentSlide >= totalSlides - 1) return;

    const timeout = setTimeout(
      () => {
        setCurrentSlide((prev) => prev + 1);
      },
      currentSlide === 0 ? 4000 : 5000
    );

    return () => clearTimeout(timeout);
  }, [currentSlide, isAutoPlaying]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === "ArrowLeft") {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Escape") {
        navigate("/login");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  const initMatrixBackground = () => {
    const matrixBg = document.getElementById("matrixBg");
    if (!matrixBg) return;

    const columns = Math.floor(window.innerWidth / 20);
    matrixBg.innerHTML = "";

    for (let i = 0; i < columns; i++) {
      const column = document.createElement("div");
      column.className = "matrix-column";
      column.style.left = `${i * 20}px`;
      column.style.animationDuration = `${Math.random() * 3 + 2}s`;
      column.style.animationDelay = `${Math.random() * 2}s`;

      let text = "";
      for (let j = 0; j < 20; j++) {
        text += Math.random() > 0.5 ? "1" : "0";
        text += "<br>";
      }
      column.innerHTML = text;

      matrixBg.appendChild(column);
    }
  };

  const initFloatingIcons = () => {
    const floatingIcons = document.getElementById("floatingIcons");
    if (!floatingIcons) return;

    const icons = [
      "🔒",
      "🛡️",
      "📡",
      "🐛",
      "📹",
      "🖥️",
      "👁️",
      "🌐",
      "🔑",
      "🌍",
      "📊",
      "⚡",
    ];
    floatingIcons.innerHTML = "";

    for (let i = 0; i < 15; i++) {
      const icon = document.createElement("div");
      const useOrange = Math.random() > 0.7;
      icon.className = `floating-icon ${useOrange ? "orange" : ""}`;
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.animationDuration = `${Math.random() * 20 + 10}s`;
      icon.style.animationDelay = `${Math.random() * 5}s`;
      icon.textContent = icons[Math.floor(Math.random() * icons.length)];

      floatingIcons.appendChild(icon);
    }
  };

  const animateStats = () => {
    if (currentSlide === 3) {
      const statElements = document.querySelectorAll(".stat-number");
      statElements.forEach((element) => {
        const target = Number.parseInt(
          element.getAttribute("data-target") || "0"
        );
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(current).toLocaleString();
          }
        }, 20);
      });
    }
  };

  useEffect(() => {
    animateStats();
  }, [currentSlide]);

  const handleEnterDashboard = () => {
    navigate("/login");
  };

  const handleSkip = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(7);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="matrix-bg" id="matrixBg"></div>
      <div className="floating-icons" id="floatingIcons"></div>

      <div
        className="progress-bar"
        style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
      ></div>

      <button className="skip-button" onClick={handleSkip}>
        ЎТКАЗИБ ЮБОРИШ
      </button>

      <div className="nav-dots">
        {Array.from({ length: totalSlides }, (_, i) => (
          <div
            key={i}
            className={`nav-dot ${i === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>

      <div className="presentation-container">
        {/* Slide 1: Кириш */}
        <div className={`slide ${currentSlide === 0 ? "active" : ""}`}>
          <div style={{ textAlign: "center" }}>
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              style={{
                width: "150px",
                height: "150px",
                marginBottom: "2rem",
                filter: "drop-shadow(0 0 20px rgba(37, 99, 235, 0.5))",
              }}
            />
          </div>
          <h1>РАҚАМЛИ ХАВФСИЗ ЧИЛОНЗОР</h1>
          <p>Замонавий технологиялар билан ҳимояланган рақамли туман</p>
        </div>

        {/* Slide 2: Президент қарори */}
        <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="IIV Logo"
            className="iiv-logo"
          />
          <h2>ПРЕЗИДЕНТ ҚАРОРИ</h2>
          <div className="glass-card presidential-card">
            <h3
              style={{
                color: "var(--accent-orange)",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <i className="fas fa-gavel"></i> ПҚ-111 СОН ҚАРОРНИ ИЖРО ЭТИШ
              МАҚСАДИДА
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "1rem",
              }}
            >
              Чилонзор туманида амалга оширилаётган ишлар доирасида полковник
              <b> Ф.Ф.Ҳасанов </b> лойиҳаси
            </p>
            <div
              style={{
                background: "rgba(245, 158, 11, 0.1)",
                padding: "1rem",
                borderRadius: "8px",
                borderLeft: "4px solid var(--accent-orange)",
              }}
            >
              <p style={{ fontStyle: "italic", color: "var(--text-gray)" }}>
                Киберхавфсизлик тизимларини ривожлантириш ва жамоат
                хавфсизлигини таъминлаш бўйича вазифалар белгиланди
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3: Харита */}
        <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="IIV Logo"
            className="iiv-logo"
          />
          <h2>ЧИЛОНЗОР ТУМАНИ ХАРИТАСИ</h2>
          <div
            className="glass-card"
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Чилонзор тумани харитаси"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
              <p style={{ marginTop: "1rem", color: "var(--text-gray)" }}>
                Интерактив харита - тумандаги барча объектлар ва хавфсизлик
                зоналари
              </p>
            </div>
          </div>
        </div>

        {/* Slide 4: Демографик статистика */}
        <div className={`slide ${currentSlide === 3 ? "active" : ""}`}>
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="IIV Logo"
            className="iiv-logo"
          />
          <h2>ДЕМОГРАФИК МАЪЛУМОТЛАР</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number" data-target="276700">
                0
              </div>
              <div className="stat-label">Умумий аҳоли сони</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="55">
                0
              </div>
              <div className="stat-label">Маҳаллалар сони</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="3002">
                0
              </div>
              <div className="stat-label">Умумий майдони (км²)</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="74800">
                0
              </div>
              <div className="stat-label">Хонадонлар сони</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="158300">
                0
              </div>
              <div className="stat-label">Банд аҳоли</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="3.8">
                0
              </div>
              <div className="stat-label">Ишсизлик даражаси (%)</div>
            </div>
          </div>
        </div>

        {/* Slide 5: Инфратузилма */}
        <div className={`slide ${currentSlide === 4 ? "active" : ""}`}>
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="IIV Logo"
            className="iiv-logo"
          />
          <h2>ИНФРАТУЗИЛМА МАЪЛУМОТЛАРИ</h2>
          <div className="infra-grid">
            <div className="infra-card">
              <div className="infra-icon">🏫</div>
              <div className="infra-title">Таълим муассасалари</div>
              <div className="infra-value">58</div>
              <div className="infra-label">Мактаб ва коллеж</div>
            </div>
            <div className="infra-card">
              <div className="infra-icon">🏥</div>
              <div className="infra-title">Соғлиқ муассасалари</div>
              <div className="infra-value">40</div>
              <div className="infra-label">Касалхона ва поликлиника</div>
            </div>
            <div className="infra-card">
              <div className="infra-icon">🏪</div>
              <div className="infra-title">Савдо дукони</div>
              <div className="infra-value">216</div>
              <div className="infra-label">Озиқ-овқат ва санъат</div>
            </div>
            <div className="infra-card">
              <div className="infra-icon">🍽️</div>
              <div className="infra-title">Овқатланиш жойлари</div>
              <div className="infra-value">121</div>
              <div className="infra-label">Ресторан ва кафе</div>
            </div>
            <div className="infra-card">
              <div className="infra-icon">⚽</div>
              <div className="infra-title">Спорт иншоотлари</div>
              <div className="infra-value">275</div>
              <div className="infra-label">Майдонча ва зал</div>
            </div>
            <div className="infra-card">
              <div className="infra-icon">🛣️</div>
              <div className="infra-title">Кўчалар</div>
              <div className="infra-value">258</div>
              <div className="infra-label">Асосий транспорт йўллари</div>
            </div>
            <div className="infra-card">
              <div className="infra-icon">📹</div>
              <div className="infra-title">Кузатув камералари</div>
              <div className="infra-value">1,500+</div>
              <div className="infra-label">Фаол мониторинг</div>
            </div>
            <div className="infra-card">
              <div className="infra-icon">📶</div>
              <div className="infra-title">Интернет қамровчилиги</div>
              <div className="infra-value">99.9%</div>
              <div className="infra-label">Тармоқ уланиши</div>
            </div>
          </div>
        </div>

        {/* Slide 6: Таҳлилий панель */}
        <div className={`slide ${currentSlide === 5 ? "active" : ""}`}>
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="IIV Logo"
            className="iiv-logo"
          />
          <h2>ТАҲЛИЛИЙ ПАНЕЛЬ</h2>
          <div
            className="glass-card"
            style={{ width: "100%", maxWidth: "1000px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Киберхавфлар турлари"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                  }}
                />
                <h4>Киберхавфлар турлари</h4>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Кунлик ҳодисалар"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                  }}
                />
                <h4>Кунлик ҳодисалар</h4>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Хавфсизлик даражаси"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                  }}
                />
                <h4>Хавфсизлик даражаси</h4>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Тизим ишлаши"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                  }}
                />
                <h4>Тизим ишлаши</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 7: Келажак хавфсизлиги */}
        <div className={`slide ${currentSlide === 6 ? "active" : ""}`}>
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="IIV Logo"
            className="iiv-logo"
          />
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              🚀 КЕЛАЖАК ХАВФСИЗЛИГИ
            </h1>
            <p style={{ marginBottom: "2rem", fontSize: "1.2rem" }}>
              Чилонзор тумани учун инновацион киберхавфсизлик тизими
            </p>

            <div className="future-features">
              <div className="future-feature">
                <div className="future-feature-icon">🧠</div>
                <div className="future-feature-title">Сунъий интеллект</div>
                <div className="future-feature-desc">
                  Замонавий AI технологиялари билан хавфларни олдиндан аниқлаш
                </div>
              </div>

              <div className="future-feature">
                <div className="future-feature-icon">🛡️</div>
                <div className="future-feature-title">Кибер мудофаа</div>
                <div className="future-feature-desc">
                  24/7 автоматик киберхавфлардан ҳимоя тизими
                </div>
              </div>

              <div className="future-feature">
                <div className="future-feature-icon">📈</div>
                <div className="future-feature-title">Прогноз таҳлили</div>
                <div className="future-feature-desc">
                  Хавфсизлик ҳодисаларини олдиндан кўра билиш имконияти
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 8: Дашборд кириш */}
        <div
          className={`slide ${currentSlide === 7 ? "active" : ""}`}
          style={{ padding: 0 }}
        >
          <div className="carousel-container">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${
                  index === carouselIndex ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          <div className="entry-overlay">
            <div className="entry-card">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="IIV Logo"
                className="entry-logo"
              />
              <h2 className="entry-title">ЧИЛОНЗОР ТУМАНИ МОНИТОРИНГ ТИЗИМИ</h2>
              <p className="entry-description">
                Киберхавфсизлик ва жамоат хавфсизлигини мониторинг қилиш тизими
              </p>
              <div className="entry-stats">
                <div className="entry-stat">
                  <div className="stat-icon">🛡️</div>
                  <div className="stat-text">99.9% Хавфсизлик</div>
                </div>
                <div className="entry-stat">
                  <div className="stat-icon">🕐</div>
                  <div className="stat-text">24/7 Мониторинг</div>
                </div>
                <div className="entry-stat">
                  <div className="stat-icon">👥</div>
                  <div className="stat-text">276,700 Аҳоли</div>
                </div>
              </div>
              <button className="entry-btn" onClick={handleEnterDashboard}>
                <span>ТИЗИМГА КИРИШ</span>
                <span>🔐</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
