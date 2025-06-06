"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

interface IUserInput {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations();

  const [userInput, setUserInput] = useState<IUserInput>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!userID) {
      console.error("Missing EmailJS public key");
      return;
    }
    emailjs.init(userID);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!serviceID || !templateID) {
      toast.error(t("contact.error"));
      return;
    }

    const emailParams: Record<string, string> = {
      name: userInput.name,
      subject: userInput.subject,
      email: userInput.email,
      message: userInput.message,
      reply_to: userInput.email, 
    };

    try {
      const res = await emailjs.send(serviceID, templateID, emailParams);

      if (res.status === 200) {
        toast.success(t("contact.success"));
        setUserInput({ name: "", subject: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error(t("contact.error"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto p-6 bg-white rounded-none space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">{t("contact.name")}</label>
        <input
          type="text"
          name="name"
          value={userInput.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-none border border-[var(--color-foreground)] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-accent)]"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">{t("contact.email")}</label>
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-none border border-[var(--color-foreground)] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-accent)]"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">{t("contact.subject")}</label>
        <input
          type="text"
          name="subject"
          value={userInput.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-none border border-[var(--color-foreground)] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-accent)]"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">{t("contact.message")}</label>
        <textarea
          name="message"
          value={userInput.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 rounded-none border border-[var(--color-foreground)] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-accent)]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[var(--color-secondary-accent)] hover:bg-[var(--color-foreground)] text-[var(--color-foreground)] hover:text-[var(--color-accent)] border-[var(--color-secondary-accent)] font-semibold py-2 px-4 cursor-pointer rounded-none transition"
      >
        {t("contact.submit")}
      </button>
    </form>
  );
}
