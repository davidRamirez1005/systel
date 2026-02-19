<template>
  <div class="networking-page">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <el-icon :size="64" class="hero-icon">
          <Connection />
        </el-icon>
        <h1>NETWORKING</h1>
        <p class="hero-description">
          Soluciones integrales de redes, conectividad y comunicaciones para mantener su
          organización conectada y productiva
        </p>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>Nuestros Servicios de Redes</h2>
          <p>Conectividad confiable para su empresa</p>
        </div>

        <div class="services-grid">
          <CardBasic
            title="Soluciones LAN"
            description="Redes de Área Local tanto en parte activa (switch y elementos de red) como pasiva (cableado estructurado) para conectividad óptima."
            :icon="Share"
            icon-position="top"
          />

          <CardBasic
            title="Conectividad WAN / LAN / MAN / WiFi"
            description="Conectividad entre sedes y dispositivos para redes de área amplia, local, metropolitana e inalámbricas."
            :icon="Connection"
            icon-position="top"
          />

          <CardBasic
            title="Cableado Estructurado"
            description="Diseño e instalación de redes de cableado estructurado, certificación de puntos y organización de centros de cableado."
            :icon="Memo"
            icon-position="top"
          />

          <CardBasic
            title="Voz sobre IP"
            description="Voz sobre IP e implementación de plantas telefónicas IP con appliances especializados, que incluyen call center y permiten campañas."
            :icon="Phone"
            icon-position="top"
          />

          <CardBasic
            title="Comunicaciones Inalámbricas"
            description="Dispositivos para comunicaciones inalámbricas fijas y móviles, garantizando conectividad en cualquier lugar."
            :icon="Cellphone"
            icon-position="top"
          />

          <CardBasic
            title="Soluciones WiFi de Última Generación"
            description="Soluciones WiFi de última generación con controladoras en sitio o en la nube para gestión centralizada y cobertura óptima."
            :icon="Histogram"
            icon-position="top"
          />

          <CardBasic
            title="Sistemas de Vigilancia Inteligente"
            description="Sistemas de cámaras de vigilancia con analítica de video incluida y cobertura hasta de varios kilómetros."
            :icon="VideoCamera"
            icon-position="top"
          />
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content">
        <h2>¿Necesita mejorar su conectividad?</h2>
        <p>
          Contáctenos para una evaluación personalizada de sus necesidades de redes y comunicaciones
        </p>
        <el-button type="primary" size="large" @click="$router.push('/#contact')">
          Solicitar Consulta
        </el-button>
      </div>
    </section>
  </div>
</template>

<script setup>
import CardBasic from "@/components/ui/CardBasic.vue"
import {
  Share,
  Connection,
  Memo,
  Phone,
  Cellphone,
  Histogram,
  VideoCamera,
} from "@element-plus/icons-vue"
</script>

<style scoped>
/* Hero Section with Background Image */
.hero-section {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.networking-page {
  width: 100%;
  background-color: var(--app-bg-primary);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
}

html.dark .hero-overlay {
  background: rgba(0, 0, 0, 0.85);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #ffffff;
  padding: 3rem 1.5rem;
  max-width: 900px;
}

.hero-icon {
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto;
}

.services-section {
  padding: 5rem 1.5rem;
  background-color: var(--app-bg-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--app-text-primary);
}

.section-header p {
  font-size: 1.125rem;
  color: var(--app-text-secondary);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

/* CTA Section */
.cta-section {
  padding: 4rem 1.5rem;
  background-color: var(--app-bg-secondary);
  border-top: 1px solid var(--el-border-color);
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.cta-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--app-text-primary);
}

.cta-content p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--app-text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .cta-content h2 {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.75rem;
  }

  .services-section {
    padding: 3rem 1rem;
  }

  .service-item {
    padding: 1.5rem;
  }
}
</style>
