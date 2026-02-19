<template>
  <div>
    <section id="productos" class="products-section">
      <div class="max-w-6xl mx-auto px-6 py-20 products-padding">
        <div class="text-center mb-16 products-header">
          <h2 class="text-4xl font-bold mb-4">Productos/Servicios</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">Tecnología y telecomunicaciones</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <!-- Seguridad Informática -->
          <div class="product-card" @click="navigateToProduct('Security')">
            <div class="product-content">
              <div class="icon-wrapper">
                <el-icon :size="56" color="#409EFF">
                  <Lock />
                </el-icon>
              </div>
              <h3 class="product-title">Seguridad Informática</h3>
              <p class="product-description">Protección integral de sistemas y datos</p>
              <div class="product-action">
                <span class="product-link">Ver más</span>
                <el-icon class="arrow-icon">
                  <ArrowRight />
                </el-icon>
              </div>
            </div>
          </div>

          <!-- Infraestructura de TI -->
          <div class="product-card" @click="navigateToProduct('Infrastructure')">
            <div class="product-content">
              <div class="icon-wrapper">
                <el-icon :size="56" color="#67C23A">
                  <Monitor />
                </el-icon>
              </div>
              <h3 class="product-title">Infraestructura de TI</h3>
              <p class="product-description">Diseño e implementación de redes</p>
              <div class="product-action">
                <span class="product-link">Ver más</span>
                <el-icon class="arrow-icon">
                  <ArrowRight />
                </el-icon>
              </div>
            </div>
          </div>

          <!-- Networking -->
          <div class="product-card" @click="navigateToProduct('Networking')">
            <div class="product-content">
              <div class="icon-wrapper">
                <el-icon :size="56" color="#E6A23C">
                  <Connection />
                </el-icon>
              </div>
              <h3 class="product-title">Networking</h3>
              <p class="product-description">Soluciones de conectividad y redes</p>
              <div class="product-action">
                <span class="product-link">Ver más</span>
                <el-icon class="arrow-icon">
                  <ArrowRight />
                </el-icon>
              </div>
            </div>
          </div>

          <!-- Control de Acceso -->
          <div class="product-card" @click="navigateToProduct('AccessControl')">
            <div class="product-content">
              <div class="icon-wrapper">
                <el-icon :size="56" color="#F56C6C">
                  <Key />
                </el-icon>
              </div>
              <h3 class="product-title">Control de Acceso</h3>
              <p class="product-description">Sistemas de seguridad física</p>
              <div class="product-action">
                <span class="product-link">Ver más</span>
                <el-icon class="arrow-icon">
                  <ArrowRight />
                </el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="servicios" class="services-section">
      <div class="max-w-6xl mx-auto px-6 py-20 services-padding">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Consultorías -->
          <div class="service-item" @click="openModal('consultancy')">
            <div class="service-icon-container">
              <el-icon :size="72" color="#409EFF">
                <DocumentChecked />
              </el-icon>
            </div>
            <h3 class="service-item-title">Consultorías</h3>
            <p class="service-item-description">
              Asesoría experta en tecnología y transformación digital
            </p>
            <div class="service-action">
              <span class="service-link">Ver más</span>
              <el-icon class="arrow-icon">
                <ArrowRight />
              </el-icon>
            </div>
          </div>

          <!-- Capacitaciones -->
          <div class="service-item" @click="openModal('training')">
            <div class="service-icon-container">
              <el-icon :size="72" color="#67C23A">
                <Reading />
              </el-icon>
            </div>
            <h3 class="service-item-title">Capacitaciones</h3>
            <p class="service-item-description">
              Formación técnica personalizada para su equipo de trabajo
            </p>
            <div class="service-action">
              <span class="service-link">Ver más</span>
              <el-icon class="arrow-icon">
                <ArrowRight />
              </el-icon>
            </div>
          </div>

          <!-- Soporte Técnico -->
          <div class="service-item" @click="openModal('support')">
            <div class="service-icon-container">
              <el-icon :size="72" color="#E6A23C">
                <Tools />
              </el-icon>
            </div>
            <h3 class="service-item-title">Soporte Técnico</h3>
            <p class="service-item-description">
              Asistencia técnica profesional cuando más lo necesita
            </p>
            <div class="service-action">
              <span class="service-link">Ver más</span>
              <el-icon class="arrow-icon">
                <ArrowRight />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modals -->
    <el-dialog
      v-model="modals.consultancy"
      title="Consultorías"
      width="90%"
      :style="{ maxWidth: '800px' }"
      center
    >
      <div class="modal-content">
        <div class="modal-header-icon">
          <el-icon :size="60" color="#409EFF">
            <DocumentChecked />
          </el-icon>
        </div>
        <h3 class="modal-subtitle bg-primary">Servicios de Consultoría</h3>
        <p class="modal-description">
          Ofrecemos análisis detallado y recomendaciones basadas en las mejores prácticas de la
          industria.
        </p>
        <div class="modal-features">
          <div class="feature-row">
            <el-icon color="#409EFF" :size="20"><Check /></el-icon>
            <span>Estudios de Site Survey.para dimensionamiento de soluciones Wifi.</span>
          </div>
          <div class="feature-row">
            <el-icon color="#409EFF" :size="20"><Check /></el-icon>
            <span>Consultoria para Diseño de Data center</span>
          </div>
          <div class="feature-row">
            <el-icon color="#409EFF" :size="20"><Check /></el-icon>
            <span>Consultorías en Seguridad Informática y Auditorias</span>
          </div>
          <div class="feature-row">
            <el-icon color="#409EFF" :size="20"><Check /></el-icon>
            <span>Ethical hacking</span>
          </div>
          <div class="feature-row">
            <el-icon color="#409EFF" :size="20"><Check /></el-icon>
            <span>Consultorias en programa de protección de datos personales</span>
          </div>
          <div class="feature-row">
            <el-icon color="#409EFF" :size="20"><Check /></el-icon>
            <span>Consutorías para valoración, monitoreo y afinamiento de redes LAN/WAN</span>
          </div>
          <div class="feature-row">
            <el-icon color="#409EFF" :size="20"><Check /></el-icon>
            <span
              >Consultorías en DR ( disaster Reconvery), BCP ( Business Continuity Plannig).</span
            >
          </div>
          <div class="feature-row">
            <el-icon color="#409EFF" :size="20"><Check /></el-icon>
            <span
              >Consultorías para valoración de infraestructuras informáticas y de
              telecomunicaciones.
            </span>
          </div>
          <div class="feature-row">
            <el-icon color="#409EFF" :size="20"><Check /></el-icon>
            <span>Consultorias para afinamiento de bases de Datos.</span>
          </div>
        </div>
      </div>
      <template #footer>
        <el-button @click="modals.consultancy = false">Cerrar</el-button>
      </template>
    </el-dialog>

    <el-dialog
      v-model="modals.training"
      title="Capacitaciones"
      width="90%"
      :style="{ maxWidth: '800px' }"
      center
    >
      <div class="modal-content">
        <div class="modal-header-icon">
          <el-icon :size="60" color="#67C23A">
            <Reading />
          </el-icon>
        </div>
        <h3 class="modal-subtitle bg-primary">Programas de Capacitación</h3>
        <p class="modal-description">
          Nuestros programas están diseñados para adaptarse a las necesidades específicas de su
          empresa.
        </p>

        <div class="modal-features">
          <div class="feature-row">
            <el-icon color="#67C23A" :size="20"><Check /></el-icon>
            <span>Seguridad informática</span>
          </div>
          <div class="feature-row">
            <el-icon color="#67C23A" :size="20"><Check /></el-icon>
            <span>Sistemas Operativos LINUX/unix </span>
          </div>
          <div class="feature-row">
            <el-icon color="#67C23A" :size="20"><Check /></el-icon>
            <span>SQL Server, monitoreo de BD y reportes</span>
          </div>
          <div class="feature-row">
            <el-icon color="#67C23A" :size="20"><Check /></el-icon>
            <span>Oracle , monitoreo de BD y reportes</span>
          </div>
          <div class="feature-row">
            <el-icon color="#67C23A" :size="20"><Check /></el-icon>
            <span>Administración y operación de data center</span>
          </div>
          <div class="feature-row">
            <el-icon color="#67C23A" :size="20"><Check /></el-icon>
            <span>Administración y operación de redes LAN</span>
          </div>
          <div class="feature-row">
            <el-icon color="#67C23A" :size="20"><Check /></el-icon>
            <span>Administración de Firewall</span>
          </div>
        </div>
      </div>
      <template #footer>
        <el-button @click="modals.training = false">Cerrar</el-button>
      </template>
    </el-dialog>

    <el-dialog
      v-model="modals.support"
      title="Soporte Técnico"
      width="90%"
      :style="{ maxWidth: '800px' }"
      center
    >
      <div class="modal-content">
        <div class="modal-header-icon">
          <el-icon :size="60" color="#E6A23C">
            <Tools />
          </el-icon>
        </div>
        <h3 class="modal-subtitle bg-primary">Servicios de Soporte</h3>
        <p class="modal-description">
          Mantenga su infraestructura tecnológica funcionando de manera óptima con nuestros
          servicios de soporte técnico. Ofrecemos diferentes niveles de servicio adaptados a sus
          necesidades.
        </p>

        <div class="modal-features">
          <div class="feature-row">
            <el-icon color="#E6A23C" :size="20"><Check /></el-icon>
            <span>Servicios de soporte técnico en ambientes Windows, Linux, y otros</span>
          </div>
          <div class="feature-row">
            <el-icon color="#E6A23C" :size="20"><Check /></el-icon>
            <span>Mantenimiento físico y lógico de servidores, preventivo y correctivo</span>
          </div>
          <div class="feature-row">
            <el-icon color="#E6A23C" :size="20"><Check /></el-icon>
            <span
              >Soporte y afinamiento de servidores con diferentes sistemas operativos,instalación y
              migración de bases de datos</span
            >
          </div>
          <div class="feature-row">
            <el-icon color="#E6A23C" :size="20"><Check /></el-icon>
            <span>Firewall </span>
          </div>
          <div class="feature-row">
            <el-icon color="#E6A23C" :size="20"><Check /></el-icon>
            <span>Dispositivos de red</span>
          </div>
        </div>
      </div>
      <template #footer>
        <el-button @click="modals.support = false">Cerrar</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import {
  Lock,
  Monitor,
  Connection,
  Key,
  VideoCamera,
  DocumentChecked,
  Reading,
  Tools,
  ArrowRight,
  Check,
} from "@element-plus/icons-vue"
import { useServiceModals } from "@/composables/useServiceModals"

