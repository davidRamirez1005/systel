<template>
  <section id="contact" class="contact-section bg-gray-100">
    <div class="contact-container">
      <div class="contact-header">
        <h2 class="section-title">Información de Contacto</h2>
        <p class="section-subtitle">Estamos aquí para ayudarte</p>
      </div>

      <div class="contact-content">
        <div class="contact-cta">
          <el-button
            type="primary"
            size="large"
            @click="dialogVisible = true"
            :icon="ChatLineRound"
          >
            Enviar Mensaje
          </el-button>
        </div>
        <div class="contact-info">
          <div class="info-item">
            <el-icon :size="24" class="info-icon">
              <User />
            </el-icon>
            <div class="info-text">
              <h3>Gerente</h3>
              <p>Hector Gil Triana</p>
            </div>
          </div>

          <div class="info-item">
            <el-icon :size="24" class="info-icon">
              <Phone />
            </el-icon>
            <div class="info-text">
              <h3>Teléfonos</h3>
              <p>(57) 314 4733374</p>
              <p>Fijo: (57) 7 6511164</p>
            </div>
          </div>

          <div class="info-item">
            <el-icon :size="24" class="info-icon">
              <Message />
            </el-icon>
            <div class="info-text">
              <h3>Email</h3>
              <a href="mailto:hector.gil@systelinformaticos.com.co">
                hector.gil@systelinformaticos.com.co
              </a>
              <a href="mailto:coordinador.comercial@systelinformaticos.com.co">
                coordinador.comercial@systelinformaticos.com.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal con formulario de contacto -->
    <el-dialog
      v-model="dialogVisible"
      title="Formulario de Contacto"
      width="90%"
      class="contact-dialog"
      :close-on-click-modal="false"
    >
      <el-form ref="contactFormRef" :model="contactForm" :rules="rules" label-position="top">
        <el-form-item label="Nombre" prop="name">
          <el-input
            v-model="contactForm.name"
            placeholder="Ingresa tu nombre"
            :prefix-icon="User"
          />
        </el-form-item>

        <el-form-item label="Mensaje" prop="message">
          <el-input
            v-model="contactForm.message"
            type="textarea"
            :rows="6"
            placeholder="Escribe tu mensaje aquí..."
          />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleCancel">Cancelar</el-button>
          <el-button type="primary" @click="handleSubmit" :loading="loading"> Enviar </el-button>
        </div>
      </template>
    </el-dialog>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue"
import { ElMessage } from "element-plus"
import { User, Phone, Message, ChatLineRound } from "@element-plus/icons-vue"
import emailjs from "@emailjs/browser"

const EMAILJS_CONFIG = {
  serviceId: "service_2e89ifr",
  templateId: "template_vy2agmk",
  publicKey: "SoFxK5GOzrdO_KOdt",
}

const dialogVisible = ref(false)
const loading = ref(false)
const contactFormRef = ref(null)

const contactForm = reactive({
  name: "",
  message: "",
})

const rules = {
  name: [
    {
      required: true,
      message: "Por favor ingresa tu nombre",
      trigger: "blur",
    },
  ],
  message: [
    {
      required: true,
      message: "Por favor ingresa un mensaje",
      trigger: "blur",
    },
  ],
}

const handleSubmit = async () => {
  if (!contactFormRef.value) return

  await contactFormRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true

      try {
        await enviarEmail()

        // enviarWhatsApp()

        setTimeout(() => {
          ElMessage.success("¡Mensaje enviado correctamente!")
          loading.value = false
          dialogVisible.value = false
          resetForm()
        }, 1500)
      } catch (error) {
        console.error("Error al enviar el mensaje:", error)
        ElMessage.error("Error al enviar el mensaje. Por favor, intenta nuevamente.")
        loading.value = false
      }
    }
  })
}

const enviarEmail = async () => {
  try {
    const message = `Mensaje desde el sitio web:\n\n${contactForm.message}\n\nEnviado por: ${contactForm.name}`
    const templateParams = {
      to_email: EMAILJS_CONFIG.toEmail,
      from_name: contactForm.name,
      message: message,
      reply_to: EMAILJS_CONFIG.toEmail,
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    return response
  } catch (error) {
    console.error("Error al enviar el email:", error)
    throw error
  }
}

const enviarWhatsApp = () => {
  const mensajeWhatsApp = `Mensaje desde el sitio web: ${contactForm.message} - Enviado por: ${contactForm.name}`
  const numeroTelefono = "3124573483"

  window.open(
    `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensajeWhatsApp)}`,
    "_blank"
  )
}

const handleCancel = () => {
  dialogVisible.value = false
  resetForm()
}

const resetForm = () => {
  contactFormRef.value?.resetFields()
  contactForm.name = ""
  contactForm.message = ""
}
</script>

<style scoped>
.contact-section {
  padding: 60px;
  color: var(--app-text-primary);
}

.dark .contact-section {
  background-color: var(--app-bg-third);
}

.contact-header {
  text-align: center;
  margin-bottom: 20px;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--app-text-primary);
}

.section-subtitle {
  font-size: 1.125rem;
  opacity: 0.9;
  margin: 0;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.info-item {
  display: flex;
  align-items: start;
  gap: 16px;
  padding: 24px;
  background: var(--app-bg-secondary);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid var(--el-border-color);
  box-shadow: var(--el-box-shadow-light);
}

.info-icon {
  color: #409eff;
  flex-shrink: 0;
}

.info-text {
  flex: 1;
}

.info-text h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: var(--app-text-primary);
}

.info-text p {
  margin: 4px 0;
  opacity: 0.9;
  font-size: 0.95rem;
}

.info-text a {
  color: var(--app-text-primary);
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  display: block;
  margin: 4px 0;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.info-text a:hover {
  opacity: 1;
  text-decoration: underline;
}

.contact-cta {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.contact-cta .el-button {
  font-size: 1.125rem;
  padding: 20px 40px;
  border-radius: 8px;
  font-weight: 600;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* Dialog Responsive */
:deep(.contact-dialog) {
  max-width: 500px;
  /* margin: 0 auto; */
}

:deep(.contact-dialog .el-dialog__body) {
  padding: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-section {
    padding: 60px 16px;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .contact-cta .el-button {
    width: 100%;
    padding: 16px 32px;
  }

  :deep(.contact-dialog) {
    max-width: 95%;
    width: 95%;
  }

  :deep(.contact-dialog .el-dialog__body) {
    padding: 15px;
  }

  :deep(.contact-dialog .el-dialog__header) {
    padding: 15px;
  }

  :deep(.contact-dialog .el-dialog__footer) {
    padding: 15px;
  }
}

@media (max-width: 640px) {
  .info-item {
    padding: 20px;
  }

  .info-text a {
    font-size: 0.875rem;
  }

  .info-text p {
    font-size: 0.875rem;
  }

  :deep(.contact-dialog .el-form-item__label) {
    font-size: 0.9rem;
  }

  :deep(.contact-dialog .el-input__inner) {
    font-size: 16px; /* Prevents zoom on iOS */
  }

  :deep(.contact-dialog .el-textarea__inner) {
    font-size: 16px; /* Prevents zoom on iOS */
  }
}
</style>
