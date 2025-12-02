import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Log the submission
      console.log("📧 Contact Form Submission:");
      console.log(`   Name: ${name}`);
      console.log(`   Email: ${email}`);
      console.log(`   Message: ${message}`);

      // If email credentials are configured, send the email
      if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
        const nodemailer = await import("nodemailer");

        const transporter = nodemailer.default.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to yourself
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
          replyTo: email,
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully");
      } else {
        console.log("⚠️  Email credentials not configured. Message logged only.");
      }

      res.json({ success: true, message: "Message received successfully" });
    } catch (error) {
      console.error("❌ Error processing contact form:", error);
      res.status(500).json({ error: "Failed to process message" });
    }
  });

  return httpServer;
}
