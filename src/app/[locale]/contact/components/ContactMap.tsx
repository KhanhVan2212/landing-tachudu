import React from "react";

const ContactMap = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-xl lg:h-auto lg:flex-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.195251817531!2d105.8279853!3d20.9847183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac5f39d89951%3A0x7d6b38c35252875b!2zU2hvdyAyMzAvMzEgUGjhu5EgxJDhu4tuaCBDw7RuZyBUaMaw4bujbmcsIMSQ4buLbmggQ8O0bmcsIEhvw6BuZyBNYWksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1709198123456!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      ></iframe>
    </div>
  );
};

export default ContactMap;
