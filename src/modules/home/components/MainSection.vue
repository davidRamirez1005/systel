<template>
  <div>
    <section class="hero-section-main">
      <div class="max-w-6xl mx-auto text-center px-8">
        <h1 class="hero-title mb-6">
          Soluciones en Tecnología y Telecomunicaciones.
          <span class="text-blue-400">Calidad en nuestros servicios</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Soluciones eficientes y escalables en ambientes tradicionales y de telecomunicaciones, con
          respaldo técnico y compromiso de calidad.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <el-button type="primary" size="large" @click="scrollToContact"> Contactanos </el-button>
          <el-button size="large" @click="scrollToServices"> Conocer servicios </el-button>
        </div>
      </div>
    </section>

    <section id="perfil" class="services-section dark:bg-gray-100">
      <div class="max-w-6xl mx-auto px-6 py-20 section-padding">
        <div class="text-center mb-16 section-header">
          <h2 class="text-4xl font-bold mb-4 perfil">Perfil empresarial</h2>
        </div>

        <div class="grid md:grid-cols-2 rounded gap-8">
          <el-card class="service-card" shadow="hover">
            <div class="card-image-wrapper">
              <img
                src="@/assets/img/imagen pagina inicio .jpg"
                alt="Misión"
                class="card-image img-mision"
              />
            </div>
            <div class="text-center">
              <div class="icon-container mb-4">
                <el-icon :size="48" color="#409EFF">
                  <Monitor />
                </el-icon>
              </div>
              <h3 class="text-2xl font-semibold mb-3">Misión</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Ofrecer integración entre las soluciones planteadas a nuestros clientes y apoyo
                técnico, que le impriman a nuestra empresa un valor agregado poco contemplado en
                nuestro mercado, enmarcados dentro los mejores estándares de calidad, confiabilidad
                y servicio.
              </p>
            </div>
          </el-card>

          <el-card class="service-card" shadow="hover">
            <div class="card-image-wrapper">
              <img src="@/assets/img/pag 3 vision y mision.png" alt="Visión" class="card-image" />
            </div>
            <div class="text-center">
              <div class="icon-container mb-4">
                <el-icon :size="48" color="#E6A23C">
                  <Reading />
                </el-icon>
              </div>
              <h3 class="text-2xl font-semibold mb-3">Visión</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Ser empresa líder de la región y expandirnos a nivel nacional, como integradores en
                el mercado de soluciones informáticas y de telecomunicaciones con personal humano
                profesional para ofrecer a sus clientes las mejores opciones, contribuyendo al
                crecimiento de esta, de su personal y del país.
              </p>
            </div>
          </el-card>
        </div>
      </div>
    </section>

    <section class="relative z-10 overflow-hidden bg-gray-500 py-16 px-8">
      <div class="container">
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="w-full px-4">
            <div class="text-center lg:text-left">
              <div>
                <h3
                  class="mt-2 mb-3 text-1xl font-bold leading-tight sm:text-2xl sm:leading-tight md:text-[25px] md:leading-tight text-white"
                >
                  Nos encontramos en la ciudad de Bucaramanga, y ocupamos un lugar privilegiado en
                  servicios y soluciones en el área de Networking, servidores, almacenamiento,
                  infraestructura para datacenter, seguridad informática y consultorías.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="absolute top-0 right-0 -z-10">
        <svg
          width="388"
          height="250"
          viewBox="0 0 388 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
            fill="url(#paint0_linear_971_6910)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_971_6910"
              x1="60.5"
              y1="111"
              x2="287"
              y2="111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.520507" stop-color="white"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs></svg></span
      ><span class="absolute top-0 right-0 -z-10"
        ><svg
          width="324"
          height="250"
          viewBox="0 0 324 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
            fill="url(#paint0_linear_971_6911)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_971_6911"
              x1="60.5"
              y1="111"
              x2="287"
              y2="111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.520507" stop-color="white"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs></svg></span
      ><span class="absolute top-4 left-4 -z-10"
        ><svg
          width="43"
          height="56"
          viewBox="0 0 43 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle
              cx="40.9984"
              cy="1.49626"
              r="1.49626"
              transform="rotate(90 40.9984 1.49626)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="1.49626"
              r="1.49626"
              transform="rotate(90 27.8304 1.49626)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="1.49626"
              r="1.49626"
              transform="rotate(90 14.6644 1.49626)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="1.49626"
              r="1.49626"
              transform="rotate(90 1.49642 1.49626)"
              fill="white"
            ></circle>
            <circle
              cx="40.9984"
              cy="14.6642"
              r="1.49626"
              transform="rotate(90 40.9984 14.6642)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="14.6642"
              r="1.49626"
              transform="rotate(90 27.8304 14.6642)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="14.6642"
              r="1.49626"
              transform="rotate(90 14.6644 14.6642)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="14.6642"
              r="1.49626"
              transform="rotate(90 1.49642 14.6642)"
              fill="white"
            ></circle>
            <circle
              cx="40.9984"
              cy="27.8302"
              r="1.49626"
              transform="rotate(90 40.9984 27.8302)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="27.8302"
              r="1.49626"
              transform="rotate(90 27.8304 27.8302)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="27.8302"
              r="1.49626"
              transform="rotate(90 14.6644 27.8302)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="27.8302"
              r="1.49626"
              transform="rotate(90 1.49642 27.8302)"
              fill="white"
            ></circle>
            <circle
              cx="40.9984"
              cy="40.9982"
              r="1.49626"
              transform="rotate(90 40.9984 40.9982)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="40.9963"
              r="1.49626"
              transform="rotate(90 27.8304 40.9963)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="40.9982"
              r="1.49626"
              transform="rotate(90 14.6644 40.9982)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="40.9963"
              r="1.49626"
              transform="rotate(90 1.49642 40.9963)"
              fill="white"
            ></circle>
            <circle
              cx="40.9984"
              cy="54.1642"
              r="1.49626"
              transform="rotate(90 40.9984 54.1642)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="54.1642"
              r="1.49626"
              transform="rotate(90 27.8304 54.1642)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="54.1642"
              r="1.49626"
              transform="rotate(90 14.6644 54.1642)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="54.1642"
              r="1.49626"
              transform="rotate(90 1.49642 54.1642)"
              fill="white"
            ></circle>
          </g>
        </svg>
      </span>
    </section>
  </div>
