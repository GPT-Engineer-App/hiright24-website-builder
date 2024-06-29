import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Index = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch("https://formsubmit.co/hiright24@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <img src="/logo.png" alt="HiRight24 Oy Logo" className="h-12" />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#contact" className="text-gray-700 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#background" className="text-gray-700 hover:text-gray-900">
                  Background
                </a>
              </li>
              <li>
                <a href="#details" className="text-gray-700 hover:text-gray-900">
                  Details
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="background" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Company Background</h2>
          <p>
            HiRight24 Oy is a leading manpower services provider. We specialize in connecting skilled professionals with top companies. Our mission is to provide reliable and efficient manpower solutions to meet the needs of our clients.
          </p>
        </section>

        <section id="details" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Company Details</h2>
          <p>
            At HiRight24 Oy, we pride ourselves on our commitment to excellence and our ability to deliver top-notch services. Our team of experts works tirelessly to ensure that our clients receive the best possible service.
          </p>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Index;