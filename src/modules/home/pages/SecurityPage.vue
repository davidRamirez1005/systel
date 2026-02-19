<template>
  <div class="security-page">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <el-icon :size="64" class="hero-icon">
          <Lock />
        </el-icon>
        <h1>Seguridad Informática</h1>
        <p class="hero-description">
          Protección integral de su infraestructura tecnológica con soluciones avanzadas de
          seguridad informática
        </p>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>Nuestras Soluciones y Servicios</h2>
          <p>Protección integral para su organización</p>
        </div>

        <div class="services-grid">
          <CardBasic
            title="Firewall de Última Generación"
            description="Suite de productos y servicios de las marcas SonicWall y Fortinet, incluyendo firewall de última generación con módulos de seguridad: filtro de contenido, spyware, malware, IPS, control avanzado de aplicaciones, control de ancho de banda, balanceo de cargas, inspección y control de tráfico encriptado (DPI SSL) y Sandboxing."
            :icon="Lock"
            icon-position="top"
          />

          <CardBasic
            title="Prevención de Pérdida de Datos (DLP)"
            description="Soluciones especializadas para proteger información confidencial y prevenir fugas de datos críticos de su organización."
            :icon="Document"
            icon-position="top"
          />

          <CardBasic
            title="Endurecimiento de Seguridad en EndPoints"
            description="Productos especializados para fortalecer la seguridad en estaciones de trabajo y dispositivos finales, reduciendo vectores de ataque."
            :icon="Monitor"
            icon-position="top"
          />

          <CardBasic
            title="Cloud Secure Edge y SASE"
            description="Soluciones modernas de seguridad perimetral en la nube para proteger el acceso remoto y aplicaciones distribuidas."
            :icon="Connection"
            icon-position="top"
          />

          <CardBasic
            title="Seguridad de Correo Electrónico"
            description="Productos de email security y soluciones de correo electrónico certificado. Certificados y plataformas para protección de email."
            :icon="Message"
            icon-position="top"
          />

          <CardBasic
            title="Soluciones de Backup"
            description="Soluciones en disco o Tape (librerías de cintas), incluyendo software de backup y medios de almacenamiento para implementar las mejores prácticas 3-2-1-1. Incluye opciones de backup inmutable."
            :icon="FolderOpened"
            icon-position="top"
          />

          <CardBasic
            title="Cluster de Alta Disponibilidad"
            description="Implementación de cluster de servidores en alta disponibilidad con HyperV y VMware para garantizar continuidad operacional."
            :icon="Platform"
            icon-position="top"
          />

          <CardBasic
            title="Almacenamiento Externo"
            description="Productos de almacenamiento externo para sincronización de carpetas de usuario y réplicas de información. Carpetas tipo WORM para inmutabilidad."
            :icon="Files"
            icon-position="top"
          />

          <CardBasic
            title="Antivirus Corporativo"
            description="Antivirus de diversos fabricantes líderes en la industria para protección empresarial completa."
            :icon="CircleCheck"
            icon-position="top"
          />

          <CardBasic
            title="Monitoreo y Gestión de Redes"
            description="Software especializado para monitoreo y gestión integral de infraestructura de redes."
            :icon="View"
            icon-position="top"
          />

          <CardBasic
            title="Informática Forense"
            description="Software especializado para análisis forense digital e investigación de incidentes de seguridad."
            :icon="Search"
            icon-position="top"
          />

          <CardBasic
            title="Caza de Amenazas"
            description="Software avanzado para búsqueda proactiva y neutralización de amenazas informáticas."
            :icon="Warning"
            icon-position="top"
          />

          <CardBasic
            title="Planes DRP y BCP"
            description="Diseño e implementación de planes de recuperación ante desastres (DRP) y continuidad del negocio (BCP)."
            :icon="Notebook"
            icon-position="top"
          />

          <CardBasic
            title="Consultorías y Auditorías"
            description="Consultorías especializadas en seguridad informática y auditorías de cumplimiento normativo."
            :icon="DocumentChecked"
            icon-position="top"
          />

          <CardBasic
            title="Protección de Datos Personales"
            description="Consultorías en programas de protección de datos personales y cumplimiento con regulaciones de privacidad."
            :icon="DataAnalysis"
            icon-position="top"
          />

          <CardBasic
            title="Capacitaciones"
            description="Programas de capacitación en seguridad informática para fortalecer la cultura de seguridad en su organización."
            :icon="Reading"
            icon-position="top"
          />

          <CardBasic
            title="Certificados Digitales"
            description="Certificados digitales para personas jurídicas y naturales, firma electrónica y autenticación segura."
            :icon="Stamp"
            icon-position="top"
          />

          <CardBasic
            title="VPN / ZTNA"
            description="Implementación de VPN y Zero Trust Network Access (ZTNA) para acceso remoto seguro y control de acceso granular."
            :icon="Key"
            icon-position="top"
          />
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content">
        <h2>¿Necesita proteger su infraestructura?</h2>
        <p>
          Contáctenos para una consultoría personalizada y evaluación de sus necesidades de
          seguridad
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
  Lock,
  Document,
  Monitor,
  Connection,
  Message,
  FolderOpened,
  Platform,
  Files,
  CircleCheck,
  View,
  Search,
  Warning,
  Notebook,
  DocumentChecked,
  DataAnalysis,
  Reading,
  Stamp,
  Key,
} from "@element-plus/icons-vue"
</script>

<style scoped>
.security-page {
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
  background-image: url("https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070");
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
  .hero-content {
    padding: 2rem 1rem;
  }

  .hero-content h1 {
    font-size: 1.75rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .services-section {
    padding: 3rem 1rem;
  }

  .service-item {
    padding: 1.5rem;
  }
}
</style>