const router = useRouter()
const { modals, openModal: openServiceModal } = useServiceModals()

const navigateToProduct = (productName) => {
  router.push({ name: productName })
}

const openModal = (modalName) => {
  openServiceModal(modalName)
}

const handleContact = () => {
  modals.value = {
    consultancy: false,
    training: false,
    support: false,
  }
  router.push("/#contact")
}
</script>

<style scoped>
.product-card {
  background: var(--app-bg-secondary);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.dark .product-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.dark .product-card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
}

.product-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.icon-wrapper {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.product-card:hover .icon-wrapper {
  transform: scale(1.1);
}

.product-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--app-text-primary);
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark .product-title {
  color: var(--app-text-primary);
}

.product-description {
  font-size: 0.875rem;
  color: var(--app-text-secondary);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.dark .product-description {
  color: #94a3b8;
}

.product-action {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #409eff;
  font-weight: 600;
  margin-top: auto;
  padding-top: 0.5rem;
  transition: gap 0.3s ease;
}

.product-card:hover .product-action {
  gap: 0.75rem;
}

.product-link {
  font-size: 0.9rem;
}

.product-card:hover .arrow-icon {
  transform: translateX(4px);
}

/* Responsive adjustments */
@media (max-width: 1280px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    padding: 1.5rem 1rem;
  }

  .product-title {
    font-size: 1.125rem;
  }

  .products-padding {
    padding-top: 3.5rem !important;
    padding-bottom: 2.5rem !important;
  }

  .products-header {
    margin-bottom: 2rem !important;
  }
}

