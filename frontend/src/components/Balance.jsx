export default function Balance({ value }) {
  return (
    <div className="flex justify-start text-lg font-semibold">
      <div className="px-6 pt-5">Your Balance</div>
      <div className="px-2 pt-5">Rs. {value}</div>
    </div>
  );
}
