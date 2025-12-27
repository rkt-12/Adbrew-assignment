//file for displaying error messages in the UI

export default function ErrorBanner({ message, onClose }) {
  return (
    <div style={{ color: "red", marginBottom: "10px" }}>
      {message}
      <button
        style={{ marginLeft: "10px" }}
        onClick={onClose}
      >
        ✖
      </button>
    </div>
  );
}
