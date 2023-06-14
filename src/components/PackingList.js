import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  onhandleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let SortedItems;
  if (sortBy === "input") SortedItems = items;

  if (sortBy === "description")
    SortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    SortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {SortedItems.length > 0
          ? SortedItems.map((item) => (
              <Item
                item={item}
                onToggleItem={onToggleItem}
                onDeleteItems={onDeleteItems}
                key={item.id}
              />
            ))
          : null}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED</option>
        </select>
        <button onClick={onhandleClearList}>CLEAR LIST</button>
      </div>
    </div>
  );
}
