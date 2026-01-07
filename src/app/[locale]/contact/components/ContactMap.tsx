import React from "react";

const ContactMap = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-xl lg:h-auto lg:flex-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4582.37930035829!2d105.85429947596982!3d21.02898918776942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abea6caa169b%3A0xf8e0fd4c69a5edba!2zMiBQLiBUw7RuZyDEkOG6o24sIEzDvSBUaMOhaSBU4buVLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1767758548639!5m2!1svi!2s"
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
