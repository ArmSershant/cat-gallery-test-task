import "./Controls.scss";

export default function Controls({
  enabled,
  setEnabled,
  auto,
  setAuto,
  getCat,
}) {
  return (
    <div className="controls">
      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        Enabled
      </label>
      <label>
        <input
          type="checkbox"
          checked={auto}
          onChange={(e) => setAuto(e.target.checked)}
        />
        Auto-refresh every 5 second
      </label>
      <button onClick={getCat}>Get cat</button>
    </div>
  );
}
