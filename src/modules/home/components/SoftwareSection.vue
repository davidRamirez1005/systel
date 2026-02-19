<template>
  <div>
    <section id="software" class="software-section">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Software</h2>
        </div>

        <div class="software-list-container">
          <ul class="software-list">
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content">Antivirus de diversos fabricantes</span>
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content"
                >Productos para endurecimiento de protección en EndPoint</span
              >
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content"
                >Software para inventario, control de aplicaciones, mesa de ayuda, con productos que
                cuentan hasta con 13 procesos ITIL certificados</span
              >
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content"
                >Software para el sector Salud, con todos los módulos con una institución de esta
                área puede requerir, desde nivel 1 hasta nivel 3</span
              >
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content"
                >Solución para control de pago de seguridad social, en empresas que manejan
                contratistas, se integran con los dispositivos de registro o control de acceso</span
              >
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content"
                >Software de backup e imágenes tanto de PCs como servidores en diferentes
                plataformas</span
              >
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content"
                >Software de gestión documental, tanto libre como comercial</span
              >
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content"
                >Certificados digitales para personas jurídicas y naturales, firmado
                electrónico</span
              >
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content"
                >Desmaterialización física de archivo en proyectos de gestión documental</span
              >
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content">Marcas de tiempo para documentos</span>
            </li>
            <li class="software-list-item">
              <span class="list-marker"></span>
              <span class="list-content">Firma Online</span>
            </li>
          </ul>
        </div>

        <!-- Carousel Section -->
        <div class="carousel-section">
          <div class="carousel-container">
            <!-- Row 1 -->
            <div class="carousel-row carousel-row-1">
              <div class="carousel-track">
                <div v-for="n in 3" :key="`r1-${n}`" class="carousel-logos-set">
                  <div class="logo-item">
                    <img
                      src="https://sm.pcmag.com/t/pcmag_au/review/m/mcafee-ant/mcafee-antivirus-plus_qh63.1200.jpg"
                      alt="Partner 1"
                    />
                  </div>
                  <div class="logo-item">
                    <img
                      src="https://i.pinimg.com/originals/2e/53/b6/2e53b699fafccd67c6c6d30cdf3301d9.png"
                      alt="Partner 2"
                      width="150"
                    />
                  </div>
                  <div class="logo-item">
                    <img
                      src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2015/03/panda-logo.jpg"
                      alt="Partner 3"
                    />
                  </div>
                  <div class="logo-item">
                    <img
                      src="https://logospng.org/download/avg-antivirus/avg-512.png"
                      alt="Partner 4"
                    />
                  </div>
                  <div class="logo-item">
                    <img
                      src="https://www.logoshape.com/wp-content/uploads/2025/07/Norton-Logo-Vector_logoshape.png"
                      alt="Partner 5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2 - Different speed -->
            <div class="carousel-row carousel-row-2">
              <div class="carousel-track carousel-track-reverse">
                <div v-for="n in 3" :key="`r2-${n}`" class="carousel-logos-set">
                  <div class="logo-item">
                    <img
                      src="https://logos-world.net/wp-content/uploads/2022/06/Bitdefender-Symbol.png"
                      alt="Partner 6"
                    />
                  </div>
                  <div class="logo-item">
                    <img
                      src="https://opsmatters.com/sites/default/files/logos/invgate-logo.png"
                      alt="Partner 7"
                      width="150"
                    />
                  </div>
                  <div class="logo-item">
                    <img
                      src="https://mms.businesswire.com/media/20240923338384/en/2042532/5/SentinelOne_Logo.jpg"
                      alt="Partner 8"
                      width="150"
                    />
                  </div>
                  <div class="logo-item">
                    <img
                      src="https://nessar.net/wp-content/uploads/2021/03/Ridge-security-banner.jpg"
                      alt="Partner 9"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.software-section {
  background: var(--app-bg-primary);
  position: relative;
}

/* Software List Styles */
.software-list-container {
  max-width: 900px;
  margin: 0 auto 5rem;
  background: var(--app-bg-secondary);
  border-radius: 16px;
  padding: 3rem 2.5rem;
  border: 1px solid var(--el-border-color);
  box-shadow: var(--el-box-shadow-light);
}

.software-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.software-list-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--app-bg-primary);
  border-radius: 8px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.list-marker {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #409eff;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.list-content {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--app-text-primary);
  flex: 1;
}

/* Carousel Section */
.carousel-section {
  margin-top: -1rem;
}

.carousel-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  /* padding: 1rem 0; */
}

.carousel-row {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.carousel-track {
  display: flex;
  gap: 2rem;
  animation: scroll-left 40s linear infinite;
  width: max-content;
}

.carousel-track-reverse {
  animation: scroll-right 35s linear infinite;
}

.carousel-row-1 .carousel-track {
  animation-duration: 40s;
}

.carousel-row-2 .carousel-track {
  animation-duration: 35s;
  animation-delay: -5s;
}

.carousel-row-3 .carousel-track {
  animation-duration: 45s;
  animation-delay: -10s;
}

.carousel-logos-set {
  display: flex;
  gap: 2rem;
}

.logo-item {
  background: var(--app-bg-secondary);
  border: 1px solid var(--el-border-color);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  height: 100px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.logo-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.7);
  transition: filter 0.3s ease;
}

.logo-item:hover img {
  filter: grayscale(0%) opacity(1);
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-33.333%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .software-section {
    padding: 2.5rem 1rem;
  }

  .software-section .text-center {
    margin-bottom: 2.5rem;
  }

  .software-list-container {
    padding: 2rem 1.5rem;
  }

  .software-list {
    gap: 1rem;
  }

  .software-list-item {
    padding: 0.875rem 1rem;
  }

  .list-content {
    font-size: 0.95rem;
  }

  .logo-item {
    min-width: 140px;
    height: 80px;
    padding: 0.75rem 1rem;
  }

  .carousel-track,
  .carousel-track-reverse {
    gap: 1rem;
  }

  .carousel-logos-set {
    gap: 1rem;
  }

  .carousel-container {
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .software-list-container {
    padding: 1.5rem 1rem;
  }

  .software-list-item {
    padding: 0.75rem 0.875rem;
  }

  .list-content {
    font-size: 0.9rem;
  }

  .carousel-row-2 {
    display: none;
  }

  .carousel-track {
    animation-duration: 20s;
  }

  .logo-item {
    min-width: 120px;
    height: 70px;
  }
}
</style>
