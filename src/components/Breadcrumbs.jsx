import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {items.map((item, index) => (
          <li
            key={index}
            className="breadcrumb-item"
          >
            {item.path ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}