</template>

<script setup>
import { Monitor, Reading } from "@element-plus/icons-vue"

const scrollToServices = () => {
  document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })
}

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}
</script>

<style scoped>
.landing-container {
  width: 100%;
}

.hero-section-main {
  min-height: 45vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--app-bg-primary) 0%, var(--app-bg-secondary) 100%);
  padding: 2rem 0;
}

.hero-image-container {
  max-width: 700px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: scale(1.02);
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  color: var(--app-text-primary);
}

.card-image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.img-mision {
  transform: scale(1.3);
  object-position: center;
}

.service-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
}

.service-card:hover .card-image {
  transform: scale(1.1);
}

.service-card:hover .img-mision {
  transform: scale(1.4);
}

.dark .services-section {
  background-color: var(--app-bg-third);
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-item {
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background-color: var(--app-bg-secondary);
}

.tech-tag {
  font-size: 16px;
  padding: 12px 20px;
}

.contact-card {
  text-align: left;
}

.contact-form {
  margin-top: 20px;
}

.footer a {
  text-decoration: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-section-main p {
    font-size: 1.125rem;
  }

  .hero-image-container {
    margin-bottom: 2rem;
  }

  .card-image-wrapper {
    height: 180px;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .hero-section-main {
    min-height: 40vh;
    padding: 1.5rem 0;
  }

  .hero-section-main p {
    font-size: 1rem;
  }

  .hero-image-container {
    margin-bottom: 2rem;
  }

  .card-image-wrapper {
    height: 150px;
  }

  .section-padding {
    padding-top: 3.5rem !important;
    padding-bottom: 2.5rem !important;
  }

  .section-header {
    margin-bottom: 2rem !important;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .hero-section-main {
    min-height: 35vh;
  }
}
</style>
