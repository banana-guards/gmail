import Modal from "react-modal";

Modal.setAppElement("#root");

export const ModalHeader = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="bg-white max-w-2xl p-6 mx-auto my-20 rounded-lg overflow-y-auto max-h-[80vh]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Jose Luis Herrera</h2>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/jose-luis-h-g/"
          className="text-blue-600 visited:text-purple-600"
        >
          linkedin/jose-luis-h-g
        </a>
      </p>
      <p>
        <strong>Teléfono:</strong> 618 146 7962
      </p>
      <p>
        <strong>Email:</strong> herrera.clip@gmail.com
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/banana-guards"
          className="text-blue-600 visited:text-purple-600"
        >
          github.com/banana-guards
        </a>
      </p>

      <hr className="my-3" />

      <h3 className="font-semibold">Experiencia Profesional</h3>
      <p>
        <strong>MW Consultoría Digital (Ago - Dic 2023)</strong>
      </p>
      <ul className="list-disc ml-5 mb-3 text-sm">
        <li>Desarrollo de sitios web responsivos con HTML, CSS, JS.</li>
        <li>Componentes interactivos para páginas informativas.</li>
        <li>Microservicio de notificaciones con Nodemailer y Redis.</li>
      </ul>

      <h3 className="font-semibold">Proyectos Personales</h3>
      <ul className="list-disc ml-5 mb-3 text-sm">
        <li>
          <strong>FitMe App:</strong> App para rutinas con React Native, NestJS,
          MongoDB, Docker.
        </li>
        <li>
          <strong>NYT Clone:</strong> HTML/CSS para clonar New York Times.
        </li>
        <li>
          <strong>CRUD Estacionamiento:</strong> App con React, NestJS,
          PostgreSQL.
        </li>
      </ul>

      <h3 className="font-semibold">Educación</h3>
      <p>
        Instituto Tecnológico de Durango (2018-2023) - Ingeniería Electrónica
      </p>

      <h3 className="font-semibold mt-3">Cursos y Certificados</h3>
      <p>
        Tailwind, CSS, GIT, Networking, Data Science{" "}
        <a
          href="https://drive.google.com/drive/folders/1IfqFZatyxLDPpC1SBhemRHQTT9IJAGQ5?usp=sharing"
          className="text-blue-600 visited:text-purple-600"
        >
          (ver carpeta en Drive)
        </a>
      </p>

      <h3 className="font-semibold mt-3">Habilidades Técnicas</h3>
      <p className="text-sm">
        <strong>Frontend:</strong> HTML, CSS, JS, React, Tailwind, Zustand,
        Vite, Expo
        <br />
        <strong>Backend:</strong> NestJS, Express, PostgreSQL, MongoDB, Redis,
        Docker, OAuth2, JWT
        <br />
        <strong>Otros:</strong> GitHub, Jira, AWS, Metodologías ágiles, Python,
        scikit-learn
      </p>

      <h3 className="font-semibold mt-3">Habilidades Blandas</h3>
      <ul className="list-disc ml-5 text-sm">
        <li>Curiosidad aplicada</li>
        <li>Adaptabilidad en entornos ágiles</li>
      </ul>

      <div className="flex justify-end mt-6">
        <button
          onClick={closeModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Cerrar
        </button>
      </div>
    </Modal>
  );
};
