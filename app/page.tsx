'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, Shield, Heart, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");

  const sendToWhatsApp = () => {
    if (!name || !phone || !concern) {
      alert("Please fill out all fields.");
      return;
    }

    const message = `👋 *New Consultation Request*%0A%0A👤 *Name:* ${name}%0A📞 *Phone:* ${phone}%0A🩺 *Health Concern:* ${concern}`;
    const whatsappNumber = "919384913453"; // ✅ Use your WhatsApp number here (no +, no spaces)

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  const treatments = [
    "Headache & Migraine Relief",
    "Blood Circulation Therapy",
    "Digestive Disorders",
    "Joint Pain & Arthritis",
    "Body Pain Relief",
    "Traditional Massage Therapy",
    "Specialize Pain Management",
    "All Types of Sprains",
    "Muscle Cramps",
    "Blood Clot",
    "Gastric Problem",
    "Full Body Massage ",
  ];

  const contactNumbers = [
    { name: "Main Office", number: "93849 13453" },
    { name: "Treatment Center", number: "97915 13453" },
    { name: "Consultation", number: "89736 27306" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            
              <img src="/logo.jpeg" className="w-12 h-12 text-white" />
            
            <div>
              <h1 className="text-2xl font-bold text-green-800">PRNV TREATMENT</h1>
              <p className="text-sm text-green-600">Panja Roga Nivarana Vaithiyam</p>
            </div>
          </div>
          {/* Phone - Responsive Display */}
<a
  href="tel:9384913453"
  className="text-green-700 flex items-center space-x-2"
>
  {/* Show icon only on mobile */}
  <Phone className="w-5 h-5 lg:hidden" />

  {/* Show icon + number on lg screens and up */}
  <div className="hidden lg:flex items-center space-x-2">
    <Phone className="w-5 h-5" />
    <span className="font-semibold">93849 13453</span>
  </div>
</a>

        </div>
      </header>

     {/* Hero Section - Kalari Ayurvedic Treatment */}
<section
  className="relative bg-no-repeat bg-cover py-20 text-white"
  style={{
    backgroundImage: "url('/prnv.jpeg')", // replace with your actual image
    backgroundPosition: "65% center",  // Shifts the visible part even more right
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="relative container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        {/* Highlight Badge */}
        <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold bg-yellow-500 text-green-900 rounded-full shadow">
          Special Kalari Varma Treatment
        </span>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          No Medicines Required to Relieve Chronic Pain & Disorders
        </h2>

        {/* Description */}
        <p className="text-lg mb-8 text-green-100">
          Experience the timeless power of the traditional Indian treatment method. Get natural, side-effect-free
          healing for muscle cramps, nerve blocks, joint pain, migraines, and full-body rejuvenation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href="#consultation">
          <button className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition">
            Book a Consultation
          </button>
          </a>
          <Link href="/explore-treatments">
          <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-green-800 transition">
            Explore Treatments
          </button>
          </Link>
        </div>

        {/* Price Tag */}
        <div className="inline-block bg-green-700 bg-opacity-80 text-white px-6 py-4 rounded-lg shadow">
          <div className="text-2xl font-bold">Starting at ₹1499/-</div>
          <div className="text-sm">Complete Treatment Package</div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Expert Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Experienced practitioners with traditional healing expertise</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Personalized Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Customized treatment plans for individual health needs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Time-tested traditional methods with modern care standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatments Section with Background Image */}
<section
  className="relative py-16 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/treatment1.jpg')", // Replace with your actual image path
  }}
>
  {/* Optional Overlay */}
  <div className="absolute inset-0 bg-white bg-opacity-40"></div>

  <div className="relative container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialized Treatments</h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Comprehensive traditional medical treatments for various health conditions
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {treatments.map((treatment, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow bg-white bg-opacity-90">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="font-medium text-gray-800">{treatment}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-green-100 mb-8">
                Ready to start your healing journey? Contact us today to schedule your consultation.
              </p>

              <div className="space-y-4 mb-8">
  {contactNumbers.map((contact, index) => (
    <div key={index} className="flex items-center space-x-3">
      <Phone className="w-5 h-5 text-green-200" />
      <div>
        <div className="font-semibold">{contact.name}</div>
        <a href={`tel:${contact.number.replace(/\s+/g, "")}`}>
          <div className="text-green-200 underline hover:text-white transition">
            {contact.number}
          </div>
        </a>
      </div>
    </div>
  ))}
</div>


              <div className="flex items-start space-x-3">
  <MapPin className="w-5 h-5 text-green-200 mt-1" />
  <div>
    <div className="font-semibold">Location</div>
    <a
      href="https://www.google.com/maps/search/ABC+10%2F47,POWER+HOUSE+,+SOMANUR/@11.0879998,77.1849461,19.12z?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-200 underline hover:text-white transition"
    >
      ABC 10/47, Power House, Near Bridge, Somanur<br />
      Coimbatore, Tamil Nadu - 641668
    </a>
  </div>
</div>

            </div>

            {/* ✅ FIXED CONSULTATION CARD */}
      <Card className="bg-white text-gray-900" id="consultation">
        <CardHeader>
          <CardTitle>Book Your Consultation</CardTitle>
          <CardDescription>
            Fill out the form and we'll get back to you shortly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Health Concern</label>
            <textarea
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows={3}
              placeholder="Describe your health concern"
            ></textarea>
          </div>
          <Button
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={sendToWhatsApp}
          >
            Send via WhatsApp
          </Button>
        </CardContent>
      </Card>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                
                  <img src="/logo.jpeg" className="w-10 h-10 text-white"  />
                
                <span className="text-xl font-bold">PRNV TREATMENTS</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in traditional healing and wellness. Experience the power of authentic medical
                treatments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>93849 13453</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon - Sun: 8AM - 8PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Coimbatore, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PRNV Treatments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
