export default function Button({ text }) {
    return (
      <button
        className="text-center px-4 py-2 rounded-lg bg-primary border-primary border-2 text-sm font-medium text-gray-900 transition hover:bg-hover-primary hover:text-white hover:border-hover-primary"
      >
        {text}
      </button>
    );
  }
  