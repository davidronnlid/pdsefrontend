const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/1ced7460-2080-11ed-a969-f1ede4dc5ccf";

const ContactForm = () => {
  return (
    <form action={FORM_ENDPOINT} method="POST" target="_blank">
      <div>
        <input type="text" placeholder="Ditt namn" name="namne" required />
      </div>
      <div>
        <input type="email" placeholder="Din email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Ditt meddelande" name="message" required />
      </div>
      <div>
        <button type="submit">Skicka meddelande till Johan och David</button>
      </div>
    </form>
  );
};

export default ContactForm;
