export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>You can add thign to your packing List !! 😍</em>
      </p>
    );
  const numItems = items.length;
  const numsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numsPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>"You have packed everything !! Ready to go ✈️"</em>
      ) : (
        <em>
          You have {numItems} items in your list and you already packed{" "}
          {numsPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
