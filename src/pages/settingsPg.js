import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Settings() {
  const defaultHex = '#B8860B'; // Dark goldenrod
  const defaultCSS = 'var(--gold)';

  const [tempColor, setTempColor] = useState(defaultHex);
  const [savedColor, setSavedColor] = useState(defaultCSS);

  // 🧠 Helper: Pick white or black text depending on background
  const getContrastColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? '#000000' : '#ffffff';
  };

  // 🎨 Apply all theme variables
  const applyThemeColor = (color) => {
    const root = document.documentElement;
    const textColor = getContrastColor(color);

    root.style.setProperty('--sidebar-color', color);
    root.style.setProperty('--sidebar-text-color', textColor);
    root.style.setProperty('--sidebar-icon-color', textColor);
    root.style.setProperty('--button-color', color);
    root.style.setProperty('--button-text-color', textColor);
  };

  // 🔁 Load color on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('sidebarColor');
      if (stored) {
        setTempColor(stored);
        setSavedColor(stored);
        applyThemeColor(stored);
      } else {
        applyThemeColor(defaultHex);
      }
    }
  }, []);

  // 🎯 When color is selected
  const handleColorChange = (e) => {
    setTempColor(e.target.value);
  };

  // 💾 Save button
  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebarColor', tempColor);
    }
    setSavedColor(tempColor);
    applyThemeColor(tempColor);
  };

  // ♻️ Reset to default
  const handleReset = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('sidebarColor');
    }
    setTempColor(defaultHex);
    setSavedColor(defaultCSS);
    applyThemeColor(defaultHex);
  };

  return (
    <Layout>
      <div className="settings-page">
        <h2>Settings</h2>

        <div className="setting-group">
          <label htmlFor="sidebarColor">Sidebar Color:</label>
          <input
            type="color"
            id="sidebarColor"
            value={tempColor}
            onChange={handleColorChange}
          />
        </div>

        <button onClick={handleSave} className="save-btn">Save</button>
        <button onClick={handleReset} className="reset-btn">Reset to Default</button>
      </div>
    </Layout>
  );
}
