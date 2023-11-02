export default function ViewProject({ index }) {
  return (
    <>
      <span className="hireBtn viewProject">
        <a
          href="#"
          target="_blank"
          type="button"
          className="hireBtn explore"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          data-bs-popup={index}
        >
          VIEW PROJECT
        </a>
      </span>
    </>
  );
}
