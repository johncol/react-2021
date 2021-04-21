import React, { useContext, useState } from 'react';

const themes = {
  light: { background: '#ddd', color: '#333' },
  dark: { background: '#666', color: '#fff' },
};

const ThemeContext = React.createContext(themes.light);

export const UseContextSample = () => {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === themes.light ? themes.dark : themes.light;
    });
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggler toggleTheme={toggleTheme} />
      <MyCard />
    </ThemeContext.Provider>
  );
};

const ThemeToggler = ({ toggleTheme }) => {
  return (
    <div style={{ textAlign: 'center', margin: 15, marginTop: 0 }}>
      <button className="button" onClick={toggleTheme}>
        Toggle Theme!
      </button>
    </div>
  );
};

const MyCard = () => {
  const currentTheme = useContext(ThemeContext);
  return (
    <>
      <div className="card" style={{ ...currentTheme }}>
        <div className="card-content">This is my card</div>
      </div>
    </>
  );
};
