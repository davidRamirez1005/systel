<template>
  <div class="infrastructure-page">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <el-icon :size="64" class="hero-icon">
          <Monitor />
        </el-icon>
        <h1>Infraestructura de TI</h1>
        <p class="hero-description">
          Diseño, implementación y gestión de infraestructura tecnológica escalable y confiable para
          su organización
        </p>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>Nuestras Soluciones de Infraestructura</h2>
          <p>Tecnología robusta para su crecimiento empresarial</p>
        </div>

        <div class="services-grid">
          <CardBasic
            title="Servidores de Aplicaciones"
            description="Servidores de aplicaciones de las marcas HP, LENOVO y DELL, diseñados para soportar las cargas de trabajo más exigentes de su organización."
            :icon="Monitor"
            icon-position="top"
          />

          <CardBasic
            title="Soluciones HPC"
            description="Soluciones de High Performance Computing (HPC) con CRAY SuperComputer y Supermicro para procesamiento de alto rendimiento y cálculos complejos."
            :icon="Cpu"
            icon-position="top"
          />

          <CardBasic
            title="Virtualización"
            description="Virtualización con diversos Hypervisores para optimización de recursos, escalabilidad y gestión eficiente de infraestructura."
            :icon="Grid"
            icon-position="top"
          />

          <CardBasic
            title="Almacenamiento Externo"
            description="Soluciones de almacenamiento externo como NAS y SAN. Soporte de almacenamiento inmutable para máxima protección de datos."
            :icon="Coin"
            icon-position="top"
          />

          <CardBasic
            title="Alta Disponibilidad"
            description="Implementación de servidores y almacenamiento en escenarios de alta disponibilidad para garantizar continuidad operacional 24/7."
            :icon="Platform"
            icon-position="top"
          />

          <CardBasic
            title="Diseño de Data Center"
            description="Diseño e implementación de data center completo, incluyendo todos los componentes de infraestructura física y lógica."
            :icon="DataAnalysis"
            icon-position="top"
          />

          <CardBasic
            title="Soluciones de Backup"
            description="Soluciones de backup para cumplir con la estrategia 3-2-1-1, garantizando múltiples copias de seguridad en diferentes ubicaciones."
            :icon="FolderOpened"
            icon-position="top"
          />

          <CardBasic
            title="Contingencias para Servidores"
            description="Implementación de contingencias para servidores con creación y recuperación en máquinas virtuales a partir del último backup."
            :icon="CircleCheck"
            icon-position="top"
          />

          <CardBasic
            title="Vigilancia y Monitoreo"
            description="Soluciones de vigilancia y monitoreo con cámaras IP, análogas e híbridas, y sus respectivos centros de control con cobertura de varios kilómetros."
            :icon="View"
            icon-position="top"
          />

          <CardBasic
            title="Control de Acceso"
            description="Sistemas de control de acceso especializado para Data Center, garantizando seguridad física y trazabilidad de ingresos."
            :icon="Key"
            icon-position="top"
          />

          <CardBasic
            title="Detección y Extinción de Incendios"
            description="Sistemas avanzados de detección y extinción de incendios para protección integral de su infraestructura crítica."
            :icon="Warning"
            icon-position="top"
          />

          <CardBasic
            title="Aires Acondicionados de Precisión"
            description="Aires acondicionados de precisión para data center, manteniendo temperatura y humedad óptimas para equipos críticos."
            :icon="WindPower"
            icon-position="top"
          />
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content">
        <div class="card-image-wrapper" style="width: 40%; margin: 0 auto">
          <img src="@/assets/img/pag 6 servicios 2.png" alt="Misión" class="card-image" />
        </div>
        <h2>¿Necesita optimizar su infraestructura?</h2>
        <p>
          Contáctenos para una evaluación personalizada de sus necesidades de infraestructura
          tecnológica
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
  Monitor,
  Cpu,
  Grid,
  Coin,
  Platform,
  DataAnalysis,
  FolderOpened,
  CircleCheck,
  View,
  Key,
  Warning,
  WindPower,
} from "@element-plus/icons-vue"
</script>

<style scoped>
.infrastructure-page {
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
  background-image: url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070");
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
  .hero-section {
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
  }

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
  .hero-section {
    min-height: 50vh;
  }

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
