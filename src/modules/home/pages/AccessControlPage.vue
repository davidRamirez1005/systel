<template>
  <div class="access-control-page">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <el-icon :size="64" class="hero-icon">
          <Key />
        </el-icon>
        <h1>Control de Acceso y Audiovisuales</h1>
        <p class="hero-description">
          Soluciones integrales de control de acceso, seguridad física y tecnología audiovisual para
          su organización
        </p>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>Nuestras Soluciones</h2>
          <p>Seguridad y tecnología audiovisual de vanguardia</p>
        </div>

        <div class="services-grid">
          <CardBasic
            title="Control de Acceso Peatonal y Vehicular"
            description="Sistemas de control de acceso peatonal y vehicular, y soluciones especializadas para sector construcción, conjuntos residenciales y empresas. Se ofrecen opciones con reconocimiento facial."
            :icon="User"
            icon-position="top"
          />

          <CardBasic
            title="Control de Acceso Educativo"
            description="Sistemas de control de acceso y soluciones especializadas para sector educación, incluyendo control a salas especializadas según horarios e integración con tarjetas multiservicio para uso con transporte masivo. Incluye reconocimiento facial."
            :icon="School"
            icon-position="top"
          />

          <CardBasic
            title="Videoconferencia y Streaming"
            description="Soluciones de videoconferencia y publicación de streaming de video en la web para comunicación efectiva y alcance global."
            :icon="VideoCamera"
            icon-position="top"
          />

          <CardBasic
            title="Auditorios y Salas de Juntas"
            description="Dispositivos para adecuación de auditorios y salas de juntas con las tecnologías de punta, que provean servicios importantes para las empresas."
            :icon="Microphone"
            icon-position="top"
          />

          <CardBasic
            title="Carteleras Digitales y VideoWall"
            description="Carteleras digitales que combinan señal de TV con salida informativa. Monitores industriales para VideoWall de alta resolución."
            :icon="Monitor"
            icon-position="top"
          />

          <CardBasic
            title="Sistemas Digiturno"
            description="Sistemas Digiturno para gestión inteligente de filas y optimización de atención al cliente."
            :icon="Tickets"
            icon-position="top"
          />

          <CardBasic
            title="PCs, NUC y Monitores"
            description="PCs, NUC, monitores y partes para equipos de cómputo de última generación."
            :icon="Cpu"
            icon-position="top"
          />

          <CardBasic
            title="TV y Sistemas de VideoWall"
            description="TV de varias marcas (LG, Samsung, Panasonic, etc.) y sistemas de videowall para visualización impactante."
            :icon="Platform"
            icon-position="top"
          />

          <CardBasic
            title="Proyectores y Atriles Inteligentes"
            description="Proyectores (VideoBeam) de alta definición y atriles inteligentes para presentaciones profesionales."
            :icon="Reading"
            icon-position="top"
          />

          <CardBasic
            title="Pantallas LED de Gran Formato"
            description="VideoWall o pantallas LED de gran formato para centros de control, monitoreo y visualización de alto impacto."
            :icon="Grid"
            icon-position="top"
          />
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content">
        <h2>¿Necesita mejorar su seguridad o tecnología audiovisual?</h2>
        <p>
          Contáctenos para una evaluación personalizada de sus necesidades de control de acceso y
          audiovisuales
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
  Key,
  User,
  School,
  VideoCamera,
  Microphone,
  Monitor,
  Tickets,
  Cpu,
  Platform,
  Reading,
  Grid,
} from "@element-plus/icons-vue"
</script>

<style scoped>
.access-control-page {
  width: 100%;
  background-color: var(--app-bg-primary);
}

/* Hero Section with Background Image */
.hero-section {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
