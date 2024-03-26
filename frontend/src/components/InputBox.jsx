export default function InputBox({ label, placeholder, onchange }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        onChange={onchange}
        placeholder={placeholder}
        className="w-full px-2 py-2 "
      ></input>
    </div>
  );
}
