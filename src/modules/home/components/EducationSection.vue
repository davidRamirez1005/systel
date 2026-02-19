<template>
  <div>
    <section id="educacion" class="education-section">
      <div class="px-6 py-20 education-padding">
        <div class="text-center mb-16 education-header">
          <h2 class="section-title">Sector Educativo</h2>
        </div>

        <div class="collapse-container">
          <el-collapse v-model="activeName" accordion class="custom-collapse">
            <el-collapse-item name="1" class="collapse-item">
              <template #title>
                <div class="collapse-title-wrapper">
                  <el-icon :size="24" class="collapse-icon" color="#409EFF">
                    <Reading />
                  </el-icon>
                  <span class="collapse-title-text">CONSTRUCTOR PROCTOR</span>
                </div>
              </template>
              <div class="collapse-content">
                <p class="content-paragraph">
                  Plataforma Constructor ofrece un conjunto integral de soluciones de aprendizaje
                  diseñadas para satisfacer las necesidades de entornos corporativos y académicos.
                </p>
                <p class="content-paragraph">
                  Constructor Proctor, ofrece una solución de supervisión en línea impulsada por IA
                  de Constructor Tech, para abordar las necesidades de evaluación e integridad de
                  exámenes.
                </p>
              </div>
            </el-collapse-item>

            <el-collapse-item name="2" class="collapse-item">
              <template #title>
                <div class="collapse-title-wrapper">
                  <el-icon :size="24" class="collapse-icon" color="#67C23A">
                    <Monitor />
                  </el-icon>
                  <span class="collapse-title-text">ISPRING SUITE</span>
                </div>
              </template>
              <div class="collapse-content">
                <p class="content-paragraph">
                  <strong>iSpring Suite Max / iSpring Suite AI:</strong> es la versión más completa
                  y avanzada, con capacidades adicionales de IA, colaboración y recursos creativos.
                  Esta versión ha evolucionado y se ha renombrado oficialmente como iSpring Suite AI
                  con mejoras centradas en inteligencia artificial.
                </p>
                <p class="content-paragraph">
                  Esta herramienta e-learning permite crear rápidamente cursos online y desarrollar
                  las habilidades de los empleados.
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Reading, Monitor } from "@element-plus/icons-vue"

const activeName = ref("")
</script>

<style scoped>
.education-section {
  background: var(--app-bg-primary);
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--app-text-primary);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--app-text-secondary);
}

.collapse-container {
  max-width: 100%;
}

.content-paragraph strong {
  color: #409eff;
  font-weight: 600;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding: 1.25rem;
  background: var(--app-bg-secondary);
  border-radius: 8px;
  border-left: 3px solid #67c23a;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--app-text-primary);
}

.feature-item span {
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .features-list {
    padding: 1rem;
  }

  .feature-item {
    font-size: 0.9rem;
  }
}

@media (max-width: 640px) {
  .education-padding {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }

  .education-header {
    margin-bottom: 2rem !important;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .features-list {
    padding: 0.875rem;
  }
}
</style>