.services-section {
  border-top: 1px solid #e5e7eb;
}

.dark .services-section {
  border-top: 1px solid #334155;
}

.service-item {
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 3rem 2rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.dark .service-item {
  border-color: var(--app-bg-secondary);
}

.service-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #409eff 0%, #116078 50%, #91ecfa 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-item:hover::before {
  transform: scaleX(1);
}

.service-item:hover {
  transform: translateY(-12px);
  border-color: #409eff;
  box-shadow: 0 20px 40px rgba(64, 158, 255, 0.15);
}

.dark .service-item:hover {
  border-color: #409eff;
  box-shadow: 0 20px 40px rgba(64, 158, 255, 0.3);
}

.service-icon-container {
  margin-bottom: 1.5rem;
  transition: transform 0.4s ease;
}

.service-item:hover .service-icon-container {
  transform: scale(1.15) rotate(5deg);
}

.service-item-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
}

.dark .service-item-title {
  color: var(--app-text-primary);
}

.service-item-description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
  min-height: 3rem;
}

.dark .service-item-description {
  color: #94a3b8;
}

.service-action {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #409eff;
  font-weight: 600;
  transition: gap 0.3s ease;
}

.service-item:hover .service-action {
  gap: 1rem;
}

.service-link {
  font-size: 1rem;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.service-item:hover .arrow-icon {
  transform: translateX(4px);
}

/* Modal Styles */
.modal-content {
  padding: 1rem 0;
}

.modal-header-icon {
  text-align: center;
  margin-bottom: 1.5rem;
}

.modal-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.dark .modal-subtitle {
  color: var(--app-text-primary);
}

.modal-description {
  font-size: 1rem;
  color: var(--app-text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.dark .modal-description {
  color: var(--app-text-secondary);
}

.modal-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--app-bg-secondary);
  border-radius: 8px;
  transition: background 0.2s ease;
}

.dark .feature-row {
  background: var(--app-bg-secondary);
}

.feature-row:hover {
  background: var(--app-bg-hover);
}

.dark .feature-row:hover {
  background: #334155;
}

.feature-row span {
  font-size: 0.95rem;
  color: #374151;
}

.dark .feature-row span {
  color: var(--app-text-secondary);
}

/* Responsive for services */
@media (max-width: 768px) {
  .service-item {
    padding: 2rem 1.5rem;
  }

  .service-item-title {
    font-size: 1.5rem;
  }

  .service-item-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 640px) {
  .services-section .grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-item {
    padding: 1.75rem 1.25rem;
  }

  .services-padding {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }
}
</style>
