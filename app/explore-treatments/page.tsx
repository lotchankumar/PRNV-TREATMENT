// app/explore-treatments/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

const treatmentVideos = [
  {
    title: "Full Body Kalari Massage",
    description: "An ancient Kerala healing method for muscular balance and energy flow.",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID1", // Replace with actual embed links
  },
  {
    title: "Varma Therapy for Back Pain",
    description: "Targeted pressure point therapy to relieve chronic back pain.",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID2",
  },
  {
    title: "Migraine & Nerve Block Treatment",
    description: "Natural therapy focused on nerve healing and migraine relief.",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID3",
  },
]

export default function ExploreTreatmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-20">
      {/* Page Header */}
      <header className="bg-white shadow-sm border-b py-4 mb-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-800">Explore Treatments</h1>
          <Link href="/">
            <span className="text-green-600 hover:underline text-sm">← Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Video Gallery */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Watch Our Healing Therapies</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover the power of traditional treatments through our curated videos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentVideos.map((treatment, index) => (
            <Card key={index} className="overflow-hidden shadow hover:shadow-lg transition">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={treatment.embedUrl}
                  title={treatment.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardContent className="p-4">
                <CardTitle className="text-lg text-green-800 mb-2">{treatment.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{treatment.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
