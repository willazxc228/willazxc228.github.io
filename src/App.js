import "@fontsource/inter/900-italic.css"; // Black Italic для "Hello!"
import "@fontsource/inter/800-italic.css"; // Extra Bold Italic для "Nice to meet u"
import React from "react";
import { motion } from "framer-motion";
import "./styles.css"; // Подключаем CSS-файл

const socialLinks = [
  { name: "X", image: "/x.png", style: "social-icon x", url: "https://x.com/Dazaiii228" },
  { name: "Discord", image: "/discord.png", style: "social-icon discord", url: "https://discordapp.com/users/882122756165087233" },
  { name: "GitHub", image: "/github.png", style: "social-icon github", url: "https://github.com/willazxc228" },
  { name: "Steam", image: "/steam.png", style: "social-icon steam", url: "https://steamcommunity.com/id/SHIIIIS/" },
  { name: "Telegram", image: "/telegram.png", style: "social-icon telegram", url: "https://t.me/NiceFittts" },
  { name: "Instagram", image: "/instagram.png", style: "social-icon instagram", url: "https://www.instagram.com/shiiissssshhh/" }
];

const App = () => {
  return (
    <div className="container">
      {/* Центральный круг */}
      <div className="circle">
        <img src="/cat.png" alt="Black Cat" className="cat-image" />
      </div>

      {/* Социальные иконки */}
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url} // Добавляем ссылку
          target="_blank" // Открываем в новой вкладке
          rel="noopener noreferrer" // Защита от уязвимостей
          whileHover={{ scale: 1.2 }}
          className={link.style}
        >
          <img src={link.image} alt={link.name} className="icon-image" />
          <span className="icon-text">{link.name}</span>
        </motion.a>
      ))}

      {/* Текст */}
      <div className="text-box">
        <p className="greeting">Hello!</p>
        <p className="subtext">Nice to meet u</p>
      </div>
    </div>
  );
};

export default App;