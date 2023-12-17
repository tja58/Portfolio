const nodeMailer = require("nodemailer");

module.exports = (app) => {
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, msg } = req.body;

    const transporter = nodeMailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "taylor58.dev@gmail.com",
        pass: process.env.NODEMAILERPASS,
      },
      secure: true,
    });

    const mailData = {
      from: "taylor58.dev@gmail.com",
      to: "taylor58.dev@gmail.com",
      subject: subject,
      text: "Test",
      html: `<h3>From: ${name}, ${email}</h3><p>${msg}</p>`,
    };

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        res.status(400).send("Error in sending email");
      } else {
        res
          .status(200)
          .send(
            "Email successfully sent! I'll be sure to reach out as soon as I can!"
          );
      }
    });
  });
};
